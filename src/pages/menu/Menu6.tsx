import { useState } from "react";
import { categoryData } from "@/services/data";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const getAllProducts = () => {
  // Flatten all products from selected categories
  return [
    ...categoryData.fastFood,
    ...categoryData.drinks,
    ...categoryData.starters,
    ...categoryData.mainCourse,
  ];
};

const topRated = getAllProducts().slice(0, 3); // You can sort by rating if needed
const menuGrid = getAllProducts().slice(0, 8); // Show 8 for demo, or all

const Menu6 = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const filteredMenu = menuGrid.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

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
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-1 flex flex-col gap-10">
          {/* Search Bar */}
          <form className="flex mb-8" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 text-lg"
            />
            <button type="submit" className="bg-amber-600 px-5 rounded-r-lg text-white font-bold">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button>
          </form>

          {/* Top Rated Dishes */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-serif text-gray-900" style={{ fontFamily: 'cursive' }}>Top Rated Dishes</h2>
            <div className="flex flex-col gap-6">
              {topRated.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow" />
                  <div>
                    <div className="font-bold text-lg text-gray-900 font-serif" style={{ fontFamily: 'cursive' }}>{item.name}</div>
                    <div className="text-gray-500 text-sm mb-1">{item.category || "Pork / Crab / Bread"}</div>
                    <div className="text-2xl font-bold text-amber-700" style={{ fontFamily: 'cursive' }}>${item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Table Card */}
          <div className="bg-[#f8f6f2] rounded-2xl shadow p-8 flex flex-col items-center text-center mt-8">
            <img src="/logo.svg" alt="RestaurEx" className="w-16 h-16 mb-4" />
            <div className="text-2xl font-bold mb-2 font-serif" style={{ fontFamily: 'cursive' }}>Book Your Table</div>
            <div className="text-gray-500 mb-4">that will be reserved for you</div>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80" alt="Fries" className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
            <button className="bg-black text-white px-6 py-2 rounded-full font-bold tracking-widest">BOOK NOW</button>
          </div>
        </div>

        {/* Right Column: Menu Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <div 
              key={item.id} 
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleProductClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Cart Button */}
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white/80 border border-amber-600 text-amber-700 rounded-lg p-3 shadow-lg transition-all duration-300"
                style={{ backdropFilter: 'blur(4px)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick(item);
                }}
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-serif text-2xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>{item.name}</div>
                  <div className="text-2xl font-bold text-amber-700" style={{ fontFamily: 'cursive' }}>${item.price}</div>
                </div>
                <div className="text-gray-500 mb-2">{item.description}</div>
              </div>
            </div>
          ))}
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

export default Menu6;
