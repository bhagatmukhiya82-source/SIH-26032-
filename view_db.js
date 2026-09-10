const { PGlite } = require('@electric-sql/pglite');
const path = require('path');

async function main() {
  const target = (process.argv[2] || 'all').toLowerCase();
  console.log('\n' + '='.repeat(65));
  console.log('🐘 KISAN-Q SMART MANDI — POSTGRESQL DATABASE VIEWER');
  console.log('='.repeat(65));

  const dataDir = path.resolve(__dirname, 'pgdata');
  const pg = new PGlite(dataDir);

  const allTables = ['farmers', 'tokens', 'weighbridge_receipts', 'mandi_events'];
  const tables = target === 'all' ? allTables : [target];

  for (const tbl of tables) {
    try {
      const res = await pg.query(`SELECT * FROM ${tbl} LIMIT 25`);
      console.log(`\n📋 TABLE: [ ${tbl.toUpperCase()} ] — (${res.rows.length} records)`);
      if (res.rows.length === 0) {
        console.log('   (No records found in this table)');
      } else {
        console.table(res.rows);
      }
    } catch (err) {
      console.error(`❌ Error querying table "${tbl}":`, err.message);
    }
  }

  console.log('\n' + '-'.repeat(65));
  console.log('💡 Terminal Usage:');
  console.log('   node view_db.js              -> View all tables');
  console.log('   node view_db.js tokens       -> View tokens table only');
  console.log('   node view_db.js farmers      -> View registered farmers');
  console.log('   node view_db.js mandi_events -> View audit event logs');
  console.log('🌐 Web UI: Click the "DB: PG: Connected" badge on http://localhost:3000/');
  console.log('='.repeat(65) + '\n');
  process.exit(0);
}

main().catch(err => {
  console.error('Fatal database error:', err);
  process.exit(1);
});
