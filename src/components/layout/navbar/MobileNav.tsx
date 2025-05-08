
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  totalItems: number;
  foodCategories: Array<{ name: string; path: string }>;
  cuisines: Array<{ name: string; path: string }>;
}

const MobileNav = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  totalItems, 
  foodCategories, 
  cuisines 
}: MobileNavProps) => {
  const handleItemClick = () => setIsMenuOpen(false);

  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-lg font-medium" onClick={handleItemClick}>
          Home
        </Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-lg font-medium">
            Food Categories <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {foodCategories.map((category) => (
              <DropdownMenuItem key={category.name} asChild>
                <Link to={category.path} onClick={handleItemClick}>
                  {category.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-lg font-medium">
            Cuisines <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {cuisines.map((cuisine) => (
              <DropdownMenuItem key={cuisine.name} asChild>
                <Link to={cuisine.path} onClick={handleItemClick}>
                  {cuisine.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/menu" className="text-lg font-medium" onClick={handleItemClick}>
          Menu
        </Link>
        <Link to="/restaurants" className="text-lg font-medium" onClick={handleItemClick}>
          Restaurants
        </Link>
        <Link to="/about" className="text-lg font-medium" onClick={handleItemClick}>
          About
        </Link>
        <Link to="/orders" className="text-lg font-medium" onClick={handleItemClick}>
          My Orders
        </Link>
        <div className="flex items-center pt-2">
          <MapPin className="mr-2 h-4 w-4" />
          <span>Set Location</span>
        </div>
        <div className="flex space-x-4 pt-2">
          <Link 
            to="/cart" 
            className="flex-1"
            onClick={handleItemClick}
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center"
            >
              <ShoppingCart className="mr-1 h-5 w-5" />
              <span>Cart ({totalItems})</span>
            </Button>
          </Link>
          <Link 
            to="/login" 
            className="flex-1"
            onClick={handleItemClick}
          >
            <Button 
              className="w-full bg-primary hover:bg-primary-600 text-white flex items-center justify-center"
            >
              <User className="mr-1 h-4 w-4" />
              <span>Sign In</span>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
