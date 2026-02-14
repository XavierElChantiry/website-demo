# Seasons Within - Next.js Website

Your website has been successfully migrated to Next.js! 🎉

## What's Been Set Up

- **Next.js 14** - Modern React framework with server-side rendering and static generation
- **TypeScript** - For better code quality and type safety
- **App Router** - Next.js 13+ file-based routing with the `/app` directory
- **Responsive Design** - CSS imported globally for consistent styling across all pages
- **Image Optimization** - Next.js Image component for better performance

## Project Structure

```
app/
├── layout.tsx          # Root layout with Header/Footer
├── page.tsx            # Home page (/)
├── services/
│   └── page.tsx        # Services/Offerings page (/services)
├── supervision/
│   └── page.tsx        # Supervision page (/supervision)
├── faq/
│   └── page.tsx        # FAQ page (/faq)
└── resources/
    └── page.tsx        # Resources page (/resources)

components/
├── Header.tsx          # Navigation header
└── Footer.tsx          # Footer with contact info

styles/
├── style.css           # Global styles
├── home.css            # Home page styles
├── faq.css             # FAQ page styles
├── nextsteps.css       # Services/Offerings styles
├── supervision.css     # Supervision styles
└── resources.css       # Resources page styles

public/
└── images/             # All website images
```

## Running Locally

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The site will be available at **http://localhost:3000**

### Build for Production
```bash
npm run build
npm start
```

## Navigation

- **Home** - `/` - Main landing page with introduction
- **Offerings** - `/services` - Therapy modes and session information
- **Supervision** - `/supervision` - Clinical supervision services
- **FAQ** - `/faq` - Frequently asked questions
- **Resources** - `/resources` - External resources and crisis support links

## Key Features

✅ Fast performance with Next.js optimizations
✅ All HTML converted to JSX components
✅ CSS preserved from original design
✅ Images optimized for web
✅ Fully responsive design
✅ Navigation with Next.js Link component
✅ Type-safe TypeScript pages

## Deployment

This site is ready to deploy to Vercel, Netlify, or any Node.js hosting provider.

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
Ensure your hosting platform:
- Supports Node.js 18+
- Can run `npm install && npm run build && npm start`

## Notes

- The development server is configured to use port 3000
- All CSS files are working and properly imported
- Images are in the `/public/images` directory
- The site uses Next.js Image component for optimization
- Navigation links use Next.js `Link` component for better performance

Happy coding! 🌿
