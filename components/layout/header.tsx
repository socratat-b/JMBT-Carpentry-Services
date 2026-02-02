'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems, siteConfig, contactInfo } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 shadow-sm">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl transition-transform group-hover:scale-110">
              J
            </div>
            <span className="text-xl font-bold font-serif">{siteConfig.name}</span>
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-foreground/70'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Button asChild size="sm">
              <a href={`tel:${contactInfo.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                {contactInfo.phone}
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container px-4 md:px-6 mx-auto py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-sm font-medium',
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="w-full" size="sm">
              <a href={`tel:${contactInfo.phone}`}>
                <Phone className="h-4 w-4 mr-2" />
                {contactInfo.phone}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
