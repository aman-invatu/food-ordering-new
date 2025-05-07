import { categoryData } from "@/services/data";
import { FoodItem } from "@/components/FoodItemCard";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const BreakFastCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { cartItems, addToCart } = useCart();

  const categories = [
    { id: "all", name: "All Items" },
    { id: "sweet", name: "Sweet Treats" },
    { id: "healthy", name: "Healthy Options" },
    { id: "classic", name: "Classic Favorites" },
  ];

  const filteredItems = categoryData.breakFast.filter((item) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "sweet") {
      return item.name.toLowerCase().includes("pancake") || 
             item.name.toLowerCase().includes("waffle") || 
             item.name.toLowerCase().includes("toast");
    }
    if (selectedCategory === "healthy") {
      return item.name.toLowerCase().includes("bowl") || 
             item.name.toLowerCase().includes("avocado");
    }
    if (selectedCategory === "classic") {
      return item.name.toLowerCase().includes("eggs") || 
             item.name.toLowerCase().includes("sandwich");
    }
    return true;
  });

  // Split items into featured and regular
  const featuredItems = filteredItems.slice(0, 2);
  const regularItems = filteredItems.slice(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
              Morning <br />
              <span className="text-orange-400">Delights</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Start your day with our carefully crafted breakfast collection
            </p>
          </div>
        </div>
      </div>

      {/* Featured Items Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredItems.map((item: FoodItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center text-white mb-3">
                      <span className="bg-orange-500 px-3 py-1 rounded-full text-sm">
                        {item.preparationTime}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="text-yellow-400">★ {item.rating}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-400">${item.price}</span>
                      <button className="bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Regular Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularItems.map((item: FoodItem) => {
            const cartItem = cartItems.find(ci => ci.id === item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative"
                style={{ minHeight: '320px' }}
              >
                <div className="relative h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center text-white mb-3">
                        <span className="bg-orange-500 px-3 py-1 rounded-full text-sm">
                          {item.preparationTime}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="text-yellow-400">★ {item.rating}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-orange-400">${item.price}</span>
                        {cartItem ? (
                          <button className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center gap-2 cursor-default" disabled>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Added{cartItem.quantity > 1 && ` (${cartItem.quantity})`}
                          </button>
                        ) : (
                          <button className="bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition-colors" onClick={() => addToCart(item)}>
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl overflow-hidden">
          <div className="p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Early Bird Special!</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get 20% off on all breakfast items when you order before 9 AM.
              Perfect start to your day with our delicious morning treats.
            </p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakFastCategory;
