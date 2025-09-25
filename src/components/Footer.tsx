import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    'Experience': [
      { name: 'Accommodation', href: '#accommodation' },
      { name: 'Wildlife Safari', href: '#experiences' },
      { name: 'Cultural Tours', href: '#culture' },
      { name: 'Conservation', href: '#conservation' },
    ],
    'Information': [
      { name: 'About Us', href: '#about' },
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Blog', href: '#blog' },
    ],
    'Support': [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Booking Terms', href: '#terms' },
      { name: 'Privacy Policy', href: '#privacy' },
    ],
  };

  const conservationPartners = [
    'Kenya Wildlife Service',
    'Amboseli Trust for Elephants',
    'African Wildlife Foundation',
    'Maasai Wilderness Conservation Trust',
  ];

  return (
    <footer className="bg-earth text-earth-foreground relative overflow-hidden">
      {/* Maasai beadwork pattern */}
      <div className="absolute top-0 left-0 right-0 h-2 opacity-60">
        <div className="flex h-full">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${
                i % 4 === 0 ? 'bg-accent' : 
                i % 4 === 1 ? 'bg-primary' : 
                i % 4 === 2 ? 'bg-conservation' : 'bg-secondary'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              Supai
              <span className="text-lg ml-2 font-inter font-normal text-muted-foreground">
                Eco Lodge
              </span>
            </h3>
            <p className="text-earth-foreground/80 mb-6 leading-relaxed">
              Where nature meets nurture in the heart of Amboseli, offering sustainable luxury with breathtaking views of Mount Kilimanjaro.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Amboseli National Park, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@supai-ecolodge.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-primary mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-earth-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Conservation Partners */}
        <div className="border-t border-earth-foreground/20 pt-8 mb-8">
          <h4 className="font-semibold text-primary mb-4 text-center">Conservation Partners</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {conservationPartners.map((partner) => (
              <div key={partner} className="text-sm text-earth-foreground/60 hover:text-primary transition-colors duration-200">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earth-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-earth-foreground/60">
            © 2025 Supai Amboseli. All rights reserved. | Built with sustainability in mind.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-earth-foreground/60 hover:text-primary transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-earth-foreground/60 hover:text-primary transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-earth-foreground/60 hover:text-primary transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};