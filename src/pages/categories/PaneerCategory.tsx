
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";

const PaneerCategory = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useCart();

  // For demo purposes, creating paneer dishes from main course data
  const paneerItems = categoryData.mainCourse.map((item, index) => ({
    ...item,
    id: `paneer-${index}`,
    name: `${["Butter", "Kadai", "Palak", "Shahi", "Tikka", "Matar"][index % 6]} Paneer`,
    description: `Rich and creamy ${["butter", "kadai", "palak", "shahi", "tikka", "matar"][index % 6]} gravy with soft paneer cubes. Served with rice or naan.`,
    price: Math.floor(index % 3 + 1) * 3 + 8.99
  }));

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedItem);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-light text-amber-900 mb-6">Paneer Specialties</h1>
          <p className="text-lg text-amber-800/70">
            Explore our delicious selection of authentic paneer dishes, made with fresh ingredients and traditional recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {paneerItems.slice(0, 9).map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleItemClick(item)}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-amber-900">{item.name}</h3>
                  <span className="text-amber-600 font-bold">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-amber-700/70 line-clamp-2 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-amber-500">
                    {'★'.repeat(Math.ceil(item.rating))}
                    <span className="text-amber-300">{'★'.repeat(5 - Math.ceil(item.rating))}</span>
                  </div>
                  <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">{item.preparationTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected item */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full relative animate-fade-in">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl z-10"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name}
                    className="w-full h-full object-cover max-h-[500px]" 
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-3xl font-bold text-amber-900 mb-2">{selectedItem.name}</h2>
                  <div className="mb-4 flex items-center">
                    <span className="text-amber-500 text-lg mr-2">
                      {'★'.repeat(Math.ceil(selectedItem.rating))}
                      <span className="text-amber-200">{'★'.repeat(5 - Math.ceil(selectedItem.rating))}</span>
                    </span>
                    <span className="text-gray-500">({selectedItem.rating.toFixed(1)})</span>
                  </div>
                  <ScrollArea className="h-28 mb-6">
                    <p className="text-gray-700">{selectedItem.description}</p>
                  </ScrollArea>
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-xl font-bold text-amber-800">${selectedItem.price.toFixed(2)}</div>
                    <div className="text-sm text-gray-500">Preparation: {selectedItem.preparationTime}</div>
                  </div>
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-semibold text-lg"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaneerCategory;
