-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  company_name VARCHAR(255),
  job_title VARCHAR(100),
  user_type VARCHAR(20) CHECK (user_type IN ('supplier', 'buyer')) NOT NULL,
  country VARCHAR(2) NOT NULL, -- ISO country code
  phone VARCHAR(20),
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100) NOT NULL,
  origin_country VARCHAR(2) NOT NULL,
  price DECIMAL(10,2),
  currency VARCHAR(3) DEFAULT 'USD',
  unit VARCHAR(50),
  supplier_id UUID REFERENCES users(id) ON DELETE CASCADE,
  image_url TEXT,
  specifications JSONB,
  availability_status VARCHAR(20) DEFAULT 'available',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vendors table
CREATE TABLE IF NOT EXISTS vendors (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  company_name VARCHAR(255) NOT NULL,
  store_url VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  country VARCHAR(2) NOT NULL,
  city VARCHAR(100),
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  logo_url TEXT,
  banner_url TEXT,
  verification_status VARCHAR(20) DEFAULT 'pending',
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create market_prices table
CREATE TABLE IF NOT EXISTS market_prices (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  country VARCHAR(2) NOT NULL,
  market_location VARCHAR(100),
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) NOT NULL,
  unit VARCHAR(50) NOT NULL,
  price_date DATE NOT NULL,
  source VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255),
  participant_1 UUID REFERENCES users(id) ON DELETE CASCADE,
  participant_2 UUID REFERENCES users(id) ON DELETE CASCADE,
  last_message_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  message_type VARCHAR(20) DEFAULT 'text',
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_country ON products(origin_country);
CREATE INDEX IF NOT EXISTS idx_products_supplier ON products(supplier_id);
CREATE INDEX IF NOT EXISTS idx_vendors_country ON vendors(country);
CREATE INDEX IF NOT EXISTS idx_vendors_featured ON vendors(is_featured);
CREATE INDEX IF NOT EXISTS idx_market_prices_country ON market_prices(country);
CREATE INDEX IF NOT EXISTS idx_market_prices_date ON market_prices(price_date);
CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id);
