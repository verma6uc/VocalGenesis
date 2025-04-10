import React from 'react';
import HeroSection from './sections/HeroSection';
import CoreTechnologiesSection from './sections/CoreTechnologiesSection';
import ApplicationsSection from './sections/ApplicationsSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import DemoSection from './sections/DemoSection';
import CTASection from './sections/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CoreTechnologiesSection />
      <ApplicationsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <DemoSection />
      <CTASection />
    </div>
  );
};

export default HomePage;