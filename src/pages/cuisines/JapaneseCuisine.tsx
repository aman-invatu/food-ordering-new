import { useState } from "react";
import { cuisineData } from "@/services/data";
import { FoodItem } from "@/components/FoodItemCard";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Star, Clock } from "lucide-react";
import { toast } from "sonner";

const JapaneseCuisine = () => {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState("popularity");

  // Use cuisineData.japanese if available, fallback to chinese for demo
  const items = cuisineData.chinese || cuisineData.chinese;

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-100">
      {/* Hero */}
      <div className="relative h-[350px] flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-600 mb-12">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
          alt="Japanese Cuisine"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Japanese Cuisine</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            Experience authentic Japanese flavors with our selection of traditional dishes, from sushi to ramen and more.
          </p>
        </div>
      </div>

      {/* Sort */}
      <div className="container mx-auto px-4 mb-8 flex justify-end">
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

      {/* Alternating Chef's Menu Sections */}
      <div className="container mx-auto px-4 pb-16 space-y-16">
        {sortedItems.map((item, idx) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 
              ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} 
              opacity-0 translate-y-8 animate-slide-in`}
            style={{ animationDelay: `${idx * 0.12 + 0.1}s` }}
          >
            {/* Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full max-w-md h-72 object-cover rounded-3xl shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Info */}
            <div className="flex-1 flex flex-col justify-center bg-white/80 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-extrabold mb-2 text-pink-700">{item.name}</h2>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-500 text-white rounded-full px-3 py-1 text-xs font-bold flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {item.rating}
                </span>
                <span className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {item.preparationTime}
                </span>
              </div>
              <p className="text-gray-700 text-lg mb-6">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-600">${item.price.toFixed(2)}</span>
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="bg-primary hover:bg-primary-600 text-white px-6 py-2 text-lg font-semibold rounded-full shadow"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Custom Animation */}
      <style>{`
        @keyframes slide-in {
          0% { opacity: 0; transform: translateY(32px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-slide-in {
          animation: slide-in 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default JapaneseCuisine;
