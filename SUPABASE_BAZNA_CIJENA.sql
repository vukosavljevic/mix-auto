-- Bazna cijena (Zakon o zaštiti potrošača NN 59/2026, Pravilnik o isticanju bazne cijene NN 132/2026)
-- Pokreni jednom u Supabase SQL Editoru PRIJE deploya nove verzije stranice.

ALTER TABLE cars
ADD COLUMN IF NOT EXISTS base_price INTEGER,
ADD COLUMN IF NOT EXISTS base_price_date DATE;

-- Auti koji su bili na stranici 10.9.2026.: bazna cijena = cijena tog dana.
-- (Oba zapisa zadnji put mijenjana 9.3.2026., dakle 10.9.2026. vrijedile su ove cijene.)
UPDATE cars SET base_price = 20900, base_price_date = '2026-09-10' WHERE id = 14; -- Peugeot 3008
UPDATE cars SET base_price = 13490, base_price_date = '2026-09-10' WHERE id = 21; -- Renault Kadjar TCe 130

-- Auti uvršteni u ponudu nakon 10.9.2026.: cijena i datum prvog uvrštenja.
UPDATE cars
SET base_price = price, base_price_date = (created_at AT TIME ZONE 'Europe/Zagreb')::date
WHERE base_price IS NULL;

-- Cjenici (CSV) spremaju se u postojeći bucket car-images, u mapu cjenici/.
-- Postojeće storage politike (javno čitanje, upload/brisanje za prijavljene) već to pokrivaju.
