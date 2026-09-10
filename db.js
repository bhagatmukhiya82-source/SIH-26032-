require('dotenv').config();
const { Pool } = require('pg');
const { PGlite } = require('@electric-sql/pglite');
const path = require('path');

let remotePool = null;
let pgliteInstance = null;
let isPostgresConnected = false;
let dbMeta = {
  status: 'CONNECTED',
  engine: 'PostgreSQL v16',
  provider: 'PostgreSQL Embedded Engine (Local ./pgdata)',
  urlMasked: 'postgresql://embedded@localhost/kisan_q',
  storagePath: path.resolve(__dirname, 'pgdata'),
  tablesCreated: true,
  error: null
};

const SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS farmers (
  id VARCHAR(50) PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  phone VARCHAR(20) UNIQUE NOT NULL,
  state VARCHAR(100),
  district VARCHAR(100),
  mandi VARCHAR(150),
  land_ha NUMERIC(6, 2) NOT NULL,
  aadhaar_hash VARCHAR(100),
  bank_account VARCHAR(50),
  ifsc VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tokens (
  id VARCHAR(50) PRIMARY KEY,
  token_number INT NOT NULL,
  farmer_name VARCHAR(150) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  land_size_ha NUMERIC(6, 2),
  category VARCHAR(50),
  crop VARCHAR(50),
  crop_name VARCHAR(100),
  vehicle_no VARCHAR(50),
  vehicle_type VARCHAR(50),
  est_weight_mt NUMERIC(8, 2),
  slot VARCHAR(50),
  gate VARCHAR(100),
  status VARCHAR(50) DEFAULT 'BOOKED',
  source VARCHAR(50) DEFAULT 'SMARTPHONE_APP',
  priority VARCHAR(50) DEFAULT 'GENERAL_QUOTA',
  moisture_percent NUMERIC(4, 1),
  net_weight_mt NUMERIC(8, 2) DEFAULT 0,
  payout_amount NUMERIC(12, 2) DEFAULT 0,
  booked_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS weighbridge_receipts (
  id SERIAL PRIMARY KEY,
  token_id VARCHAR(50),
  gross_weight_mt NUMERIC(8, 2),
  tare_weight_mt NUMERIC(8, 2),
  net_weight_mt NUMERIC(8, 2),
  moisture_percent NUMERIC(4, 1),
  rate_per_mt NUMERIC(10, 2),
  payout_inr NUMERIC(12, 2),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mandi_events (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(50),
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_tokens_phone ON tokens(phone);
CREATE INDEX IF NOT EXISTS idx_tokens_status ON tokens(status);
`;

async function executeQuery(sql, params = []) {
  if (remotePool) {
    return await remotePool.query(sql, params);
  } else if (pgliteInstance) {
    return await pgliteInstance.query(sql, params);
  }
  throw new Error('No PostgreSQL engine initialized.');
}

async function executeScript(sql) {
  if (remotePool) {
    return await remotePool.query(sql);
  } else if (pgliteInstance) {
    if (typeof pgliteInstance.exec === 'function') {
      return await pgliteInstance.exec(sql);
    } else {
      return await pgliteInstance.query(sql);
    }
  }
}

async function initPostgres(customConnectionString) {
  const connStr = customConnectionString || process.env.DATABASE_URL;

  // 1. If remote connection string provided, connect via pg.Pool
  if (connStr && connStr.trim() !== '') {
    try {
      if (remotePool) {
        await remotePool.end();
      }
      const needsSsl = connStr.includes('sslmode=require') || connStr.includes('neon.tech') || connStr.includes('supabase');
      remotePool = new Pool({
        connectionString: connStr.trim(),
        ssl: needsSsl ? { rejectUnauthorized: false } : false,
        connectionTimeoutMillis: 5000
      });

      const client = await remotePool.connect();
      await client.query(SCHEMA_SQL);
      client.release();

      isPostgresConnected = true;
      dbMeta.status = 'CONNECTED';
      dbMeta.engine = 'PostgreSQL v16 (Remote Cloud)';
      dbMeta.provider = connStr.includes('neon.tech') ? 'Neon Serverless PostgreSQL' : (connStr.includes('supabase') ? 'Supabase Managed PostgreSQL' : 'Remote PostgreSQL Server');
      try {
        const u = new URL(connStr.trim());
        u.password = '••••••••';
        dbMeta.urlMasked = u.toString();
      } catch(e) {
        dbMeta.urlMasked = 'postgresql://***@configured';
      }
      dbMeta.tablesCreated = true;
      dbMeta.error = null;
      console.log(`🐘 [PostgreSQL] Connected to remote database: ${dbMeta.provider}`);
      return true;
    } catch(err) {
      console.warn('⚠️ Remote PostgreSQL connection failed, falling back to local PostgreSQL engine:', err.message);
      remotePool = null;
    }
  }

  // 2. Initialize local embedded PostgreSQL (PGlite)
  try {
    if (!pgliteInstance) {
      const dataDir = path.resolve(__dirname, 'pgdata');
      pgliteInstance = new PGlite(dataDir);
      await executeScript(SCHEMA_SQL);
      console.log('🐘 [PostgreSQL] Local Embedded Engine initialized at:', dataDir);
    }

    isPostgresConnected = true;
    dbMeta.status = 'CONNECTED';
    dbMeta.engine = 'PostgreSQL v16 (Embedded PGlite Engine)';
    dbMeta.provider = 'Local Persistent PostgreSQL Engine (./pgdata)';
    dbMeta.urlMasked = 'postgresql://embedded@localhost:5432/kisan_q (Disk-Backed)';
    dbMeta.tablesCreated = true;
    dbMeta.error = null;

    // Seed initial audit log if empty
    await logMandiEventDb('SYSTEM_INIT', 'KISAN-Q PostgreSQL Database initialized with tables (farmers, tokens, weighbridge_receipts, mandi_events).');

    return true;
  } catch(err) {
    console.error('❌ Failed to initialize local PostgreSQL engine:', err);
    isPostgresConnected = false;
    dbMeta.status = 'ERROR';
    dbMeta.error = err.message;
    return false;
  }
}

async function insertFarmerDb(f) {
  if (!isPostgresConnected) return null;
  try {
    const q = `
      INSERT INTO farmers (id, full_name, phone, state, district, mandi, land_ha, aadhaar_hash, bank_account, ifsc)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (phone) DO UPDATE SET
        full_name = EXCLUDED.full_name,
        land_ha = EXCLUDED.land_ha,
        mandi = EXCLUDED.mandi
      RETURNING *
    `;
    const res = await executeQuery(q, [
      f.id, f.fullName, f.phone, f.state, f.district, f.mandi, f.landHa, f.aadhaarHash, f.bankAccount, f.ifsc
    ]);
    return res.rows[0];
  } catch(e) {
    console.error('Farmer DB insert error:', e.message);
    return null;
  }
}

async function insertTokenDb(t) {
  if (!isPostgresConnected) return null;
  try {
    const q = `
      INSERT INTO tokens (id, token_number, farmer_name, phone, land_size_ha, category, crop, crop_name, vehicle_no, vehicle_type, est_weight_mt, slot, gate, status, source, priority, moisture_percent, net_weight_mt, payout_amount, booked_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
      ON CONFLICT (id) DO UPDATE SET
        status = EXCLUDED.status,
        gate = EXCLUDED.gate
      RETURNING *
    `;
    const res = await executeQuery(q, [
      t.id, t.tokenNumber, t.farmerName, t.phone, t.landSizeHa, t.category, t.crop, t.cropName, t.vehicleNo, t.vehicleType, t.estWeightMT, t.slot, t.gate, t.status, t.source, t.priority, t.moisturePercent, t.netWeightMT, t.payoutAmount, t.bookedAt
    ]);
    return res.rows[0];
  } catch(e) {
    console.error('Token DB insert error:', e.message);
    return null;
  }
}

async function logMandiEventDb(eventType, description) {
  if (!isPostgresConnected) return null;
  try {
    const q = `INSERT INTO mandi_events (event_type, description) VALUES ($1, $2) RETURNING *`;
    const res = await executeQuery(q, [eventType, description]);
    return res.rows[0];
  } catch(e) {
    return null;
  }
}

async function getDbTelemetry() {
  const result = {
    connected: isPostgresConnected,
    meta: dbMeta,
    counts: { farmers: 0, tokens: 0, events: 0 }
  };

  if (isPostgresConnected) {
    try {
      const fRes = await executeQuery('SELECT COUNT(*) as count FROM farmers');
      const tRes = await executeQuery('SELECT COUNT(*) as count FROM tokens');
      const eRes = await executeQuery('SELECT COUNT(*) as count FROM mandi_events');
      result.counts.farmers = parseInt(fRes.rows[0].count, 10);
      result.counts.tokens = parseInt(tRes.rows[0].count, 10);
      result.counts.events = parseInt(eRes.rows[0].count, 10);
    } catch(e) {
      console.warn('Telemetry query error:', e.message);
    }
  }
  return result;
}

// Pre-seed initial tokens into PostgreSQL if empty
async function seedInitialDataIfEmpty(initialTokens = [], initialFarmers = []) {
  if (!isPostgresConnected) return;
  try {
    const countRes = await executeQuery('SELECT COUNT(*) as count FROM tokens');
    const count = parseInt(countRes.rows[0].count, 10);
    if (count === 0 && initialTokens.length > 0) {
      console.log(`🌾 Pre-seeding ${initialTokens.length} tokens into PostgreSQL...`);
      for (const t of initialTokens) {
        await insertTokenDb(t);
      }
      for (const f of initialFarmers) {
        await insertFarmerDb(f);
      }
      console.log('✅ Initial tokens successfully seeded into PostgreSQL!');
    }
  } catch(e) {
    console.warn('Seeding notice:', e.message);
  }
}

async function getTableRows(tableName, limit = 50) {
  const allowed = ['farmers', 'tokens', 'weighbridge_receipts', 'mandi_events'];
  const tbl = (tableName || '').toLowerCase().trim();
  if (!allowed.includes(tbl)) {
    throw new Error(`Invalid table name: "${tableName}". Allowed: ${allowed.join(', ')}`);
  }
  const res = await executeQuery(`SELECT * FROM ${tbl} ORDER BY 1 DESC LIMIT $1`, [limit]);
  const fields = res.fields ? res.fields.map(f => (typeof f === 'string' ? f : f.name)) : (res.rows[0] ? Object.keys(res.rows[0]) : []);
  return {
    tableName: tbl,
    fields,
    rows: res.rows,
    rowCount: res.rows.length
  };
}

async function runCustomQuery(sql) {
  if (!sql || typeof sql !== 'string') {
    throw new Error('Valid SQL query string required.');
  }
  const trimmed = sql.trim().replace(/;+$/, '');
  const firstWord = trimmed.split(/\s+/)[0].toUpperCase();
  if (!['SELECT', 'EXPLAIN', 'WITH'].includes(firstWord)) {
    throw new Error('Security Notice: Only read-only queries (SELECT, EXPLAIN) are permitted in SQL Explorer.');
  }
  const res = await executeQuery(trimmed);
  const fields = res.fields ? res.fields.map(f => (typeof f === 'string' ? f : f.name)) : (res.rows[0] ? Object.keys(res.rows[0]) : []);
  return {
    query: trimmed,
    fields,
    rows: res.rows,
    rowCount: res.rows.length
  };
}

module.exports = {
  initPostgres,
  insertFarmerDb,
  insertTokenDb,
  logMandiEventDb,
  getDbTelemetry,
  getTableRows,
  runCustomQuery,
  seedInitialDataIfEmpty,
  isPostgresConnected: () => isPostgresConnected
};

