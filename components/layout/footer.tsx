import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { siteConfig, navItems, contactInfo } from '@/config/site';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="JMBT Carpentry Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold font-serif text-foreground">
                {siteConfig.name}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quality craftsmanship and professional carpentry services you can trust.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.links.facebook && (
                <a
                  href={siteConfig.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-serif text-foreground uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-serif text-foreground uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-foreground" />
                </div>
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 text-foreground" />
                </div>
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-foreground" />
                </div>
                <span>{contactInfo.serviceArea}</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold font-serif text-foreground uppercase tracking-wider">Business Hours</h4>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {contactInfo.businessHours}
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with quality and care
          </p>
        </div>
      </div>
    </footer>
  );
}
