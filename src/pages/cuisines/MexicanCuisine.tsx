import { useState } from "react";
import { cuisineData } from "@/services/data";
import { FoodItem } from "@/components/FoodItemCard";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Star, Clock } from "lucide-react";
import { toast } from "sonner";

const categories = [
  { id: "all", name: "All Items" },
  { id: "tacos", name: "Tacos" },
  { id: "burritos", name: "Burritos" },
  { id: "enchiladas", name: "Enchiladas" },
  { id: "desserts", name: "Desserts" },
];

const MexicanCuisine = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  // Filter and sort
  const filteredItems = cuisineData.mexican.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Hero */}
      <div className="relative h-[350px] flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 mb-12">
        <img
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3"
          alt="Mexican Cuisine"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Mexican Cuisine</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            Experience authentic Mexican flavors with our selection of traditional dishes, from savory tacos to spicy enchiladas.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-3 py-2 bg-white"
        >
          <option value="popularity">Sort by Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.map((item, idx) => (
            <div
              key={item.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.08 + 0.1}s` }}
            >
              {/* Image with overlay */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Overlay info on hover */}
                <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-yellow-500 text-white rounded-full px-3 py-1 text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {item.rating}
                    </span>
                    <span className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.preparationTime}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="bg-primary hover:bg-primary-600 text-white w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
              {/* Info bar */}
              <div className="p-4 flex flex-col gap-1">
                <h3 className="text-xl font-bold truncate">{item.name}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-orange-600">${item.price.toFixed(2)}</span>
                  {/* Show badges on mobile (since overlay is hover only) */}
                  <div className="flex gap-2 sm:hidden">
                    <span className="bg-yellow-500 text-white rounded-full px-2 py-0.5 text-xs font-bold flex items-center">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      {item.rating}
                    </span>
                    <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs font-bold flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.preparationTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom Animation */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(32px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default MexicanCuisine;
