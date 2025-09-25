import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Music, Palette, Home, Calendar, Star } from 'lucide-react';

const Culture = () => {
  const experiences = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Village Visits",
      description: "Experience authentic Maasai life with guided visits to local villages where you'll meet elders, warriors, and families.",
      duration: "Half Day"
    },
    {
      icon: <Music className="h-8 w-8 text-primary" />,
      title: "Traditional Dances",
      description: "Join in traditional Maasai dances and songs, learning the stories and meanings behind each movement.",
      duration: "Evening"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Beadwork Workshops",
      description: "Learn the ancient art of Maasai beadwork from local artisans and create your own meaningful jewelry.",
      duration: "2-3 Hours"
    },
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Boma Construction",
      description: "Participate in building traditional Maasai homes using ancestral techniques and natural materials.",
      duration: "Full Day"
    }
  ];

  const traditions = [
    {
      title: "Warriors & Elders",
      description: "Learn about the age-set system and the journey from warrior to elder in Maasai society."
    },
    {
      title: "Cattle Culture",
      description: "Understand the central role of cattle in Maasai life, spirituality, and social structure."
    },
    {
      title: "Oral Traditions",
      description: "Listen to ancient stories, proverbs, and wisdom passed down through generations."
    },
    {
      title: "Seasonal Ceremonies",
      description: "Experience or learn about traditional ceremonies marking important life transitions."
    }
  ];

  const artisans = [
    {
      name: "Mama Nasirian",
      craft: "Master Beadworker",
      specialty: "Traditional wedding jewelry and ceremonial pieces"
    },
    {
      name: "Mzee Sankale",
      craft: "Wood Carver",
      specialty: "Sacred staffs and traditional implements"
    },
    {
      name: "Taita Lemunge",
      craft: "Leather Worker",
      specialty: "Shields, sandals, and ceremonial attire"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            Maasai Culture
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-6">
            Immerse yourself in the rich traditions and living heritage of the Maasai people
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Living Heritage</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Maasai people have called the Amboseli region home for centuries, living in harmony with the land and wildlife. 
            At Supai Amboseli, we're honored to share their rich cultural heritage with visitors, creating meaningful 
            connections that benefit both our guests and the local community. All cultural experiences are conducted 
            with deep respect and in partnership with Maasai elders and cultural leaders.
          </p>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Cultural Experiences
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {experience.icon}
                  </div>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {experience.description}
                  </CardDescription>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="font-semibold text-primary">{experience.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Sacred Traditions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {traditions.map((tradition, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-primary" />
                    {tradition.title}
                  </CardTitle>
                  <CardDescription>{tradition.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Artisans */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Master Artisans
          </h2>
          <div className="space-y-6">
            {artisans.map((artisan, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{artisan.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {artisan.craft}
                      </CardDescription>
                    </div>
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardDescription className="mt-2">
                    {artisan.specialty}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Community Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <p className="text-muted-foreground">Partner Villages</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Revenue to Community</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Local Beneficiaries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            Experience Authentic Culture
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for meaningful cultural exchanges that honor Maasai traditions while supporting local communities.
          </p>
          <Button size="lg" className="btn-conservation">
            <Users className="mr-2 h-5 w-5" />
            Book Cultural Experience
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;