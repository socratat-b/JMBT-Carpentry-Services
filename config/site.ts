import { SiteConfig, NavItem, ContactInfo } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'JMBT Carpentry Services',
  description:
    'Professional carpentry and interior design services established in 2013. Delivering exceptional craftsmanship and innovative interior solutions with over 40 completed projects nationwide. Quality, precision, and excellence in every project.',
  url: 'https://jmbt-carpentry.com', // Update with actual domain
  ogImage: '/images/og-image.jpg',
  links: {
    facebook: 'https://www.facebook.com/profile.php?id=100090604321903',
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
  phone: '+63 953 833 3564', // Primary contact
  email: 'jhonmarktimog@gmail.com',
  businessHours: 'Monday - Saturday: 8:00 AM - 6:00 PM\nSunday: By appointment',
  serviceArea: 'Metro Manila & Nationwide',
  address: '058 Saint Paul St., Moonwalk, Paranaque City',
  additionalPhones: ['+63 956 249 6023', '+63 939 118 7671', '+63 915 879 0577'],
};
