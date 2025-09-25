import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-amboseli-sunrise.jpg';
import elephantsImage from '@/assets/elephants-watering-hole.jpg';
import lodgeImage from '@/assets/eco-lodge-accommodation.jpg';

const heroSlides = [
  {
    image: heroImage,
    title: "Where Nature Meets Nurture",
    subtitle: "Experience the wonder of Amboseli and Mount Kilimanjaro",
  },
  {
    image: elephantsImage,
    title: "Walk with Giants",
    subtitle: "Witness Africa's gentle giants in their natural habitat",
  },
  {
    image: lodgeImage,
    title: "Sustainable Luxury",
    subtitle: "Eco-conscious accommodation that honors the earth",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="w-12 h-12 rounded-full glass-effect hover:bg-white/20 text-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="w-12 h-12 rounded-full glass-effect hover:bg-white/20 text-white"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in animation-delay-200">
            {heroSlides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-12 opacity-90 animate-fade-in animation-delay-400">
            Supai Amboseli
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-600">
            <Button className="btn-earth text-foreground px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-earth/50 transform hover:scale-105 transition-all duration-300">
              <Calendar className="mr-3 h-6 w-6" />
              Book Your Stay
            </Button>
            <Button variant="outline" className="bg-white/20 border-white/60 text-white hover:bg-white/40 hover:text-foreground px-12 py-6 text-xl font-semibold shadow-2xl backdrop-blur-md transform hover:scale-105 transition-all duration-300 [text-shadow:_0_1px_2px_rgb(0_0_0_/_50%)]">
              Explore Experiences
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};