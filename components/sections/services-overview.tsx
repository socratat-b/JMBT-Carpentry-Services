'use client';

import Link from 'next/link';
import {
  Armchair,
  ChefHat,
  Home,
  Wrench,
  Hammer,
  Box,
  ArrowRight,
  type LucideProps,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/config/services';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Armchair,
  ChefHat,
  Home,
  Wrench,
  Hammer,
  Box,
};

export function ServicesOverview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif">
            Our Services
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            Professional carpentry solutions crafted with precision and care.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Hammer;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card shadow-sm h-full">
                  <CardHeader className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                      <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
