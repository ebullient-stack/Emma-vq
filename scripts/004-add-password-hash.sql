-- Add password_hash column to users table for bcrypt hashed passwords
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- Create index on password_hash for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_password_hash ON users(password_hash);

-- Update verification_tokens table to ensure proper indexing
CREATE INDEX IF NOT EXISTS idx_verification_tokens_token ON verification_tokens(token);
CREATE INDEX IF NOT EXISTS idx_verification_tokens_email ON verification_tokens(email);
CREATE INDEX IF NOT EXISTS idx_verification_tokens_expires_at ON verification_tokens(expires_at);
