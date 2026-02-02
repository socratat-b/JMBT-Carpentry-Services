import type { Metadata } from 'next';
import { ServicesContent } from '@/components/pages/services-content';

export const metadata: Metadata = {
  title: 'Our Services | JMBT Carpentry',
  description:
    'Explore our comprehensive carpentry services including custom furniture, kitchen cabinets, deck building, home repairs, and more.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
