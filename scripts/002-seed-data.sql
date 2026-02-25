-- Insert sample East African market prices
INSERT INTO market_prices (product_name, country, market_location, price, currency, unit, price_date, source) VALUES
('Maize', 'KE', 'Nairobi', 45.50, 'KES', 'kg', CURRENT_DATE, 'Kenya Agricultural Commodity Exchange'),
('Coffee Beans', 'KE', 'Nairobi', 850.00, 'KES', 'kg', CURRENT_DATE, 'Nairobi Coffee Exchange'),
('Tea Leaves', 'KE', 'Mombasa', 320.00, 'KES', 'kg', CURRENT_DATE, 'East Africa Tea Trade Association'),
('Maize', 'TZ', 'Dar es Salaam', 1200.00, 'TZS', 'kg', CURRENT_DATE, 'Tanzania Mercantile Exchange'),
('Rice', 'TZ', 'Dar es Salaam', 2800.00, 'TZS', 'kg', CURRENT_DATE, 'Tanzania Mercantile Exchange'),
('Bananas', 'UG', 'Kampala', 3500.00, 'UGX', 'kg', CURRENT_DATE, 'Uganda Commodity Exchange'),
('Coffee Beans', 'UG', 'Kampala', 12000.00, 'UGX', 'kg', CURRENT_DATE, 'Uganda Coffee Development Authority'),
('Beans', 'RW', 'Kigali', 800.00, 'RWF', 'kg', CURRENT_DATE, 'Rwanda Agricultural Board'),
('Irish Potatoes', 'RW', 'Kigali', 450.00, 'RWF', 'kg', CURRENT_DATE, 'Rwanda Agricultural Board'),
('Sorghum', 'ET', 'Addis Ababa', 35.00, 'ETB', 'kg', CURRENT_DATE, 'Ethiopian Commodity Exchange');

-- Insert sample vendors
INSERT INTO vendors (user_id, company_name, store_url, description, country, city, phone, email, verification_status, is_featured) VALUES
(uuid_generate_v4(), 'Kenya Agro Supplies', 'kenya-agro-supplies', 'Leading supplier of agricultural products in Kenya', 'KE', 'Nairobi', '+254712345678', 'info@kenyaagro.co.ke', 'verified', true),
(uuid_generate_v4(), 'Tanzania Farm Solutions', 'tanzania-farm-solutions', 'Quality farm inputs and machinery for Tanzanian farmers', 'TZ', 'Dar es Salaam', '+255712345678', 'contact@tzfarm.co.tz', 'verified', true),
(uuid_generate_v4(), 'Uganda Coffee Exporters', 'uganda-coffee-exporters', 'Premium coffee beans from the heart of Uganda', 'UG', 'Kampala', '+256712345678', 'sales@ugcoffee.co.ug', 'verified', false),
(uuid_generate_v4(), 'Rwanda Fresh Produce', 'rwanda-fresh-produce', 'Fresh fruits and vegetables from Rwanda', 'RW', 'Kigali', '+250712345678', 'orders@rwfresh.rw', 'pending', false);

-- Insert sample products
INSERT INTO products (name, description, category, origin_country, price, currency, unit, specifications) VALUES
('Premium Arabica Coffee', 'High-quality Arabica coffee beans from the highlands of Kenya', 'Coffee & Tea', 'KE', 12.50, 'USD', 'kg', '{"grade": "AA", "processing": "washed", "altitude": "1800m"}'),
('Organic Maize', 'Certified organic maize suitable for human consumption and animal feed', 'Grains & Cereals', 'TZ', 0.85, 'USD', 'kg', '{"organic": true, "moisture": "14%", "protein": "9.5%"}'),
('Fresh Bananas', 'Sweet and nutritious bananas from Uganda', 'Fruits & Vegetables', 'UG', 1.20, 'USD', 'kg', '{"variety": "Cavendish", "ripeness": "green", "size": "medium"}'),
('Red Kidney Beans', 'High-protein red kidney beans from Rwanda', 'Legumes & Pulses', 'RW', 2.80, 'USD', 'kg', '{"protein": "22%", "grade": "Grade 1", "moisture": "12%"}');
