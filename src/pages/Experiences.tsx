import { Leaf, Camera, Mountain, Users, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const experiences = [
  {
    id: 1,
    title: "Wildlife Safari Drive",
    description: "Explore Amboseli's diverse wildlife including elephants, lions, cheetahs, and over 400 bird species with our expert guides.",
    duration: "3-4 hours",
    difficulty: "Easy",
    highlights: ["Elephant herds", "Big cats", "Bird watching", "Mount Kilimanjaro views"],
    image: "/src/assets/elephants-watering-hole.jpg",
    price: "From $85 per person"
  },
  {
    id: 2,
    title: "Cultural Maasai Experience",
    description: "Immerse yourself in authentic Maasai culture through traditional dances, storytelling, and craft workshops.",
    duration: "2-3 hours",
    difficulty: "Easy",
    highlights: ["Traditional dances", "Craft making", "Cultural stories", "Local cuisine"],
    image: "/src/assets/maasai-culture.jpg",
    price: "From $45 per person"
  },
  {
    id: 3,
    title: "Kilimanjaro Sunrise Trek",
    description: "Early morning hike to witness the spectacular sunrise over Mount Kilimanjaro with panoramic views of the ecosystem.",
    duration: "4-5 hours",
    difficulty: "Moderate",
    highlights: ["Sunrise views", "Photography spots", "Nature walk", "Professional guide"],
    image: "/src/assets/hero-amboseli-sunrise.jpg",
    price: "From $120 per person"
  },
  {
    id: 4,
    title: "Stargazing Experience",
    description: "Discover the wonders of the African night sky with professional telescopes and expert astronomy guides.",
    duration: "2 hours",
    difficulty: "Easy",
    highlights: ["Professional telescopes", "Constellation mapping", "Astrophotography", "Night refreshments"],
    image: "/src/assets/stargazing-experience.jpg",
    price: "From $65 per person"
  }
];

const Experiences = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="conservation-badge mb-6">
              <Leaf className="w-4 h-4" />
              Sustainable Adventures
            </Badge>
            <h1 className="hero-title mb-6">Unforgettable Experiences</h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Discover the magic of Amboseli through carefully curated experiences that celebrate wildlife, 
              culture, and conservation while creating memories that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {experience.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                    <span className="text-primary font-semibold">{experience.price}</span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {experience.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Small groups
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Experience highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Book Experience
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Message */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Conservation Through Experience</h2>
            <p className="section-subtitle mb-8">
              Every experience directly supports local conservation efforts and community development. 
              Your adventure helps protect Amboseli's precious ecosystem for future generations.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="conservation-badge">
                <Leaf className="w-4 h-4" />
                Wildlife Protection
              </Badge>
              <Badge className="conservation-badge">
                <Users className="w-4 h-4" />
                Community Support
              </Badge>
              <Badge className="conservation-badge">
                <Mountain className="w-4 h-4" />
                Ecosystem Preservation
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;