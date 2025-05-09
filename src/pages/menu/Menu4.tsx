import { categoryData } from "@/services/data";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

const sectionKeys = [
  { key: "fastFood", title: "Fast Food", description: "Choose your favorite fast food. Maecenas convallis eros a ante dignissim." },
  { key: "drinks", title: "Drinks", description: "Choose your favorite drink. Maecenas convallis eros a ante dignissim." },
  { key: "starters", title: "Starters", description: "Choose your favorite starter. Maecenas convallis eros a ante dignissim." },
  { key: "mainCourse", title: "Main Course", description: "Choose your favorite main course. Maecenas convallis eros a ante dignissim." },
  { key: "dessert", title: "Desserts", description: "Choose your favorite dessert. Maecenas convallis eros a ante dignissim." },
];

const Menu4 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const handleProductClick = (item) => {
    setSelectedProduct(item);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {sectionKeys.map((section) => {
        const items = categoryData[section.key] || [];
        if (!items.length) return null;
        const half = Math.ceil(items.length / 2);
        const leftItems = items.slice(0, half);
        const rightItems = items.slice(half);
        const heroImage = items[0]?.image || "";
        const startingFrom = Math.min(...items.map(i => i.price));
        return (
          <div key={section.key} className="mb-20">
            {/* Hero Card Section */}
            <div className="max-w-6xl mx-auto mb-12">
              <div className="relative rounded-[48px] overflow-hidden min-h-[350px] flex items-stretch">
                {/* Background image */}
                <img
                  src={heroImage}
                  alt={section.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col justify-center pl-12 py-12">
                  <h1 className="text-5xl font-serif font-bold text-white mb-4">{section.title}</h1>
                  <p className="text-lg text-white/90 max-w-xl">
                    {section.description}
          </p>
        </div>
                {/* Starting from badge */}
                <div className="relative z-10 flex flex-col justify-end items-end pr-12 py-12 w-1/3">
                  <span className="text-white text-lg mb-2 font-serif">Starting from</span>
                  <span className="bg-yellow-400 text-black font-bold text-3xl rounded-full px-8 py-4 shadow-lg">
                    ${startingFrom}
                  </span>
                </div>
              </div>
            </div>
            {/* Menu List Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left column */}
              <div className="space-y-10">
                {leftItems.map((item) => (
                  <div key={item.id} className="cursor-pointer group" onClick={() => handleProductClick(item)}>
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-3xl font-serif font-bold text-gray-900 flex-1 border-b border-gray-200 pb-1 group-hover:text-purple-700 transition-colors">{item.name}</h2>
                      <span className="text-2xl font-bold text-red-600 ml-6">${item.price}</span>
                    </div>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
              {/* Right column */}
              <div className="space-y-10">
                {rightItems.map((item) => (
                  <div key={item.id} className="cursor-pointer group" onClick={() => handleProductClick(item)}>
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-3xl font-serif font-bold text-gray-900 flex-1 border-b border-gray-200 pb-1 group-hover:text-purple-700 transition-colors">{item.name}</h2>
                      <span className="text-2xl font-bold text-red-600 ml-6">${item.price}</span>
                    </div>
                    <p className="text-gray-500 mt-2">{item.description}</p>
      </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden">
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
                  <h2 className="text-3xl font-bold text-white">{selectedProduct.name}</h2>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-purple-900/50 text-purple-300 text-sm px-3 py-1 rounded-full">
                    {selectedProduct.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 text-lg">{selectedProduct.description}</p>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold text-white">${selectedProduct.price}</div>
                  <div className="text-sm text-gray-400">Available Now</div>
                </div>
                <Button 
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-colors text-lg"
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

export default Menu4;
