
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categoryData } from "@/services/data";

const PickleCategory = () => {
  const [selectedPickle, setSelectedPickle] = useState(null);
  const { addToCart } = useCart();

  // Using starters data as a base for pickle items
  const pickleItems = categoryData.starters.map((item, index) => ({
    ...item,
    id: `pickle-${index}`,
    name: `${["Mango", "Lemon", "Mixed", "Chili", "Garlic", "Carrot", "Ginger"][index % 7]} Pickle`,
    description: `Authentic homemade ${["mango", "lemon", "mixed vegetable", "chili", "garlic", "carrot", "ginger"][index % 7]} pickle made with traditional spices and recipes.`,
    price: Math.floor(index % 3 + 1) * 2 + 4.99,
    category: "Pickle"
  }));

  const handlePickleClick = (pickle) => {
    setSelectedPickle(pickle);
  };

  const closeModal = () => {
    setSelectedPickle(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedPickle);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Artisanal Pickle Collection</h1>
          <p className="text-amber-800 text-lg max-w-2xl mx-auto">
            Discover our range of handcrafted artisanal pickles, made with traditional recipes and the finest ingredients
          </p>
        </div>

        {/* Banner Section */}
        <div className="relative h-80 mb-20 rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1627308595261-4a8d65800541?auto=format&fit=crop&w=2000&q=80"
            alt="Assorted Pickles" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Handcrafted with Love</h2>
          </div>
        </div>

        {/* Pickle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pickleItems.map((pickle) => (
            <div 
              key={pickle.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handlePickleClick(pickle)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={pickle.image} 
                  alt={pickle.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{pickle.name}</h3>
                <p className="text-amber-700 text-sm mb-4 line-clamp-2">{pickle.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-bold">${pickle.price.toFixed(2)}</span>
                  <span className="text-xs bg-amber-100 px-2 py-1 rounded-full text-amber-800">
                    {pickle.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for pickle details */}
      {selectedPickle && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden animate-fade-in">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={selectedPickle.image} 
                  alt={selectedPickle.name} 
                  className="w-full h-full object-cover max-h-96"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-amber-900">{selectedPickle.name}</h2>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mb-4">
                    {selectedPickle.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedPickle.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="text-amber-500">
                    {'★'.repeat(Math.round(selectedPickle.rating))}
                    <span className="text-gray-300">{'★'.repeat(5 - Math.round(selectedPickle.rating))}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({selectedPickle.rating.toFixed(1)})</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-amber-800">${selectedPickle.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Weight: 250g</div>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PickleCategory;
