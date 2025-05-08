
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import BrandLogo from "./navbar/BrandLogo";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const foodCategories = [
    { name: "Fast Food", path: "/category/fast-food" },
    { name: "Drinks", path: "/category/drinks" },
    { name: "Dinner", path: "/category/dinner" },
    { name: "Lunch", path: "/category/lunch" },
    { name: "Coffee", path: "/category/coffee" },
    { name: "Breakfast", path: "/category/breakfast" },
    { name: "Snacks", path: "/category/snacks" },
    { name: "Chai", path: "/category/chai" },
    { name: "Lassi", path: "/category/lassi" },
    { name: "Biryani", path: "/category/biryani" },
    { name: "Paneer", path: "/category/paneer" },
    { name: "Pickle", path: "/category/pickle" },
    { name: "Salad", path: "/category/salad" },
  ];

  const cuisines = [
    { name: "Indian", path: "/cuisine/indian" },
    { name: "Chinese", path: "/cuisine/chinese" },
    { name: "American", path: "/cuisine/american" },
    { name: "Italian", path: "/cuisine/italian" },
    { name: "Mexican", path: "/cuisine/mexican" },
    { name: "Japanese", path: "/cuisine/japanese" },
    { name: "Thai", path: "/cuisine/thai" },
    { name: "French", path: "/cuisine/french" },
    { name: "Korean", path: "/cuisine/korean" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <BrandLogo />

        <DesktopNav 
          totalItems={totalItems}
          foodCategories={foodCategories}
          cuisines={cuisines}
        />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileNav 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        totalItems={totalItems}
        foodCategories={foodCategories}
        cuisines={cuisines}
      />
    </header>
  );
};

export default Navbar;
