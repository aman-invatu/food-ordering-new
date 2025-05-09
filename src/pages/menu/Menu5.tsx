import { useState } from "react";
import { categoryData } from "@/services/data";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Share2, Clock, Utensils, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const restaurantInfo = {
  name: "Spice Hut Indian Restaurant",
  address: "2036 2ND AVE, NEW YORK, NY 10029",
  open: true,
  tags: ["North Indian", "Chinese", "Fast Food", "South Indian"],
  rating: 3.1,
  ratingsCount: 23,
  reviewsCount: 91,
  deliveryTime: "25–35 min",
  logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80", // Replace with your logo path
  coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
};

const categories = Object.keys(categoryData).map((key) => ({
  key,
  label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
  count: categoryData[key].length,
  image: categoryData[key][0]?.image || ""
}));

const Menu5 = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[320px] flex items-end">
        <img
          src={restaurantInfo.coverImage}
          alt="Restaurant Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex items-end w-full max-w-7xl mx-auto px-8 pb-8">
          <img
            src={restaurantInfo.logo}
            alt="Logo"
            className="w-24 h-24 rounded-xl bg-white p-2 shadow-lg mr-6"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">{restaurantInfo.name}</h1>
            <div className="flex items-center text-white/90 mb-2">
              <span className="mr-4">📍 {restaurantInfo.address}</span>
              {restaurantInfo.open && <span className="bg-green-600 text-xs px-2 py-1 rounded ml-2">OPEN</span>}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-white/80 text-sm mb-2">
              {restaurantInfo.tags.map((tag) => (
                <span key={tag} className="bg-white/20 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-2">
              <span className="bg-orange-500 text-white px-2 py-1 rounded font-bold">★ {restaurantInfo.rating}</span>
              <span className="text-white/90">{restaurantInfo.ratingsCount} Ratings</span>
              <span className="text-white/90">💬 {restaurantInfo.reviewsCount} reviews</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded flex items-center ml-4">⏱ {restaurantInfo.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Explorer */}
      <div className="max-w-7xl mx-auto px-8 mt-8">
        <div className="flex overflow-x-auto gap-4 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`min-w-[160px] flex flex-col items-center border rounded-xl p-3 shadow-sm transition-all ${
                activeCategory === cat.key
                  ? "border-amber-500 bg-amber-50"
                  : "border-gray-200 bg-white hover:bg-gray-100"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="w-16 h-16 object-cover rounded-lg mb-2"
              />
              <span className="font-semibold text-gray-800 mb-1">{cat.label}</span>
              <span className="text-xs text-gray-500">{cat.count} ITEMS</span>
            </button>
          ))}
        </div>
        </div>

      {/* Menu Grid - Custom Card Design */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categoryData[activeCategory].map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition-shadow relative flex flex-col cursor-pointer group"
              onClick={() => handleProductClick(product)}
            >
              {/* Price Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-md text-lg shadow">${product.price.toFixed(2)}</span>
              </div>
              {/* Icon Stack */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-3 items-end">
                <button className="bg-white rounded-full shadow p-2 hover:bg-orange-100 transition" onClick={e => e.stopPropagation()}><Heart className="w-5 h-5 text-orange-500" /></button>
                <button className="bg-white rounded-full shadow p-2 hover:bg-orange-100 transition" onClick={e => { e.stopPropagation(); handleProductClick(product); }}><ShoppingCart className="w-5 h-5 text-orange-500" /></button>
                {/* <button className="bg-white rounded-full shadow p-2 hover:bg-orange-100 transition" onClick={e => e.stopPropagation()}><Share2 className="w-5 h-5 text-orange-500" /></button> */}
              </div>
              {/* Product Image */}
              <div className="flex-1 flex items-center justify-center p-6 pb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-48 object-contain drop-shadow-lg transition-transform duration-500 group-hover:translate-x-4 group-hover:-rotate-3"
                />
              </div>
              {/* Product Name */}
              <div className="px-6 pt-2 pb-4">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-6 text-orange-600 text-sm font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {product.preparationTime || "30 Minutes"}</span>
                  <span className="flex items-center gap-1"><Utensils className="w-4 h-4" /> {product.category || "Food"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

export default Menu5;
