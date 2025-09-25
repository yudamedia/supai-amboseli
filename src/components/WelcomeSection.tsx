import { Leaf, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import maasaiImage from '@/assets/maasai-culture.jpg';

export const WelcomeSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-earth">
              <img
                src={maasaiImage}
                alt="Maasai cultural experience"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title mb-6">
                A Sacred Bond with the Earth
              </h2>
              <p className="section-subtitle mb-6">
                Supai, a traditional Maasai greeting, embodies the warmth and hospitality that welcome you to this ancient land. Here, every encounter is a dialogue with nature — a call and response — where luxury meets responsibility, and experiences nourish both soul and environment.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
                "This place changed how I see the world. Every sunrise felt like a gift, 
                every elephant encounter a blessing."
                <footer className="text-sm mt-2 not-italic">
                  — Sarah M., Conservation Photographer
                </footer>
              </blockquote>
            </div>

            {/* Philosophy Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="border-none shadow-soft hover:shadow-earth transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-conservation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Regenerative</h3>
                  <p className="text-sm text-muted-foreground">100% solar powered, giving back to nature</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover:shadow-earth transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-sunset-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Authentic</h3>
                  <p className="text-sm text-muted-foreground">Genuine connections with local culture</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft hover:shadow-earth transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-earth-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">Empowering local Maasai families</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card rounded-3xl p-8 shadow-soft">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">Years in Conservation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-conservation mb-2">1,200+</div>
            <div className="text-sm text-muted-foreground">Elephants Protected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Solar Energy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-serif font-bold text-sunset-orange mb-2">Zero</div>
            <div className="text-sm text-muted-foreground">Waste to Landfill</div>
          </div>
        </div>
      </div>
    </section>
  );
};