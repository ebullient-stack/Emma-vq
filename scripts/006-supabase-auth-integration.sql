-- Create auth schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS auth;

-- Create verification_tokens table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.verification_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies to verification_tokens
ALTER TABLE public.verification_tokens ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to read verification tokens (for verification)
CREATE POLICY "Allow anonymous users to read verification tokens" 
  ON public.verification_tokens FOR SELECT 
  USING (true);

-- Allow authenticated users to read their own verification tokens
CREATE POLICY "Allow authenticated users to read their own verification tokens" 
  ON public.verification_tokens FOR SELECT 
  USING (auth.uid() IN (SELECT id FROM public.users WHERE email = verification_tokens.email));

-- Allow service role to manage verification tokens
CREATE POLICY "Allow service role to manage verification tokens" 
  ON public.verification_tokens 
  USING (auth.role() = 'service_role');

-- Add RLS policies to users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own data
CREATE POLICY "Allow users to read their own data" 
  ON public.users FOR SELECT 
  USING (auth.uid() = id);

-- Allow service role to manage users
CREATE POLICY "Allow service role to manage users" 
  ON public.users 
  USING (auth.role() = 'service_role');

-- Add RLS policies to vendors table
ALTER TABLE public.vendors ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own vendor data
CREATE POLICY "Allow users to read their own vendor data" 
  ON public.vendors FOR SELECT 
  USING (auth.uid() = user_id);

-- Allow service role to manage vendors
CREATE POLICY "Allow service role to manage vendors" 
  ON public.vendors 
  USING (auth.role() = 'service_role');

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, first_name, last_name, company_name, job_title, user_type, country, verified)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'company_name',
    NEW.raw_user_meta_data->>'job_title',
    NEW.raw_user_meta_data->>'user_type',
    NEW.raw_user_meta_data->>'country',
    NEW.email_confirmed_at IS NOT NULL
  )
  ON CONFLICT (id) DO UPDATE
  SET
    email = EXCLUDED.email,
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    company_name = EXCLUDED.company_name,
    job_title = EXCLUDED.job_title,
    user_type = EXCLUDED.user_type,
    country = EXCLUDED.country,
    verified = EXCLUDED.verified,
    updated_at = NOW();
  
  -- If user is a supplier, create vendor profile
  IF NEW.raw_user_meta_data->>'user_type' = 'supplier' THEN
    INSERT INTO public.vendors (
      user_id,
      company_name,
      store_url,
      country,
      email,
      verification_status
    )
    VALUES (
      NEW.id,
      NEW.raw_user_meta_data->>'company_name',
      LOWER(REGEXP_REPLACE(NEW.raw_user_meta_data->>'company_name', '[^a-zA-Z0-9]', '-', 'g')) || '-' || EXTRACT(EPOCH FROM NOW())::TEXT,
      COALESCE(NEW.raw_user_meta_data->>'country', 'KE'),
      NEW.email,
      'pending'
    )
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to handle user updates
CREATE OR REPLACE FUNCTION public.handle_user_update()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.users
  SET
    email = NEW.email,
    verified = NEW.email_confirmed_at IS NOT NULL,
    updated_at = NOW()
  WHERE id = NEW.id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for user updates
DROP TRIGGER IF EXISTS on_auth_user_updated ON auth.users;
CREATE TRIGGER on_auth_user_updated
  AFTER UPDATE ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_user_update();
