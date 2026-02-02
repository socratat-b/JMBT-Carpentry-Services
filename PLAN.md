# JMBT Carpentry Service Website - Implementation Plan

## Overview
Build a modern, static carpentry service website for JMBT using Next.js 15 (App Router) with shadcn/ui components. The site will be fully static (SSG) with no backend/database, suitable for deployment on Netlify/Vercel.

## Technology Stack
- **Framework**: Next.js 15 (latest) with App Router
- **UI Library**: shadcn/ui (Tailwind CSS + Radix UI)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Form Handling**: Netlify Forms (or Formspree as alternative)
- **Deployment**: Static export for Netlify/Vercel/GitHub Pages
- **Image Optimization**: Next.js Image component with static export

## File Organization Strategy
Following Next.js best practice: **Store project files outside of app directory**
```
jmbt/
├── app/                    # Routing only
│   ├── layout.tsx
│   ├── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── gallery/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/             # Reusable components
│   ├── ui/                # shadcn components
│   ├── layout/            # Layout components (header, footer, nav)
│   ├── sections/          # Page sections (hero, services-grid, etc.)
│   └── gallery/           # Gallery-specific components
├── lib/                   # Utilities and helpers
│   └── utils.ts
├── config/                # Configuration files
│   ├── site.ts           # Site metadata, navigation, etc.
│   └── services.ts       # Services data
├── data/                  # Static data
│   └── projects.ts       # Gallery project data
├── public/                # Static assets
│   ├── images/
│   │   ├── projects/     # Project photos
│   │   └── logo.svg
│   └── favicon.ico
├── styles/
│   └── globals.css
└── types/                 # TypeScript types
    └── index.ts
```

## Website Structure

### Pages
1. **Home (/)** - Hero, featured services, CTA, testimonials
2. **Services (/services)** - Detailed service offerings
3. **Gallery (/gallery)** - Project portfolio with photos
4. **Contact (/contact)** - Contact form and business info

### Core Features

#### 1. Navigation
- Responsive navbar with mobile menu
- Sticky header
- Logo and company name
- Active route indication

#### 2. Home Page Sections
- **Hero Section**: Eye-catching headline, subheadline, CTA button
- **Services Overview**: Grid of 3-4 main services with icons
- **Featured Projects**: Carousel or grid of 3-6 best projects
- **Why Choose Us**: 3-4 value propositions
- **Call-to-Action**: Contact button and phone number
- **Footer**: Contact info, social links, copyright

#### 3. Services Page
- Detailed service descriptions
- Each service card with:
  - Icon/image
  - Title
  - Description
  - List of what's included
- Examples: Custom Furniture, Kitchen Cabinets, Deck Building, Home Repairs, etc.

#### 4. Gallery Page
- Masonry or grid layout
- Project cards with:
  - Before/After images (optional)
  - Project title
  - Brief description
  - Category tags
- Lightbox for full-size image viewing
- Filter by category (optional)

#### 5. Contact Page
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Service interested in (dropdown)
  - Message/Project description (required)
- Business contact information:
  - Phone number
  - Email address
  - Business hours
  - Service area
- Optional: Embedded map (if you want to show service area)

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js 15 project with TypeScript and App Router
2. Configure for static export (`output: 'export'` in next.config.js)
3. Install and configure Tailwind CSS
4. Initialize shadcn/ui and install base components
5. Set up file structure (components/, lib/, config/, data/, types/)
6. Configure TypeScript paths for clean imports

### Phase 2: Configuration & Data
1. Create site configuration (config/site.ts):
   - Site metadata (name, description, URL)
   - Navigation structure
   - Contact information
2. Create services data structure (config/services.ts)
3. Create projects data for gallery (data/projects.ts)
4. Set up TypeScript types (types/index.ts)

### Phase 3: Layout & Components
1. Build root layout (app/layout.tsx):
   - HTML structure
   - Font configuration
   - Metadata
2. Create shared layout components:
   - Header with navigation (components/layout/header.tsx)
   - Footer (components/layout/footer.tsx)
   - Mobile menu
3. Install shadcn components needed:
   - Button
   - Card
   - Input, Textarea (for forms)
   - Dialog (for lightbox)
   - NavigationMenu
   - Separator

