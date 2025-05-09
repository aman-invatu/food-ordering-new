import { useState, useRef } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, X, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Menu10 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  const scrollRef = useRef(null);

  const categories = [
    {
      key: "mainCourse",
      label: "Main Course",
      icon: "🍖",
      color: "from-orange-500 to-red-500"
    },
    {
      key: "starters",
      label: "Starters",
      icon: "🥗",
      color: "from-green-500 to-emerald-500"
    },
    {
      key: "fastFood",
      label: "Fast Food",
      icon: "🍔",
      color: "from-yellow-500 to-amber-500"
    },
    {
      key: "drinks",
      label: "Drinks",
      icon: "🥤",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    closeModal();
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-7xl font-serif font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience culinary excellence with our carefully curated selection of dishes
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-[2000px] mx-auto px-4 py-16">
        {categories.map((category) => (
          <div key={category.key} className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-4xl font-serif font-bold">{category.label}</h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categoryData[category.key]?.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-80 bg-white/5 rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <Button
                      onClick={() => handleProductClick(item)}
                      className={`w-full bg-gradient-to-r ${category.color} text-white rounded-xl py-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1A1A1A] rounded-2xl max-w-4xl w-full overflow-hidden border border-white/10">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover max-h-96"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.8</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Most Popular</span>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{selectedProduct.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold">${selectedProduct.price}</div>
                  <div className="text-sm text-gray-400">Available Now</div>
                </div>
                <Button 
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium rounded-xl transition-colors text-lg"
                >
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu10; 