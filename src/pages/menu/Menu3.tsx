import { useState } from "react";
import { categoryData } from "@/services/data";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X, Star, Clock } from "lucide-react";

const Menu3 = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  
  const allProducts = [
    ...categoryData.fastFood,
    ...categoryData.drinks,
  ];

  const categories = ["all", "fast food", "drinks"];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Enhanced Hero Section with Multiple Background Images */}
      <div className="relative h-[70vh] overflow-hidden">
        {/* Main Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('/images/menu-hero.jpg')",
            transform: "scale(1.1)"
          }}
        >
          {/* Overlay Patterns */}
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900">
            {/* Floating Elements */}
            <div className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
              />
            </div>

            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                >
                  Our Menu
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl text-gray-300"
                >
                  Experience culinary excellence
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-gray-800 rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 left-4 right-4 flex justify-between items-end"
                >
                  <motion.h3 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-white"
                  >
                    {product.name}
                  </motion.h3>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold"
                  >
                    ${product.price}
                  </motion.span>
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="px-3 py-1 bg-gray-700 text-purple-400 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </motion.div>
                
                <motion.p 
                  whileHover={{ scale: 1.02 }}
                  className="text-gray-400"
                >
                  {product.description}
                </motion.p>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add to Order
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20 bg-gray-800 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold text-white">No items found</h3>
            <p className="text-gray-400 mt-2">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden"
          >
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
                
                <div className="flex items-center mb-4">
                  <div className="text-yellow-500">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-400 ml-2">(5.0)</span>
                </div>
                
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
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Menu3;
