export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[]; // Changed from single image to array of images
  featured?: boolean;
  client?: string;
  location?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  businessHours: string;
  serviceArea: string;
  address?: string;
  additionalPhones?: string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
