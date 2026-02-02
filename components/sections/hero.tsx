import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-48 overflow-hidden">
      {/* Decorative wood grain accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-6 max-w-4xl animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Quality Craftsmanship,{' '}
              <span className="text-primary relative inline-block">
                Built to Last
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent opacity-40"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6C80 2 120 10 150 6C180 2 220 10 298 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              Expert carpentry services for your home. From custom furniture to complete renovations,
              we bring your vision to life with precision and care.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
            <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-2 hover:bg-accent/10">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in-up delay-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
