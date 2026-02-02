# JMBT Carpentry Services Website

A modern, static website built with Next.js 16, Tailwind CSS v4, and shadcn/ui components.

## Features

- ✅ **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- ✅ **Beautiful UI**: shadcn/ui components with custom carpentry theme
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **Static Export**: No server required - deploy to Netlify, Vercel, or any static host
- ✅ **SEO Optimized**: Metadata, sitemap, and OG images included
- ✅ **Contact Form**: Netlify Forms integration for easy lead capture
- ✅ **Project Gallery**: Showcase your work with lightbox functionality

## Pages

- **Home** (`/`) - Hero section, services overview, featured projects, why choose us, CTA
- **Services** (`/services`) - Detailed service offerings with features
- **Gallery** (`/gallery`) - Project portfolio with category filtering and lightbox
- **Contact** (`/contact`) - Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Site Information

Edit `/config/site.ts` to update:
- Company name and description
- Contact information (phone, email, service area)
- Business hours
- Social media links

### Add/Edit Services

Edit `/config/services.ts` to:
- Add new services
- Modify existing services
- Change service descriptions and features

### Add Project Photos

1. Place project images in `/public/images/projects/`
2. Edit `/data/projects.ts` to:
   - Add new projects
   - Update image paths
   - Set featured projects
   - Organize by categories

### Update Colors/Theme

The carpentry theme is defined in `/app/globals.css` using Tailwind v4's `@theme` directive:
- Primary: Warm wood brown
- Secondary: Deep green
- Accent: Gold/amber

Modify the color values to match your brand.

### Replace Placeholder Images

Currently, the gallery and projects use placeholder images. Replace them with actual photos:

1. Add images to `/public/images/projects/`
2. Update image paths in `/data/projects.ts`
3. Recommended image sizes:
   - Gallery thumbnails: 800x600px
   - Featured images: 1200x800px
   - Keep file sizes under 500KB

## Building for Production

Create a static export:

```bash
npm run build
```

This generates a static site in the `/out` directory, ready to deploy.

## Deployment

### Netlify (Recommended for Contact Form)

1. Connect your GitHub repository to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Netlify Forms will automatically detect the contact form

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Build the site: `npm run build`
2. Push the `/out` directory to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Contact Form

The contact form uses Netlify Forms. After deploying to Netlify:

1. Forms will be automatically detected
2. Submissions appear in Netlify dashboard under "Forms"
3. Set up email notifications in Netlify settings

For other hosts, consider alternatives:
- Formspree (formspree.io)
- EmailJS (emailjs.com)
- Custom API endpoint

## File Structure

```
jmbt/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── gallery/           # Gallery page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── ui/               # shadcn components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections
│   └── gallery/          # Gallery components
├── config/               # Configuration
│   ├── site.ts          # Site config & contact info
│   └── services.ts      # Services data
├── data/                # Static data
│   └── projects.ts      # Gallery projects
├── lib/                 # Utilities
│   └── utils.ts
├── public/              # Static assets
│   └── images/
└── types/               # TypeScript types
```

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: Netlify Forms

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse score: 95+
- Static export for fast loading
- Optimized images with Next.js Image
- Minimal JavaScript bundle

## Support

For questions or issues:
1. Check the PLAN.md file for implementation details
2. Review Next.js 16 documentation
3. Check shadcn/ui documentation

## License

This project is private and proprietary to JMBT Carpentry Services.

---

Built with ❤️ using Next.js 16, Tailwind CSS v4, and shadcn/ui
