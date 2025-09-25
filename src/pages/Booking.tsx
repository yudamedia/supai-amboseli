import { Calendar, Users, Bed, Check, Info, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const packages = [
  {
    id: "safari-classic",
    name: "Classic Safari Package",
    duration: "3 days / 2 nights",
    price: 580,
    features: ["Game drives", "All meals", "Airport transfer", "Professional guide"],
    popular: false
  },
  {
    id: "safari-premium",
    name: "Premium Safari Experience",
    duration: "5 days / 4 nights",
    price: 1200,
    features: ["Daily game drives", "Cultural experience", "All meals & drinks", "Luxury accommodation", "Airport transfer", "Photography guide"],
    popular: true
  },
  {
    id: "safari-ultimate",
    name: "Ultimate Amboseli Adventure",
    duration: "7 days / 6 nights",
    price: 2100,
    features: ["Unlimited game drives", "All experiences included", "Premium accommodation", "Private guide", "All meals & premium drinks", "Airport transfer", "Conservation tour"],
    popular: false
  }
];

const accommodationOptions = [
  { id: "eco-lodge", name: "Eco Lodge Room", price: 180 },
  { id: "safari-tent", name: "Premium Safari Tent", price: 280 },
  { id: "luxury-villa", name: "Luxury Safari Villa", price: 450 }
];

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="conservation-badge mb-6">
              <Calendar className="w-4 h-4" />
              Book Your Adventure
            </Badge>
            <h1 className="hero-title mb-6">Reserve Your Stay</h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Create your perfect Amboseli experience with our flexible booking options. 
              Choose from curated packages or customize your own adventure.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Package Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="w-5 h-5" />
                  Choose Your Package
                </CardTitle>
                <CardDescription>
                  Select from our curated safari experiences or customize your own
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {packages.map((pkg) => (
                  <div key={pkg.id} className="relative">
                    <Card className="cursor-pointer hover:border-primary transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <Checkbox id={pkg.id} className="mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Label htmlFor={pkg.id} className="font-semibold cursor-pointer">
                                  {pkg.name}
                                </Label>
                                {pkg.popular && (
                                  <Badge variant="secondary" className="text-xs">Most Popular</Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{pkg.duration}</p>
                              <div className="flex flex-wrap gap-1">
                                {pkg.features.map((feature, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-lg">${pkg.price}</div>
                            <div className="text-xs text-muted-foreground">per person</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Custom Booking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Customize Your Stay
                </CardTitle>
                <CardDescription>
                  Or create your own experience with flexible options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkin">Check-in Date</Label>
                    <Input id="checkin" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkout">Check-out Date</Label>
                    <Input id="checkout" type="date" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accommodation">Accommodation Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        {accommodationOptions.map(option => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.name} - ${option.price}/night
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium">Add-on Experiences</Label>
                  <div className="space-y-3">
                    {[
                      { id: "cultural", name: "Maasai Cultural Experience", price: 45 },
                      { id: "stargazing", name: "Stargazing Experience", price: 65 },
                      { id: "sunrise", name: "Kilimanjaro Sunrise Trek", price: 120 },
                      { id: "photography", name: "Photography Workshop", price: 85 }
                    ].map(experience => (
                      <div key={experience.id} className="flex items-center space-x-2">
                        <Checkbox id={experience.id} />
                        <Label htmlFor={experience.id} className="flex-1 cursor-pointer">
                          {experience.name}
                        </Label>
                        <span className="text-sm font-medium">${experience.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guest Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Guest Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="special">Special Requests</Label>
                  <Input id="special" placeholder="Dietary restrictions, celebrations, accessibility needs..." />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
                <CardDescription>Review your selection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Premium Safari Experience</span>
                    <span>$1,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>3 nights accommodation</span>
                    <span>$840</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cultural Experience</span>
                    <span>$45</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>$2,085</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Park fees & taxes</span>
                    <span>$165</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$2,250</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full mb-3" size="lg">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Proceed to Payment
                  </Button>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Secure booking with flexible cancellation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Policies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Booking Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    Inclusions
                  </h4>
                  <ul className="text-muted-foreground space-y-1 ml-6">
                    <li>• All meals and beverages</li>
                    <li>• Game drives with professional guide</li>
                    <li>• Airport transfers</li>
                    <li>• Park entrance fees</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-blue-600" />
                    Policies
                  </h4>
                  <ul className="text-muted-foreground space-y-1 ml-6">
                    <li>• Free cancellation up to 48 hours</li>
                    <li>• 50% deposit required to confirm</li>
                    <li>• Travel insurance recommended</li>
                    <li>• Valid passport required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;