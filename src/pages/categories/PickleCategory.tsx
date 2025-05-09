import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { pickleData } from "@/services/data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Clock, Star, ShoppingCart, X, ChevronRight, ChevronLeft } from "lucide-react";

const PickleCategory = () => {
  const [selectedPickle, setSelectedPickle] = useState(null);
  const { addToCart } = useCart();

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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=2000&q=80"
            alt="Pickle Collection" 
            className="w-full h-full object-cover transform scale-110 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif mb-6 tracking-tight animate-fade-in">
            Artisanal Pickles
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
            Discover our handcrafted collection of traditional pickles, made with authentic recipes and premium ingredients
          </p>
          <Button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg animate-fade-in-delay-2">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-amber-900">Featured Pickles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pickleData.slice(0, 3).map((pickle) => (
              <div 
                key={pickle.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={pickle.image} 
                    alt={pickle.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-amber-900">{pickle.name}</h3>
                    <span className="text-amber-600 font-bold text-xl">${pickle.price.toFixed(2)}</span>
                  </div>
                  <p className="text-amber-700 mb-4">{pickle.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-600">{pickle.preparationTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      <span className="text-amber-600">{pickle.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          {/* Category Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-amber-900 mb-4">Our Collection</h2>
            <p className="text-amber-700 max-w-2xl mx-auto">
              Explore our diverse range of handcrafted pickles, each made with traditional recipes and premium ingredients
            </p>
          </div>

          {/* Pure Gallery Grid, no card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pickleData.map((pickle) => (
              <div
                key={pickle.id}
                className="relative group cursor-pointer"
                onClick={() => handlePickleClick(pickle)}
              >
                <img
                  src={pickle.image}
                  alt={pickle.name}
                  className="w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Minimal Overlay, not a card */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between rounded-b-2xl">
                  <div>
                    <h3 className="text-white text-lg font-bold">{pickle.name}</h3>
                    <span className="text-amber-200 font-semibold">${pickle.price.toFixed(2)}</span>
                  </div>
                  <button
                    className="bg-amber-500 hover:bg-amber-600 text-white rounded-full p-2 ml-2 transition"
                    onClick={e => {
                      e.stopPropagation();
                      addToCart(pickle);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPickle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden animate-fade-in">
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
                  <h2 className="text-3xl font-bold text-amber-900">{selectedPickle.name}</h2>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                    {selectedPickle.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 text-lg">{selectedPickle.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="text-amber-500">
                    {'★'.repeat(Math.round(selectedPickle.rating))}
                    <span className="text-gray-300">{'★'.repeat(5 - Math.round(selectedPickle.rating))}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({selectedPickle.rating.toFixed(1)})</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold text-amber-800">${selectedPickle.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">Weight: 250g</div>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-xl transition-colors text-lg"
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

export default PickleCategory;
