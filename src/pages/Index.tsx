import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { WelcomeSection } from '@/components/WelcomeSection';
import { AccommodationSection } from '@/components/AccommodationSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WelcomeSection />
        <AccommodationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