### Phase 4: Home Page
1. Create home page (app/page.tsx)
2. Build home page sections:
   - Hero section with CTA
   - Services overview grid
   - Featured projects section
   - Why Choose Us section
   - Final CTA section

### Phase 5: Services Page
1. Create services page (app/services/page.tsx)
2. Build service card component (components/sections/service-card.tsx)
3. Map services data to UI
4. Add icons for each service

### Phase 6: Gallery Page
1. Create gallery page (app/gallery/page.tsx)
2. Build project card component (components/gallery/project-card.tsx)
3. Implement image lightbox (components/gallery/lightbox.tsx)
4. Add category filtering (optional)
5. Optimize images for web

### Phase 7: Contact Page
1. Create contact page (app/contact/page.tsx)
2. Build contact form component (components/sections/contact-form.tsx)
3. Integrate Netlify Forms:
   - Add `netlify` attribute to form
   - Add hidden `form-name` field
   - Configure form success/error handling
4. Display business contact information
5. Add form validation

### Phase 8: Styling & Responsiveness
1. Apply consistent color scheme (professional carpentry theme)
2. Ensure all pages are fully responsive:
   - Mobile (< 640px)
   - Tablet (640px - 1024px)
   - Desktop (> 1024px)
3. Add hover states and transitions
4. Optimize typography

### Phase 9: SEO & Performance
1. Add metadata to all pages (title, description, OG tags)
2. Create robots.txt and sitemap.xml
3. Optimize images:
   - Compress images
   - Use Next.js Image component with proper sizes
   - Add alt text
4. Test Core Web Vitals
5. Add loading states where needed

### Phase 10: Testing & Deployment
1. Test all forms
2. Test navigation on all devices
3. Verify all links work
4. Check image loading
5. Build static export: `npm run build`
6. Test static export locally
7. Deploy to Netlify/Vercel:
   - Connect GitHub repo (optional)
   - Configure build settings
   - Set up custom domain
8. Test production site

## Design Considerations

### Color Scheme (Carpentry Theme)
- Primary: Warm wood tones (browns, amber)
- Secondary: Deep green or navy (professional, trustworthy)
- Accent: Gold/orange (craftsmanship, attention to detail)
- Neutrals: White, light gray backgrounds
- Text: Dark gray/black for readability

### Typography
- Headings: Bold, professional sans-serif (Inter, Open Sans)
- Body: Clean, readable sans-serif
- Hierarchy: Clear distinction between H1, H2, H3

### Imagery
- High-quality photos of completed projects
- Before/after comparisons
- Detail shots showing craftsmanship
- Professional photos if available (phone photos acceptable)

### User Experience
- Clear calls-to-action throughout
- Easy-to-find contact information
- Mobile-first approach (many users on phones)
- Fast loading times
- Intuitive navigation

## Contact Form Integration

### Netlify Forms (Recommended for Netlify hosting)
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

### Alternative: Formspree
- Sign up at formspree.io
- Use form endpoint in action
- Handle responses with Formspree dashboard

## Static Export Configuration

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
}
module.exports = nextConfig
```

## Dependencies to Install
```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "tailwindcss": "^3.x",
    "class-variance-authority": "^0.7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "lucide-react": "^0.x" // Icons
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "typescript": "^5.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

## Success Metrics
- ✅ Fully responsive on all devices
- ✅ Loads in < 3 seconds
- ✅ Contact form successfully submits
- ✅ Gallery displays all projects beautifully
- ✅ All pages have proper SEO metadata
- ✅ Static export builds without errors
- ✅ Deploys successfully to hosting platform

## Future Enhancements (Post-Launch)
- Add testimonials/reviews section
- Integrate Google Analytics
- Add blog section for carpentry tips
- Implement simple CMS (e.g., Markdown files + MDX)
- Add estimate calculator
- Integrate social media feeds

## Notes
- No database needed - all content is in code/config files
- Easy to update: just edit TS files and redeploy
- Images should be placed in `public/images/` directory
- Keep image file sizes reasonable (< 500KB each after compression)
- Use WebP format for better performance
- Form submissions go to email via Netlify/Formspree
