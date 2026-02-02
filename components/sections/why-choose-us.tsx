'use client';

import { Award, Clock, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Award,
    title: 'Expert Craftsmanship',
    description:
      'Years of experience delivering high-quality woodworking and carpentry services.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      'We respect your time and complete projects on schedule without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description:
      'We stand behind our work with comprehensive warranties and customer satisfaction guarantees.',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    description:
      'Your vision is our priority. We work closely with you throughout the entire process.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative wood grain texture */}
      <div className="absolute inset-0 wood-grain opacity-40" />

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-serif">
            Why Choose <span className="text-primary">JMBT</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg leading-relaxed">
            Delivering exceptional results that exceed expectations.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.8 + index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center ring-1 ring-primary/20">
                  <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold font-serif">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
