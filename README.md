# Manuel Schuppisser - UX/UI Designer Portfolio

A stunning, modern single-page landing site showcasing Manuel Schuppisser's work as a Belgian UX/UI Designer.

## Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, GSAP animations
- **Responsive Design**: Fully mobile-responsive with elegant breakpoints
- **Smooth Animations**: GSAP-powered scroll animations, parallax effects, and interactive elements
- **Case Studies**: Three detailed project showcases with modal views
- **Contact Form**: Integrated contact section with Formspree support
- **Performance Optimized**: Fast loading, lazy loading images, optimized assets
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
manuel/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with bio and CTA
│   │   ├── Portfolio.jsx     # Portfolio section with case studies
│   │   ├── CaseStudy.jsx     # Individual case study card
│   │   └── Contact.jsx       # Contact form and information
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── postcss.config.js         # PostCSS configuration
```

## Customization

### Contact Form

Update the Formspree endpoint in `src/components/Contact.jsx`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // Replace YOUR_FORM_ID with your actual Formspree form ID
```

### Colors

Modify the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Deep blue shades */ },
  accent: { /* Green shades */ }
}
```

### Content

Edit case studies, bio, and contact information directly in the component files:
- Hero content: `src/components/Hero.jsx`
- Case studies: `src/components/Portfolio.jsx`
- Contact info: `src/components/Contact.jsx`

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library with ScrollTrigger
- **Google Fonts** - Inter and Playfair Display typography

## Performance Features

- Optimized images with lazy loading
- Code splitting and tree shaking
- Minimal bundle size
- Fast Time to Interactive (TTI)
- Progressive Web App ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Manuel Schuppisser. All rights reserved.

## Contact

Manuel Schuppisser
- Email: manuelschuppisser@gmail.com
- Phone: +32 473 80 46 75
