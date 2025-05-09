import { useState } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Menu9 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  // Only drinks category
  const drinks = categoryData["drinks"] || [];

  // For the hero section, pick the first drink as the main image
  const heroDrink = drinks[0];

  // For the special recipe cards, pick the next three drinks (or repeat if not enough)
  const specialRecipes = drinks.slice(1, 4).length === 3 ? drinks.slice(1, 4) : Array(3).fill(drinks[1] || drinks[0]);

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

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 py-16 items-center">
        <div className="flex-1 flex justify-center">
          <img
            src={heroDrink?.image}
            alt={heroDrink?.name}
            className="rounded-2xl shadow-xl object-cover w-[400px] h-[400px]"
          />
        </div>
        <div className="flex-1">
          <div className="mb-2 text-pink-500 font-medium">About</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">Welcome to Resto</h1>
          <p className="mb-8 text-gray-700 max-w-xl">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <div>
            <h2 className="text-2xl font-bold mb-4 font-sans">Special Recipe</h2>
            <div className="flex gap-6">
              {specialRecipes.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-32 h-32 object-cover rounded-xl shadow-md mb-2"
                  />
                  <div className="text-pink-500 font-medium text-center">{item?.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Special Dishes/Drinks Section */}
      <div className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-12 font-sans">Special Drinks</h2>
        <div className="flex flex-col gap-20">
          {drinks.map((item, idx) => (
            <div key={item.id} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-12`}>
              <div className="flex-1 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-2xl shadow-xl object-cover w-[350px] h-[350px]"
                />
              </div>
              <div className="flex-1 max-w-xl">
                <div className="flex items-center mb-2">
                  <span className="text-4xl font-bold mr-4 font-sans">{(idx+1).toString().padStart(2, '0')}.</span>
                  <div className="flex-1 h-px bg-gray-400" />
                </div>
                <div className="mb-2 text-pink-500 text-xl font-medium font-sans">{item.name}</div>
                <div className="text-2xl font-bold mb-2 font-sans">{item.category}</div>
                <p className="mb-4 text-gray-700">{item.description}</p>
                <div className="text-2xl font-bold mb-4">${item.price}</div>
                <Button
                  onClick={() => handleProductClick(item)}
                  className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-md"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-200">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover max-h-[400px]"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="mb-2 text-pink-500 text-sm font-medium">{selectedProduct.category}</div>
                <p className="text-gray-700 mb-6 text-base">{selectedProduct.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-6">${selectedProduct.price}</div>
                <Button 
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-xl transition-all text-lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
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

export default Menu9; 