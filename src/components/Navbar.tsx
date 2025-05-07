
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold">F</span>
          </div>
          <span className="text-2xl font-bold ml-2">Foodiee</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="menu-item active-menu-item">
            Home
          </Link>
          <Link to="/menu" className="menu-item">
            Menu
          </Link>
          <Link to="/restaurants" className="menu-item">
            Restaurants
          </Link>
          <Link to="/about" className="menu-item">
            About
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/menu" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link to="/restaurants" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              Restaurants
            </Link>
            <Link to="/about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <div className="flex items-center pt-2">
              <MapPin className="mr-2 h-4 w-4" />
              <span>Set Location</span>
            </div>
            <div className="flex space-x-4 pt-2">
              <Link 
                to="/cart" 
                className="flex-1"
                onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
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
      )}
    </header>
  );
};

export default Navbar;
