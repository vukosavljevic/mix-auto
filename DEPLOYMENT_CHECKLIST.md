# Deployment Checklist - Mix Auto

## ✅ Pre-deployment Checklist

### 1. Environment Variables
**KRITIČNO:** Postavi environment varijable na production serveru!

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Gdje postaviti:**
- **Vercel/Netlify**: Settings → Environment Variables
- **Custom server**: Postavi u `.env.production` ili kroz hosting panel
- **Docker**: U docker-compose.yml ili kroz environment variables

⚠️ **VAŽNO:** `.env` file se NE pusha na git (već je u .gitignore), ali moraš postaviti varijable na hosting platformi!

### 2. Supabase Production Setup

Provjeri da su svi ovi koraci napravljeni u Supabase:

#### Database:
- [ ] Tablica `cars` je kreirana
- [ ] RLS (Row Level Security) policies su postavljene
- [ ] Indexi su kreirani za bolje performanse

#### Storage:
- [ ] Bucket `car-images` je kreiran i **javni (public)**
- [ ] Storage policies su postavljene (authenticated upload, public read)

#### Authentication:
- [ ] Admin korisnik je kreiran u Authentication sekciji
- [ ] Email i password su sigurno spremljeni

### 3. Build Configuration

Vite build automatski uključuje environment varijable koje počinju s `VITE_`, tako da je sve spremno.

**Provjeri build lokalno:**
```bash
npm run build
npm run preview
```

### 4. CORS Configuration

Supabase automatski dopušta zahtjeve s bilo kojeg doména kad koristiš anon key. Ako imaš problema:

1. Idi u Supabase Dashboard → Settings → API
2. Provjeri "Allowed origins" - ostavi prazno ili dodaj tvoj domain

### 5. Router Configuration

Provjeri da li hosting zahtijeva base path. Ako deployaš na subdirektorij (npr. `/mix-auto/`), dodaj u `vite.config.js`:

```js
export default defineConfig({
  base: '/mix-auto/', // samo ako je potrebno
  // ... rest of config
})
```

### 6. Production Build

```bash
# Build za production
npm run build

# Output će biti u /dist folderu
# Uploadaj sadržaj /dist foldera na hosting
```

## 🚀 Hosting Platform Specific

### Vercel
1. Pushaj kod na GitHub/GitLab
2. Connectuj repo u Vercel
3. Dodaj environment variables u Vercel dashboard
4. Deploy!

### Netlify
1. Pushaj kod na GitHub/GitLab
2. Connectuj repo u Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Dodaj environment variables u Netlify dashboard

### Custom Server (nginx, Apache, etc.)
1. Build: `npm run build`
2. Upload `/dist` folder na server
3. Postavi environment variables na serveru
4. Configuriraj server da servira `index.html` za sve rute (SPA routing)

**Nginx example:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔍 Common Issues

### Problem: "Missing Supabase environment variables"
**Rješenje:** Provjeri da su environment variables postavljene na hosting platformi

### Problem: Images se ne učitavaju
**Rješenje:** 
- Provjeri da je `car-images` bucket javni (public)
- Provjeri storage policies u Supabase

### Problem: Ne možeš se logirati
**Rješenje:**
- Provjeri da korisnik postoji u Supabase Authentication
- Provjeri RLS policies za authenticated users

### Problem: Cars se ne prikazuju
**Rješenje:**
- Provjeri RLS policy za public read access
- Provjeri browser console za greške
- Provjeri Supabase logs

### Problem: Router ne radi (404 na refresh)
**Rješenje:** Configuriraj server da servira `index.html` za sve rute (vidi nginx example gore)

## 📝 Post-Deployment Verification

Nakon deploymenta, provjeri:

1. [ ] Home page se učitava
2. [ ] Cars se prikazuju sa Supabase
3. [ ] Admin login radi (`/coolpanel97-xyz`)
4. [ ] Možeš dodati novi auto
5. [ ] Možeš uploadati sliku
6. [ ] Možeš editirati auto
7. [ ] Možeš obrisati auto
8. [ ] Car details page radi
9. [ ] Sve rute rade (refresh na bilo kojoj stranici)

## 🛡️ Security Notes

1. **Anon Key je siguran** - može se koristiti u frontendu jer RLS policies štite podatke
2. **Admin access** - samo korisnici autentificirani kroz Supabase mogu CRUD operacije
3. **Storage policies** - samo authenticated users mogu uploadati slike

## 📞 Support

Ako imaš problema nakon deploymenta:
1. Provjeri browser console za greške
2. Provjeri Supabase logs u dashboardu
3. Provjeri network tab u browser dev tools
4. Provjeri da su sve environment variables postavljene

