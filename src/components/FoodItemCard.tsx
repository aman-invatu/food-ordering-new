
import { useState } from "react";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export interface FoodItem {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  preparationTime: string;
  category: string;
}

interface FoodItemCardProps {
  food: FoodItem;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({ food }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = () => {
    addToCart(food);
    toast.success(`${food.name} added to cart!`);
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-yellow-500 text-white">
            <Star className="h-3 w-3 mr-1 fill-current" />
            {food.rating}
          </Badge>
        </div>
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-primary p-2 flex justify-center transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <Button 
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="w-full bg-white text-primary hover:bg-gray-100 flex items-center justify-center"
          >
            <Plus className="mr-1 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{food.name}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{food.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">${food.price.toFixed(2)}</span>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            size="sm"
            className="md:hidden bg-primary hover:bg-primary-600"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;
