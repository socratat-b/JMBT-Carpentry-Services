'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/config/site';

export function CTA() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative wood grain texture */}
      <div className="absolute inset-0 wood-grain opacity-20" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.4 }}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/95 text-lg leading-relaxed">
              Get in touch today for a free consultation and quote.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" asChild className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center h-11 px-8 rounded-md text-base font-medium border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>Call Us Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
