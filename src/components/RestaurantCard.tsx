
import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  categories: string[];
  deliveryTime: string;
  price: string;
  promotion?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  image,
  rating,
  categories,
  deliveryTime,
  price,
  promotion,
}) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-52 object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-green-600 text-white">
              <Star className="h-3 w-3 mr-1 fill-current" />
              {rating}
            </Badge>
          </div>
          {promotion && (
            <div className="absolute bottom-0 left-0 right-0 bg-primary text-white text-center py-1 text-sm">
              {promotion}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-gray-500 text-sm mb-2">
            {categories.join(", ")}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{deliveryTime}</span>
            </div>
            <span className="text-sm text-gray-500">{price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
