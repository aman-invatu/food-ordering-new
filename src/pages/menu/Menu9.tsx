import { useState } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionImages = {
  "Main Dishes": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  Sides: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
  Appetizers: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3",
  Desserts: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
};

const sections = [
  { key: "mainCourse", label: "Main Dishes", image: sectionImages["Main Dishes"] },
  { key: "starters", label: "Appetizers", image: sectionImages["Appetizers"] },
  { key: "fastFood", label: "Sides", image: sectionImages["Sides"] },
  { key: "drinks", label: "Desserts", image: sectionImages["Desserts"] },
];

const Menu8 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

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
    <div className="min-h-screen bg-[#101718] pb-24">
      {/* Hero Card */}
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <div className="bg-[#162124] rounded-2xl p-12 mb-16 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-serif font-bold text-white mb-6">Our Menu9</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Figma ipsum component variant main layer. Asset bullet project prototype draft main. Content vertical figjam slice pixel undo bold draft ipsum underline.
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-24">
        {sections.map((section, idx) => {
          const products = categoryData[section.key] || [];
          return (
            <div key={section.key} className="flex flex-col md:flex-row md:items-start gap-12">
              {/* Section Image */}
              <div className="md:w-1/2 flex-shrink-0 flex justify-center items-center">
                <img
                  src={section.image}
                  alt={section.label}
                  className="rounded-2xl w-full max-w-md h-96 object-cover shadow-lg"
                />
              </div>
              {/* Menu Items */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-5xl font-serif font-bold text-white mb-8">{section.label}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {products.map((item) => (
                    <div
                      key={item.id}
                      className="mb-6 cursor-pointer group"
                      onClick={() => handleProductClick(item)}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-2xl font-serif font-semibold text-white">{item.name}</span>
                        <span className="text-2xl font-serif font-bold text-white">${item.price}</span>
                      </div>
                      <div className="text-gray-300 text-lg font-light mb-2">{item.description}</div>
                      {/* Floating Cart Button */}
                      <button
                        className="opacity-0 group-hover:opacity-100 bg-white/80 border border-amber-600 text-amber-700 rounded-lg p-2 shadow-lg transition-all duration-300"
                        style={{ backdropFilter: 'blur(4px)' }}
                        onClick={e => { e.stopPropagation(); handleProductClick(item); }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium rounded-xl transition-colors text-lg"
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

export default Menu8;
