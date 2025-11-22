# Horizon Energy - React Website

A modern, animated website for Horizon Energy, a renewable energy company. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design inspired by renewable energy themes
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design
- 🎯 Scroll-triggered animations
- 🔄 Infinite scrolling text banner
- 🌿 Green accent colors matching the energy theme

## Sections

1. **Header** - Fixed navigation with smooth scroll behavior
2. **Hero** - Full-screen hero section with background image and CTAs
3. **Statistics** - Company metrics with animated counters
4. **Quality & Trust** - Quality focus section with partner logos
5. **Service Quality** - Feature grid showcasing service benefits
6. **Trusted Services** - Service offerings with detailed cards
7. **Testimonial** - Customer testimonial and case study
8. **Footer** - Dark footer with contact information and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Project Structure

```
ak-template-horizon/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Statistics.jsx
│   │   ├── QualityTrust.jsx
│   │   ├── ServiceQuality.jsx
│   │   ├── TrustedService.jsx
│   │   ├── Testimonial.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── data.js
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

- Update company information in `src/data.js`
- Modify colors in `tailwind.config.js`
- Replace images with your own (update URLs in components)
- Adjust animations in component files

## Deployment

The project is configured for Firebase Hosting. To deploy:

1. Build the project: `npm run build`
2. Deploy using Firebase CLI: `firebase deploy`

## License

See LICENSE file for details.

