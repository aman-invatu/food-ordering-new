import { useState } from "react";
import { cuisineData } from "@/services/data";
import { FoodItem } from "@/components/FoodItemCard";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Star, Clock } from "lucide-react";
import { toast } from "sonner";

const KoreanCuisine = () => {
  const { addToCart } = useCart();
  // Use cuisineData.korean if available, fallback to chinese for demo
  const items = cuisineData.chinese || cuisineData.chinese;
  const [sortBy, setSortBy] = useState("popularity");

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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Hero */}
      <div className="relative h-[350px] flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 mb-12">
        <img
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3"
          alt="Korean Cuisine"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Korean Cuisine</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            Experience authentic Korean flavors with our selection of traditional dishes, from spicy stews to sizzling BBQ.
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

      {/* Feature Wall */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sortedItems.map((item, idx) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row items-center bg-white/90 rounded-3xl shadow-2xl overflow-hidden animate-fade-in-card transition-transform duration-300 hover:scale-[1.025] hover:shadow-2xl"
              style={{ animationDelay: `${idx * 0.09 + 0.1}s` }}
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center p-6 min-w-[250px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full max-w-xs h-64 object-cover rounded-2xl shadow-lg border-4 border-orange-100 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                />
              </div>
              {/* Info */}
              <div className="flex-1 flex flex-col justify-center p-8">
                <h2 className="text-3xl font-extrabold mb-2 text-red-700">{item.name}</h2>
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
                  <span className="text-2xl font-bold text-orange-600">${item.price.toFixed(2)}</span>
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
      </div>
      {/* Custom Animation */}
      <style>{`
        @keyframes fade-in-card {
          0% { opacity: 0; transform: scale(0.92);}
          100% { opacity: 1; transform: scale(1);}
        }
        .animate-fade-in-card {
          animation: fade-in-card 0.7s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default KoreanCuisine;
