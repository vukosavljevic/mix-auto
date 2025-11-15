# Supabase Setup Guide

This guide will help you set up Supabase for the Mix Auto application.

## 1. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings under API.

## 2. Database Setup

### Create the `cars` table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create cars table
CREATE TABLE IF NOT EXISTS cars (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  manufacturer TEXT,
  year INTEGER,
  price INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('sale', 'rent')),
  type TEXT,
  mileage INTEGER DEFAULT 0,
  fuel TEXT DEFAULT 'Diesel',
  transmission TEXT DEFAULT 'Automatic',
  city TEXT DEFAULT 'Osijek',
  image TEXT,
  description TEXT,
  engine TEXT,
  agent TEXT,
  engine_displacement INTEGER,
  condition TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_cars_status ON cars(status);
CREATE INDEX IF NOT EXISTS idx_cars_type ON cars(type);
CREATE INDEX IF NOT EXISTS idx_cars_manufacturer ON cars(manufacturer);
CREATE INDEX IF NOT EXISTS idx_cars_created_at ON cars(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to read cars (for public viewing)
CREATE POLICY "Allow public read access" ON cars
  FOR SELECT
  USING (true);

-- Policy: Allow authenticated users to insert cars (admin only)
CREATE POLICY "Allow authenticated insert" ON cars
  FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Allow authenticated users to update cars (admin only)
CREATE POLICY "Allow authenticated update" ON cars
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Allow authenticated users to delete cars (admin only)
CREATE POLICY "Allow authenticated delete" ON cars
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_cars_updated_at BEFORE UPDATE ON cars
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## 3. Storage Setup

### Create the `car-images` storage bucket

1. Go to Storage in your Supabase dashboard
2. Click "New bucket"
3. Name it: `car-images`
4. Make it **Public** (so images can be accessed via URL)
5. Click "Create bucket"

### Set up Storage Policies

Run this SQL to allow authenticated users to upload and delete images:

```sql
-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated upload" ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'car-images' AND
    auth.role() = 'authenticated'
  );

-- Allow authenticated users to delete images
CREATE POLICY "Allow authenticated delete" ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'car-images' AND
    auth.role() = 'authenticated'
  );

-- Allow public read access to images
CREATE POLICY "Allow public read" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'car-images');
```

## 4. Authentication Setup

### Create an Admin User

1. Go to Authentication in your Supabase dashboard
2. Click "Add user" → "Create new user"
3. Enter an email and password for your admin account
4. Click "Create user"

**Note:** You'll use this email and password to log in to the admin panel at `/coolpanel97-xyz`

## 5. Testing

After setup:

1. Start your development server: `npm run dev`
2. Navigate to `/coolpanel97-xyz`
3. Log in with your admin credentials
4. Try creating a car with an image upload
5. Verify the car appears on the home page and all cars page

## Troubleshooting

### Images not uploading?
- Check that the `car-images` bucket exists and is public
- Verify storage policies are set correctly
- Check browser console for errors

### Can't log in?
- Verify your email and password are correct
- Check that the user exists in Authentication
- Ensure RLS policies allow authenticated access

### Cars not showing?
- Check that RLS policies allow public SELECT
- Verify the table structure matches the SQL above
- Check browser console for errors

## 6. Database Migration (If upgrading existing database)

If you already have a database set up and need to add new fields, run the migration script:

See `SUPABASE_MIGRATION.sql` for the migration script that adds:
- `engine_displacement` (INTEGER) - Radni obujam motora u cm³
- `condition` (TEXT) - Stanje vozila (npr. "rabljeno")
- Updates default values for `transmission` to 'Automatic' and `city` to 'Osijek'

## Notes

- The admin panel route is `/coolpanel97-xyz` (as defined in `router/index.js`)
- All car data is stored in Supabase, not in local files
- Images are stored in Supabase Storage and served via public URLs
- The application uses email/password authentication for admin access
- Default values: `transmission` = 'Automatic', `fuel` = 'Diesel', `city` = 'Osijek'

