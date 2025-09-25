import { Wifi, Car, Utensils, Waves, Star, Users, Bed, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const accommodations = [
  {
    id: 1,
    title: "Luxury Safari Villa",
    description: "Spacious villa with panoramic views of Mount Kilimanjaro and private deck overlooking the savanna.",
    capacity: "4 guests",
    bedrooms: "2 bedrooms",
    bathrooms: "2 bathrooms",
    size: "120 sqm",
    amenities: ["Private deck", "Kilimanjaro views", "Mini bar", "Room service", "Wi-Fi", "Air conditioning"],
    image: "/src/assets/villa-accommodation.jpg",
    price: "From $450 per night",
    features: ["Best views", "Most spacious"]
  },
  {
    id: 2,
    title: "Premium Safari Tent",
    description: "Elevated canvas tent with modern amenities, private bathroom, and stunning wildlife viewing opportunities.",
    capacity: "2 guests",
    bedrooms: "1 bedroom",
    bathrooms: "1 bathroom",
    size: "45 sqm",
    amenities: ["Elevated platform", "Private bathroom", "Wildlife viewing", "Mini fridge", "Wi-Fi", "Ceiling fan"],
    image: "/src/assets/tent-accommodation.jpg",
    price: "From $280 per night",
    features: ["Authentic safari", "Great value"]
  },
  {
    id: 3,
    title: "Eco Lodge Room",
    description: "Sustainable accommodation built with local materials, featuring modern comfort in harmony with nature.",
    capacity: "2 guests",
    bedrooms: "1 bedroom",
    bathrooms: "1 bathroom",
    size: "35 sqm",
    amenities: ["Eco-friendly design", "Local materials", "Solar power", "Shared deck", "Wi-Fi", "Natural ventilation"],
    image: "/src/assets/eco-lodge-accommodation.jpg",
    price: "From $180 per night",
    features: ["Eco-friendly", "Budget conscious"]
  }
];

const sharedAmenities = [
  { icon: Utensils, title: "Restaurant & Bar", description: "Farm-to-table dining with local ingredients" },
  { icon: Waves, title: "Swimming Pool", description: "Refreshing pool with savanna views" },
  { icon: Car, title: "Game Drive Vehicle", description: "Complimentary safari vehicle access" },
  { icon: Wifi, title: "High-Speed Wi-Fi", description: "Stay connected throughout the property" }
];

const Accommodation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="conservation-badge mb-6">
              <Star className="w-4 h-4" />
              Luxury in Nature
            </Badge>
            <h1 className="hero-title mb-6">Safari Accommodation</h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Experience the perfect blend of comfort and wilderness in our thoughtfully designed accommodations, 
              each offering unique perspectives of Amboseli's stunning landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {accommodations.map((accommodation, index) => (
              <Card key={accommodation.id} className={`overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex`}>
                <div className="lg:w-1/2">
                  <div className="aspect-video lg:aspect-square relative">
                    <img 
                      src={accommodation.image} 
                      alt={accommodation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {accommodation.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/90 text-foreground text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <CardHeader className="lg:p-8">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl">{accommodation.title}</CardTitle>
                      <span className="text-primary font-semibold text-lg">{accommodation.price}</span>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {accommodation.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="lg:p-8 lg:pt-0">
                    {/* Room Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        {accommodation.capacity}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bed className="w-4 h-4 text-muted-foreground" />
                        {accommodation.bedrooms}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Bath className="w-4 h-4 text-muted-foreground" />
                        {accommodation.bathrooms}
                      </div>
                      <div className="text-sm font-medium">
                        {accommodation.size}
                      </div>
                    </div>
                    
                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Amenities included:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {accommodation.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full lg:w-auto">
                      Book Now
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Amenities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Shared Amenities</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              All guests enjoy access to our premium facilities designed to enhance your safari experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sharedAmenities.map((amenity, index) => (
              <Card key={index} className="text-center p-6">
                <amenity.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title mb-6">Ready for Your Safari Adventure?</h2>
            <p className="section-subtitle mb-8">
              Choose your perfect accommodation and start planning your unforgettable Amboseli experience. 
              All bookings include complimentary airport transfers and daily game drives.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button size="lg" className="min-w-40">
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="min-w-40">
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodation;