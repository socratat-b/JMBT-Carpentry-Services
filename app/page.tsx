import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
