import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Delicious Food
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover amazing dishes from local restaurants. Fresh ingredients, fast delivery, unforgettable taste.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                <Input
                  placeholder="Search for restaurants or dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-transparent border-none text-white placeholder:text-white/70 focus-visible:ring-0"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button
                onClick={handleSearch}
                className="bg-gradient-primary hover:shadow-glow transition-smooth px-8 font-semibold"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-glow" />
              <span className="font-medium">500+ Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-glow" />
              <span className="font-medium">30min Average Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">★</span>
              </div>
              <span className="font-medium">4.8+ Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;