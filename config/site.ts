import { SiteConfig, NavItem, ContactInfo } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'JMBT Carpentry Services',
  description:
    'Professional carpentry services specializing in custom furniture, kitchen cabinets, deck building, and home repairs. Quality craftsmanship you can trust.',
  url: 'https://jmbt-carpentry.com', // Update with actual domain
  ogImage: '/images/og-image.jpg',
  links: {
    facebook: '', // Add your social media links
    instagram: '',
    linkedin: '',
  },
};

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Gallery',
    href: '/gallery',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const contactInfo: ContactInfo = {
  phone: '(555) 123-4567', // Update with actual phone
  email: 'info@jmbt-carpentry.com', // Update with actual email
  businessHours: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed',
  serviceArea: 'Greater Metropolitan Area', // Update with actual service area
};
