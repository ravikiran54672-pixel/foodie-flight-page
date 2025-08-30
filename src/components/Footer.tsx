import { Utensils, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/10 rounded-lg">
                <Utensils className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">FoodieExpress</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Delivering delicious food from your favorite local restaurants. 
              Fast, fresh, and always satisfying.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-white/10 p-2">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-white transition-smooth">About Us</a>
              <a href="#" className="block hover:text-white transition-smooth">Menu</a>
              <a href="#" className="block hover:text-white transition-smooth">Restaurants</a>
              <a href="#" className="block hover:text-white transition-smooth">Become a Partner</a>
              <a href="#" className="block hover:text-white transition-smooth">Careers</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-glow" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-glow" />
                <span>hello@foodieexpress.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary-glow" />
                <span>123 Food Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to get special offers and updates on new restaurants.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                className="w-full bg-white text-primary hover:bg-white/90 transition-smooth"
                size="sm"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/80">
          <p>&copy; 2024 FoodieExpress. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-white transition-smooth">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;