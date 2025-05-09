import { useState, useRef } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mainCategories = [
  { key: "Pasta", image: categoryData.mainCourse[0]?.image },
  { key: "Pizza", image: categoryData.fastFood[0]?.image },
  { key: "Dessert", image: categoryData.drinks[0]?.image }, // Replace with dessert if available
];

const allCategories = [
  ...Object.keys(categoryData)
];

const Menu7 = () => {
  const [selectedCategory, setSelectedCategory] = useState(mainCategories[0].key);
  const sectionRefs = useRef({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  
  // Group products by category
  const groupedProducts = Object.entries(categoryData);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat.key);
    // Scroll to section
    const ref = sectionRefs.current[cat.key];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero Category Selector */}
      <div className="relative bg-white pb-16 pt-8">
        <div className="max-w-5xl mx-auto flex justify-center gap-16 items-end">
          {mainCategories.map((cat) => (
            <div key={cat.key} className="flex flex-col items-center cursor-pointer" onClick={() => handleCategoryClick(cat)}>
              <img
                src={cat.image}
                alt={cat.key}
                className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
                style={{ background: '#fff' }}
              />
              <div className="text-3xl font-extrabold uppercase text-red-600 tracking-wider" style={{ fontFamily: 'Oswald, sans-serif' }}>{cat.key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {groupedProducts.map(([category, products]) => (
          <div
            key={category}
            ref={el => (sectionRefs.current[category] = el)}
            className="mb-24"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <h2 className="text-6xl font-extrabold uppercase text-red-600 mb-4 md:mb-0" style={{ fontFamily: 'Oswald, sans-serif' }}>{category}</h2>
              <p className="text-lg text-gray-600 max-w-2xl md:text-right">
                Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-8 bg-white rounded-2xl shadow p-6 cursor-pointer group" onClick={() => handleProductClick(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-cover rounded-xl shadow-md flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="text-3xl font-extrabold uppercase text-black mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{product.name}</div>
                    <div className="text-lg text-gray-600 mb-2">{product.description}</div>
                  </div>
                  {/* Floating Cart Button */}
                  <button
                    className="opacity-0 group-hover:opacity-100 bg-white/80 border border-amber-600 text-amber-700 rounded-lg p-3 shadow-lg transition-all duration-300"
                    style={{ backdropFilter: 'blur(4px)' }}
                    onClick={e => { e.stopPropagation(); handleProductClick(product); }}
                  >
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Craft Your Own Section */}
        <div className="mb-24">
          <h2 className="text-6xl font-extrabold uppercase text-red-600 mb-8" style={{ fontFamily: 'Oswald, sans-serif' }}>Craft Your Own</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="text-red-600 font-bold text-lg mb-2">STEP 1</div>
                <div className="text-3xl font-extrabold mb-2">CHOOSE YOUR SIZE</div>
                <div className="text-lg">8", 12", 14", 18"</div>
              </div>
              <div>
                <div className="text-red-600 font-bold text-lg mb-2">STEP 2</div>
                <div className="text-3xl font-extrabold mb-2">CHOOSE YOUR SAUCE</div>
                <div className="text-lg">MARINARA, BBQ, SPICY BBQ, OIL, ALFREDO, OR HOT SAUCE</div>
              </div>
            </div>
            <div>
              <div className="text-red-600 font-bold text-lg mb-2">STEP 3</div>
              <div className="text-3xl font-extrabold mb-2">CHOOSE YOUR TOPPING</div>
              <div className="grid grid-cols-2 gap-4">
                <ul className="list-disc ml-6 text-lg">
                  <li>Extra Mozzarella</li>
                  <li>Canadian Bacon</li>
                  <li>Sliced Sausage</li>
                  <li>Sun-Dried Tomatoes</li>
                  <li>Roasted Peppers</li>
                  <li>Ricotta Cheese</li>
                  <li>Goat Cheese</li>
                  <li>Prosciutto di Parma</li>
                </ul>
                <ul className="list-disc ml-6 text-lg">
                  <li>Fresh Basil</li>
                  <li>Bell Peppers</li>
                  <li>Caramelized Onions</li>
                  <li>Feta Cheese</li>
                  <li>Italian Beef</li>
                  <li>Fresh Mozzarella</li>
                  <li>Portabella Mushrooms</li>
                  <li>Fresh Arugula</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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

export default Menu7;
