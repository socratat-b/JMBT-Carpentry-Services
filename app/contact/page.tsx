import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/contact-content';

export const metadata: Metadata = {
  title: 'Contact Us | JMBT Carpentry',
  description:
    'Get in touch with JMBT Carpentry for a free consultation and quote. We are here to bring your carpentry project to life.',
};

export default function ContactPage() {
  return <ContactContent />;
}
