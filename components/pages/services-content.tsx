'use client';

import Link from 'next/link';
import {
  Armchair,
  ChefHat,
  Home,
  Wrench,
  Hammer,
  Box,
  Check,
  type LucideProps,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { services } from '@/config/services';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Armchair,
  ChefHat,
  Home,
  Wrench,
  Hammer,
  Box,
};

export function ServicesContent() {
  return (
    <div className="py-16 bg-background">
      {/* Header */}
      <section className="container mb-16 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Our Services</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional carpentry solutions tailored to your needs. From custom
            creations to expert repairs, we deliver quality craftsmanship every
            time.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mb-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Hammer;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card shadow-sm h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 ring-1 ring-primary/20">
                      <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4 bg-border/50" />
                    <h4 className="font-semibold mb-4 text-foreground font-serif">What's Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="bg-muted/30 border border-border/50 shadow-md">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold font-serif">
                Don't See What You're Looking For?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We offer a wide range of carpentry services. Contact us to discuss
                your specific project needs and get a personalized quote.
              </p>
              <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}
