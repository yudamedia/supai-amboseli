import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 20 123 4567", "+254 722 123 456"],
    description: "Available 24/7 for emergencies"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@enkopeco.com", "reservations@enkopeco.com"],
    description: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Amboseli National Park", "Kajiado County, Kenya"],
    description: "2 hours from Nairobi"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Sun: 6:00 AM - 10:00 PM", "EAT (UTC+3)"],
    description: "Extended hours for guest services"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="conservation-badge mb-6">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </Badge>
            <h1 className="hero-title mb-6">Contact Us</h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Ready to embark on your Amboseli adventure? Our team is here to help you plan 
              the perfect safari experience tailored to your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
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
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input id="guests" type="number" placeholder="2" min="1" max="20" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dates">Preferred Dates</Label>
                  <Input id="dates" placeholder="e.g., March 15-20, 2024" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your ideal safari experience, special requests, or any questions you have..."
                    className="min-h-32"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="section-title mb-4">Get in Touch</h2>
                <p className="section-subtitle">
                  We're here to help you plan your perfect Amboseli experience. 
                  Reach out to us through any of the following channels.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <div className="space-y-1 text-sm text-muted-foreground mb-2">
                            {info.details.map((detail, idx) => (
                              <div key={idx}>{detail}</div>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Emergency Contact */}
              <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                    Emergency Contact
                  </h3>
                  <p className="text-sm text-orange-700 dark:text-orange-400 mb-2">
                    For urgent matters during your stay:
                  </p>
                  <p className="font-medium text-orange-800 dark:text-orange-300">
                    +254 722 EMERGENCY (24/7)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Find Us</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Located in the heart of Amboseli National Park with stunning views of Mount Kilimanjaro.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-muted-foreground text-sm">
                      Detailed location and directions will be available here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">From Nairobi</h4>
                <p className="text-sm text-muted-foreground">2.5 hours by road via Namanga</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Nearest Airstrip</h4>
                <p className="text-sm text-muted-foreground">Amboseli Airstrip (15 minutes)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Transfers</h4>
                <p className="text-sm text-muted-foreground">Complimentary pickup available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;