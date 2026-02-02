import type { Metadata } from 'next';
import { GalleryContent } from '@/components/pages/gallery-content';

export const metadata: Metadata = {
  title: 'Our Work | JMBT Carpentry',
  description:
    'Browse through our portfolio of completed carpentry projects. Each piece showcases our commitment to quality craftsmanship and attention to detail.',
};

export default function GalleryPage() {
  return <GalleryContent />;
}
