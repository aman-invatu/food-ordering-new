import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { paneerData } from "@/services/data";
import { useCart } from "@/context/CartContext";
import { ChevronRight, Star, Clock, X } from "lucide-react";

const PaneerCategory = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useCart();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedItem);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="pt-24 px-8">
        {/* Heading Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-serif mb-6">Paneer Delights</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover our exquisite collection of paneer dishes, where traditional flavors meet modern culinary artistry. 
            Each dish is crafted with premium paneer and authentic spices to create a memorable dining experience.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 gap-8 mb-24">
          {paneerData.map((item) => (
            <div 
              key={item.id}
              className="break-inside-avoid mb-8 group cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-white">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        {item.rating}
                      </div>
                    </div>
                    <h2 className="text-white text-2xl font-serif mb-2">{item.name}</h2>
                    <p className="text-gray-200 text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white text-2xl">${item.price}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item);
                        }}
                        className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div className="mt-4">
                <h3 className="text-xl font-serif">{item.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                  <span>{item.category}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.preparationTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="relative h-[80vh] rounded-3xl overflow-hidden">
            <img 
              src={paneerData[0].image}
              alt="Featured dish"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 left-16 max-w-xl">
              <span className="text-orange-400 text-sm tracking-widest uppercase mb-4 block">Featured Dish</span>
              <h2 className="text-white text-6xl font-serif mb-6">{paneerData[0].name}</h2>
              <p className="text-gray-200 text-lg mb-8">{paneerData[0].description}</p>
              <button 
                onClick={() => handleItemClick(paneerData[0])}
                className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                Explore Menu <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Taste of Excellence. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  className="w-full h-full object-cover rounded-xl" 
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-serif mb-4">{selectedItem.name}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                    {selectedItem.category}
                  </span>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    {selectedItem.rating}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedItem.preparationTime}
                  </div>
                </div>
                <ScrollArea className="h-28 mb-6">
                  <p className="text-gray-600">{selectedItem.description}</p>
                </ScrollArea>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-serif">${selectedItem.price}</span>
                  <Button 
                    onClick={handleAddToCart}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaneerCategory;
