import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Menu, X, Utensils } from "lucide-react";

interface NavbarProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartItemsCount, onCartClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Utensils className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FoodieExpress
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-smooth font-medium">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </a>
          </div>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative hover:shadow-hover transition-smooth"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs animate-bounce-in"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4 py-4">
              <a href="#" className="text-foreground hover:text-primary transition-smooth font-medium">
                Home
              </a>
              <a href="#menu" className="text-foreground hover:text-primary transition-smooth font-medium">
                Menu
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth font-medium">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;