import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Plus } from "lucide-react";
import { FoodItem } from "@/data/foodData";

interface FoodCardProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem) => void;
}

const FoodCard = ({ item, onAddToCart }: FoodCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-hover transition-smooth hover:scale-[1.02] hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Rating Badge */}
        <Badge className="absolute top-3 left-3 bg-background/90 text-foreground border-0">
          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
          {item.rating}
        </Badge>

        {/* Add to Cart Button */}
        <Button
          size="sm"
          onClick={() => onAddToCart(item)}
          className="absolute top-3 right-3 bg-gradient-primary hover:shadow-glow transition-smooth opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-smooth">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Restaurant & Time */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span className="font-medium">{item.restaurant}</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{item.preparationTime}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ${item.price.toFixed(2)}
          </div>
          <Button
            onClick={() => onAddToCart(item)}
            variant="outline"
            size="sm"
            className="hover:bg-gradient-primary hover:text-primary-foreground transition-smooth border-primary/20"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;