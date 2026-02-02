import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'modern-kitchen',
    title: 'Modern Kitchen Renovation',
    description:
      'Complete kitchen remodel with custom oak cabinets, quartz countertops, and modern hardware.',
    category: 'Kitchen Cabinets',
    image: '/images/projects/placeholder-kitchen.jpg',
    featured: true,
  },
  {
    id: 'custom-dining-table',
    title: 'Custom Dining Table',
    description:
      'Handcrafted walnut dining table with live edge design, seats 8-10 people.',
    category: 'Custom Furniture',
    image: '/images/projects/placeholder-table.jpg',
    featured: true,
  },
  {
    id: 'outdoor-deck',
    title: 'Outdoor Deck & Pergola',
    description:
      'Cedar deck with integrated pergola, built-in seating, and custom railings.',
    category: 'Deck Building',
    image: '/images/projects/placeholder-deck.jpg',
    featured: true,
  },
  {
    id: 'custom-bookshelf',
    title: 'Built-in Bookshelf',
    description:
      'Floor-to-ceiling built-in bookshelf in home library, cherry wood with adjustable shelves.',
    category: 'Custom Woodworking',
    image: '/images/projects/placeholder-bookshelf.jpg',
  },
  {
    id: 'bathroom-vanity',
    title: 'Bathroom Vanity',
    description:
      'Custom bathroom vanity with dual sinks, soft-close drawers, and marble top.',
    category: 'Cabinetry',
    image: '/images/projects/placeholder-vanity.jpg',
  },
  {
    id: 'home-office',
    title: 'Home Office Built-ins',
    description:
      'Complete home office solution with custom desk, shelving, and filing cabinets.',
    category: 'Custom Woodworking',
    image: '/images/projects/placeholder-office.jpg',
  },
];

// Note: Replace placeholder images with actual project photos
// Images should be placed in public/images/projects/
