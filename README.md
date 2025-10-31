# Rentic - Car Rental & Sales Platform

A modern, responsive car rental and sales platform inspired by the Rentic website. Built with Vue 3, Vite, and modern web technologies.

## 🚀 Features

### Pages
- **Homepage** - Hero section, featured cars, testimonials, rental process, and latest news
- **All Cars** - Complete car inventory with advanced filtering and sorting
- **Car Details** - Detailed car information with booking/inquiry form
- **About Us** - Company story, services, team members, and statistics

### Key Features
- ✨ Modern, responsive design that works on all devices
- 🎨 Smooth page transitions and animations
- 🔍 Advanced filtering system (status, type, manufacturer, city, transmission, fuel)
- 📱 Mobile-first approach with hamburger menu
- 🚗 12+ luxury and sports cars in inventory
- 💼 Professional agent profiles
- 📧 Contact and booking forms
- 🎯 Sticky navigation and sidebars
- ⚡ Lightning-fast performance with Vite

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework with Composition API
- **Vue Router 4** - Official router for Vue.js
- **Vite** - Next generation frontend tooling
- **CSS3** - Modern styling with animations and transitions

## 📦 Project Structure

```
mix-auto/
├── src/
│   ├── components/
│   │   ├── Header.vue          # Main navigation header
│   │   ├── Footer.vue          # Footer with CTA and links
│   │   └── CarCard.vue         # Reusable car card component
│   ├── views/
│   │   ├── Home.vue            # Homepage with all sections
│   │   ├── AllCars.vue         # Car inventory with filters
│   │   ├── CarDetails.vue      # Individual car details
│   │   └── About.vue           # About us page
│   ├── router/
│   │   └── index.js            # Vue Router configuration
│   ├── data/
│   │   └── cars.js             # Mock data for cars, testimonials, news
│   ├── App.vue                 # Root component
│   └── main.js                 # Application entry point
├── public/
│   └── favicon.ico
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v20.19.0 or >=22.12.0)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/domagoj/Desktop/mix-auto
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

### Color Scheme
- Primary: `#e63946` (Red)
- Primary Dark: `#d62839`
- Secondary: `#2a9d8f` (Teal)
- Dark: `#1a1a1a`
- Light Gray: `#f8f9fa`

### Typography
- System font stack for optimal performance
- Responsive font sizing
- Proper line heights for readability

### Animations
- Page transitions with fade and slide effects
- Card hover effects with elevation
- Smooth scroll behavior
- Image zoom on hover
- Button press effects

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🚗 Car Inventory

The platform includes 12 premium vehicles:
- Maserati Granturismo
- Porsche 911 Carrera
- Ford Mustang (Classic)
- Porsche 997 GT3
- Bugatti Chiron
- Chevrolet Corvette
- Lamborghini Aventador
- BMW M5
- Audi R8
- Ferrari 488 GTB
- McLaren 720S
- Rolls Royce Phantom

## 🔍 Filter Options

### All Cars Page Filters
- **Status**: For Rent, For Sale
- **Type**: Coupe, Sedan, Sport, SUV, Hatchback, Wagon
- **Manufacturer**: Audi, BMW, Bugatti, Chevrolet, Ferrari, Ford, Lamborghini, Maserati, McLaren, Porsche, Rolls Royce
- **City**: Chicago, Detroit, Miami, Seattle
- **Transmission**: Manual, Automatic, CVT, Tiptronic
- **Fuel Type**: Gasoline, Diesel, Electric, Hybrid

### Sorting Options
- Date (Ascending/Descending)
- Price (Ascending/Descending)
- Title (Ascending/Descending)

## 🎯 Key Components

### Header.vue
- Sticky navigation with scroll effect
- Responsive mobile menu
- Phone number and CTA button
- Active route highlighting

### Footer.vue
- Promotional CTA section
- Company information
- Quick links
- Social media links
- Contact information

### CarCard.vue
- Reusable card component
- Status badge (Sale/Rent)
- Car specifications display
- Hover effects
- Click to view details

## 📄 Pages Overview

### Home (`/`)
- Hero section with gradient background
- Recent cars showcase (6 cars)
- Luxury driving section
- Client testimonials (4 testimonials)
- Simplified rental process
- Latest news articles

### All Cars (`/cars`)
- Advanced sidebar filters
- Sort dropdown
- Mobile-friendly filter panel
- Car count display
- Responsive grid layout
- No results state

### Car Details (`/car/:id`)
- Large car image with badge
- Detailed specifications
- Features list
- Booking/inquiry form
- Agent contact card
- Similar cars section

### About (`/about`)
- Company story with image
- Statistics section (500+ cars, 15K+ customers, etc.)
- Services showcase
- Team member profiles
- Why choose us section

## ✨ Notable Features

### Animations & Transitions
- Page route transitions
- Card hover elevations
- Image zoom effects
- Button interactions
- Smooth scrolling
- Fade-in on scroll (ready for implementation)

### Accessibility
- Semantic HTML
- ARIA labels on icons
- Keyboard navigation support
- Focus visible styles
- Screen reader friendly
- Reduced motion support

### Performance
- Lazy loading routes
- Optimized images
- Efficient re-renders with Vue 3
- CSS-only animations
- Minimal JavaScript bundle

### User Experience
- Intuitive navigation
- Clear CTAs
- Loading states
- Form validation
- Mobile-optimized touch targets
- Sticky elements for easy access

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Future Enhancements

- Add backend API integration
- Implement real booking system
- Add user authentication
- Create admin dashboard
- Add image gallery for cars
- Implement favorites/wishlist
- Add comparison feature
- Email notifications
- Payment integration
- Dark mode toggle
- Multi-language support
- Advanced search with autocomplete
- Map integration for locations
- Customer reviews and ratings

## 🤝 Contributing

This is a demonstration project. Feel free to fork and customize for your own use.

## 📄 License

This project is open source and available for personal and commercial use.

## 👏 Credits

- Design inspiration: [Rentic by AxiomThemes](https://rentic.axiomthemes.com/)
- Car images: Unsplash
- Avatar images: Pravatar
- Built with ❤️ using Vue 3 and Vite

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Built with Vue 3 + Vite** | **2025**
