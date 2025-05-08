
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCategoriesMenu from "./FoodCategoriesMenu";
import CuisinesMenu from "./CuisinesMenu";

interface DesktopNavProps {
  totalItems: number;
  foodCategories: Array<{ name: string; path: string }>;
  cuisines: Array<{ name: string; path: string }>;
}

const DesktopNav = ({ totalItems, foodCategories, cuisines }: DesktopNavProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="menu-item active-menu-item">
          Home
        </Link>
        
        <FoodCategoriesMenu categories={foodCategories} />
        <CuisinesMenu cuisines={cuisines} />

        <Link to="/menu" className="menu-item">
          Menu
        </Link>
        <Link to="/restaurants" className="menu-item">
          Restaurants
        </Link>
        <Link to="/about" className="menu-item">
          About
        </Link>
        <Link to="/orders" className="menu-item">
          My Orders
        </Link>
      </nav>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="flex items-center text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          <span>Set Location</span>
        </Button>
        <Link to="/cart" className="relative">
          <Button variant="outline" className="flex items-center">
            <ShoppingCart className="mr-1 h-5 w-5" />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
        <Link to="/login">
          <Button className="bg-primary hover:bg-primary-600 text-white flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>Sign In</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default DesktopNav;
