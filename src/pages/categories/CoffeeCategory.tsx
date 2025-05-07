import { useState } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";

const CoffeeCategory = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleOpenModal = (item) => {
    setSelectedCoffee(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCoffee(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedCoffee);
    handleCloseModal();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-stone-100 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extralight text-stone-800 mb-2 tracking-wide">Coffee Menu</h1>
          <p className="text-lg text-stone-500 font-light tracking-wider">
            A curated list of our finest coffee drinks.
          </p>
        </div>
        <div className="divide-y divide-stone-200">
          {categoryData.coffee.map((item) => (
            <div
              key={item.id}
              className="flex items-center py-6 gap-6 cursor-pointer hover:bg-yellow-100 transition"
              onClick={() => handleOpenModal(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full border-4 border-amber-100 shadow"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-stone-800">{item.name}</h2>
                  <span className="text-lg font-bold text-amber-700">${item.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-stone-400">{item.category}</span>
                  <span className="text-xs text-stone-400">{item.preparationTime}</span>
                </div>
                <p className="text-stone-500 mt-2">{item.description}</p>
              </div>
              <span className="ml-4 text-yellow-500 font-bold text-lg">{'★'.repeat(Math.round(item.rating))}</span>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedCoffee && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedCoffee.image}
                alt={selectedCoffee.name}
                className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-amber-100 shadow mb-4"
              />
              <h2 className="text-3xl font-bold text-center mb-2">{selectedCoffee.name}</h2>
              <div className="text-center text-stone-500 mb-2">{selectedCoffee.category} &bull; {selectedCoffee.preparationTime}</div>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-500 font-bold text-lg">{'★'.repeat(Math.round(selectedCoffee.rating))}</span>
              </div>
              <p className="text-center text-stone-700 mb-4">{selectedCoffee.description}</p>
              <div className="text-center text-2xl font-bold text-amber-700 mb-6">${selectedCoffee.price.toFixed(2)}</div>
              <button
                className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-amber-800 transition"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoffeeCategory;
