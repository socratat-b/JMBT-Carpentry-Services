import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'JMBT Carpentry Services | Expert Woodworking & Custom Furniture',
  description:
    'Professional carpentry services specializing in custom furniture, kitchen cabinets, deck building, and home repairs. Quality craftsmanship you can trust.',
  keywords: [
    'carpentry',
    'custom furniture',
    'kitchen cabinets',
    'deck building',
    'woodworking',
    'home repairs',
    'JMBT',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="paper-texture">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
