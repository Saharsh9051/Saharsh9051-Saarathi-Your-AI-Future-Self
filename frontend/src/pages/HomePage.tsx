import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import AvatarShowcase from '../components/AvatarShowcase';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AvatarShowcase />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;