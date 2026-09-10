-- KISAN-Q APMC Mandi Smart Slot Booking Database Schema
-- Compatible with PostgreSQL 12+ (Neon, Supabase, AWS RDS, Local PostgreSQL)

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
  token_id VARCHAR(50) REFERENCES tokens(id) ON DELETE CASCADE,
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
CREATE INDEX IF NOT EXISTS idx_tokens_slot ON tokens(slot);
