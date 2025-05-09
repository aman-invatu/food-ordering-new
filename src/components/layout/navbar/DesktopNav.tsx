
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCategoriesMenu from "./FoodCategoriesMenu";
import CuisinesMenu from "./CuisinesMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[...Array(8)].map((_, i) => (
                    <Link
                      key={`menu${i+1}`}
                      to={`/menu${i+1}`}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Menu {i+1}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore our Menu {i+1} collections
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
