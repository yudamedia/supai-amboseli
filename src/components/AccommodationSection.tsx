import { useState } from 'react';
import { ChevronLeft, ChevronRight, Wifi, Coffee, Star, Sun, Droplets, Hammer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import tentImage from '@/assets/tent-accommodation.jpg';
import villaImage from '@/assets/villa-accommodation.jpg';
import stargazingImage from '@/assets/stargazing-experience.jpg';

const accommodations = [
  {
    id: 1,
    title: "Luxury Safari Tents",
    description: "Elevated canvas tents with panoramic views of Mount Kilimanjaro and the savanna",
    images: [tentImage, stargazingImage],
    features: ["Solar Powered", "Private Deck", "En-suite Bathroom", "Mosquito Netting"],
    icons: [Sun, Coffee, Droplets, Star],
    price: "From $450/night",
    guests: "2 guests"
  },
  {
    id: 2,
    title: "Eco Villas",
    description: "Spacious stone and timber villas designed with traditional Maasai architectural elements",
    images: [villaImage, tentImage],
    features: ["Rainwater Harvesting", "Locally Crafted", "Private Garden", "Stargazing Deck"],
    icons: [Droplets, Hammer, Wifi, Star],
    price: "From $650/night",
    guests: "4 guests"
  },
  {
    id: 3,
    title: "Stargazer Suites",
    description: "Open-air suites with retractable roofs for an unforgettable night under African stars",
    images: [stargazingImage, villaImage],
    features: ["Retractable Roof", "Telescope Access", "Climate Control", "24/7 Service"],
    icons: [Star, Coffee, Sun, Droplets],
    price: "From $850/night",
    guests: "2 guests"
  }
];

export const AccommodationSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: number]: number}>({});

  const nextImage = (accommodationId: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [accommodationId]: ((prev[accommodationId] || 0) + 1) % accommodations.find(acc => acc.id === accommodationId)!.images.length
    }));
  };

  const prevImage = (accommodationId: number) => {
    const accommodation = accommodations.find(acc => acc.id === accommodationId)!;
    setActiveImageIndex(prev => ({
      ...prev,
      [accommodationId]: ((prev[accommodationId] || 0) - 1 + accommodation.images.length) % accommodation.images.length
    }));
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="conservation-badge mb-4">
            <Hammer className="w-4 h-4 mr-2" />
            Sustainably Crafted
          </Badge>
          <h2 className="section-title mb-6">Where Comfort Meets Conservation</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Each accommodation is thoughtfully designed to minimize environmental impact 
            while maximizing your connection to this remarkable ecosystem.
          </p>
        </div>

        {/* Accommodation Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {accommodations.map((accommodation) => {
            const currentImageIndex = activeImageIndex[accommodation.id] || 0;
            return (
              <Card key={accommodation.id} className="group overflow-hidden border-none shadow-soft hover:shadow-earth transition-all duration-500">
                {/* Image Carousel */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={accommodation.images[currentImageIndex]}
                    alt={accommodation.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Image Navigation */}
                  {accommodation.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 w-8 h-8 rounded-full glass-effect opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => prevImage(accommodation.id)}
                      >
                        <ChevronLeft className="h-4 w-4 text-white" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 w-8 h-8 rounded-full glass-effect opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => nextImage(accommodation.id)}
                      >
                        <ChevronRight className="h-4 w-4 text-white" />
                      </Button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {accommodation.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {accommodation.price}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-semibold">{accommodation.title}</h3>
                    <span className="text-sm text-muted-foreground">{accommodation.guests}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {accommodation.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {accommodation.features.map((feature, index) => {
                      const Icon = accommodation.icons[index];
                      return (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <Icon className="h-4 w-4 text-conservation" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Button className="w-full btn-conservation">
                    Reserve Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Night Sky Section */}
        <div className="bg-gradient-to-r from-primary/10 to-conservation/10 rounded-3xl p-8 md:p-12 text-center">
          <Star className="w-12 h-12 text-accent mx-auto mb-6" />
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Experience the African Night Sky
          </h3>
          <p className="section-subtitle mb-6 max-w-2xl mx-auto">
            With minimal light pollution, Amboseli offers some of the world's most spectacular 
            stargazing. Our astronomy guide will introduce you to southern hemisphere constellations.
          </p>
          <Button className="btn-earth">
            Book Stargazing Experience
          </Button>
        </div>
      </div>
    </section>
  );
};