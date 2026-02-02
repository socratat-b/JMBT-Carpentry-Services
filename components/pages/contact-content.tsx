'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/sections/contact-form';
import { contactInfo } from '@/config/site';

export function ContactContent() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Get In Touch</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out to us
            for a free consultation and quote.
          </p>
        </motion.div>
      </section>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="border-border/50 shadow-sm hover-lift">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 ring-1 ring-primary/20">
                    <Phone className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-lg font-serif">Phone</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                  {contactInfo.additionalPhones?.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-sm text-muted-foreground/80 hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-border/50 shadow-sm hover-lift">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 ring-1 ring-primary/20">
                    <Mail className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-lg font-serif">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors break-all font-medium"
                  >
                    {contactInfo.email}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Address & Service Area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="border-border/50 shadow-sm hover-lift">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 ring-1 ring-primary/20">
                    <MapPin className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-lg font-serif">Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contactInfo.address && (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Service Area</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {contactInfo.serviceArea}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="border-border/50 shadow-sm hover-lift">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 ring-1 ring-primary/20">
                    <Clock className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-lg font-serif">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                    {contactInfo.businessHours}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
