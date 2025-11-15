-- Migration: Add new fields and update defaults
-- Run this in Supabase SQL Editor

-- Add new columns for engine_displacement and condition
ALTER TABLE cars 
ADD COLUMN IF NOT EXISTS engine_displacement INTEGER,
ADD COLUMN IF NOT EXISTS condition TEXT;

-- Update default values for transmission and city
ALTER TABLE cars 
ALTER COLUMN transmission SET DEFAULT 'Automatic',
ALTER COLUMN city SET DEFAULT 'Osijek';

-- Update existing NULL values to defaults (optional - only if you want to update existing records)
UPDATE cars 
SET transmission = 'Automatic' 
WHERE transmission IS NULL OR transmission = 'Manual';

UPDATE cars 
SET city = 'Osijek' 
WHERE city IS NULL OR city = 'Zagreb';

-- Note: We removed model_year and registration_until fields from the form,
-- but if they exist in your database, you can keep them or remove them:
-- ALTER TABLE cars DROP COLUMN IF EXISTS model_year;
-- ALTER TABLE cars DROP COLUMN IF EXISTS registration_until;

