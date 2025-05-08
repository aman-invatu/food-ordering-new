
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categoryData } from "@/services/data";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const SaladCategory = () => {
  const [selectedSalad, setSelectedSalad] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const { addToCart } = useCart();

  // Using starters data as a base for salad items
  const saladItems = categoryData.starters.map((item, index) => ({
    ...item,
    id: `salad-${index}`,
    name: `${["Garden", "Greek", "Caesar", "Mediterranean", "Chicken", "Fruit", "Quinoa"][index % 7]} Salad`,
    description: `Fresh and healthy ${["garden", "greek", "caesar", "mediterranean", "chicken", "fruit", "quinoa"][index % 7]} salad with ${["crisp vegetables", "feta cheese", "grilled chicken", "olives and feta", "grilled chicken breast", "seasonal fruits", "avocado and greens"][index % 7]}.`,
    price: Math.floor(index % 3 + 1) * 2 + 6.99,
    category: "Salad",
    nutritionalInfo: {
      calories: Math.floor(Math.random() * 150) + 100,
      protein: Math.floor(Math.random() * 10) + 5,
      carbs: Math.floor(Math.random() * 15) + 5,
      fat: Math.floor(Math.random() * 8) + 2
    }
  }));

  const handleSaladClick = (salad) => {
    setSelectedSalad(salad);
  };

  const closeModal = () => {
    setSelectedSalad(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedSalad);
    closeModal();
  };

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-green-900 mb-4">Fresh Salad Bar</h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Explore our collection of fresh, nutritious salads prepared with the finest ingredients
          </p>
        </div>

        {/* Featured Salad */}
        <div className="relative rounded-2xl overflow-hidden h-96 mb-16">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=2000&q=80" 
            alt="Featured Salad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white p-8 md:p-16 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthy & Delicious</h2>
              <p className="text-white/80 mb-6">Our salads are prepared fresh daily using locally-sourced, seasonal ingredients</p>
              <Button
                onClick={() => handleSaladClick(saladItems[0])}
                className="bg-green-600 hover:bg-green-700 text-white font-medium"
              >
                Order Featured Salad
              </Button>
            </div>
          </div>
        </div>

        {/* Salad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {saladItems.map((salad) => (
            <div 
              key={salad.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleSaladClick(salad)}
            >
              <div className="relative h-48">
                {!imagesLoaded[salad.id] && (
                  <div className="absolute inset-0">
                    <Skeleton className="w-full h-full" />
                  </div>
                )}
                <img 
                  src={salad.image} 
                  alt={salad.name}
                  className={`w-full h-full object-cover ${!imagesLoaded[salad.id] ? 'invisible' : ''}`}
                  onLoad={() => handleImageLoad(salad.id)}
                />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-green-700">
                  {salad.nutritionalInfo.calories} cal
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-green-800">{salad.name}</h3>
                  <span className="font-bold text-green-600">${salad.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{salad.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex gap-2">
                    <span>P: {salad.nutritionalInfo.protein}g</span>
                    <span>C: {salad.nutritionalInfo.carbs}g</span>
                    <span>F: {salad.nutritionalInfo.fat}g</span>
                  </div>
                  <div className="text-green-500">
                    {'★'.repeat(Math.round(salad.rating))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for salad details */}
      {selectedSalad && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden animate-fade-in">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-80 md:h-auto">
                <img 
                  src={selectedSalad.image} 
                  alt={selectedSalad.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 md:w-1/2">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-green-800">{selectedSalad.name}</h2>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-4 mb-6">
                  <p className="text-gray-600">{selectedSalad.description}</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="text-green-800 font-medium mb-2">Nutritional Information</h3>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-white p-2 rounded-md">
                      <div className="text-green-700 font-bold">{selectedSalad.nutritionalInfo.calories}</div>
                      <div className="text-xs text-gray-500">Calories</div>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                      <div className="text-green-700 font-bold">{selectedSalad.nutritionalInfo.protein}g</div>
                      <div className="text-xs text-gray-500">Protein</div>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                      <div className="text-green-700 font-bold">{selectedSalad.nutritionalInfo.carbs}g</div>
                      <div className="text-xs text-gray-500">Carbs</div>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                      <div className="text-green-700 font-bold">{selectedSalad.nutritionalInfo.fat}g</div>
                      <div className="text-xs text-gray-500">Fat</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-green-700">${selectedSalad.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Prep time: {selectedSalad.preparationTime}</div>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
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

export default SaladCategory;
