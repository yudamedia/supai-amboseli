import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Shield, Heart, Trees, Droplets, Sun } from 'lucide-react';

const Conservation = () => {
  const initiatives = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Wildlife Protection",
      description: "Working with local communities to protect endangered species and their habitats in the Amboseli ecosystem.",
      impact: "500+ elephants protected"
    },
    {
      icon: <Trees className="h-8 w-8 text-primary" />,
      title: "Reforestation",
      description: "Planting indigenous trees to restore degraded landscapes and create wildlife corridors.",
      impact: "10,000 trees planted annually"
    },
    {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: "Water Conservation",
      description: "Implementing sustainable water management systems and protecting natural water sources.",
      impact: "3 water sources restored"
    },
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "Renewable Energy",
      description: "100% solar-powered lodge operations reducing our carbon footprint to near zero.",
      impact: "95% carbon reduction"
    }
  ];

  const partnerships = [
    {
      name: "Amboseli Trust for Elephants",
      description: "Long-term elephant research and conservation"
    },
    {
      name: "Kenya Wildlife Service",
      description: "Anti-poaching and habitat protection"
    },
    {
      name: "Maasai Community Conservancies",
      description: "Community-based conservation initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            Conservation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-6">
            Protecting Africa's wildlife and ecosystems for future generations
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">Our Conservation Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Supai Amboseli, conservation isn't just what we do—it's who we are. We believe that sustainable tourism 
            can be a powerful force for wildlife protection and community development. Every guest who stays with us 
            directly contributes to our conservation efforts and the protection of the Amboseli ecosystem.
          </p>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Conservation Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {initiative.icon}
                  </div>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {initiative.description}
                  </CardDescription>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="font-semibold text-primary">{initiative.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Conservation Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Elephants Protected</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000</div>
              <p className="text-muted-foreground">Trees Planted Annually</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Carbon Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">
            Conservation Partners
          </h2>
          <div className="space-y-6">
            {partnerships.map((partner, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    {partner.name}
                  </CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">
            Join Our Conservation Efforts
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your stay and become part of our conservation story. Together, we can protect Africa's wildlife for future generations.
          </p>
          <Button size="lg" className="btn-conservation">
            <Leaf className="mr-2 h-5 w-5" />
            Book Conservation Experience
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conservation;