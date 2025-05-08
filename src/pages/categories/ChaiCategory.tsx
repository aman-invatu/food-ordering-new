import { useState } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";

const ChaiCategory = () => {
  const [selectedChai, setSelectedChai] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleOpenModal = (item) => {
    setSelectedChai(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedChai(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedChai);
    handleCloseModal();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-light text-amber-900 mb-4 tracking-wide">Chai Collection</h1>
          <p className="text-xl text-amber-700 font-light tracking-wider">
            Discover our aromatic and flavorful chai selections
          </p>
        </div>

        {/* Featured Image */}
        <div className="w-full h-[400px] mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=2000&q=80"
            alt="Featured Chai"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.chai.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleOpenModal(item)}
            >
              <div className="relative w-full h-72">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-100 px-4 py-2 rounded-full">
                  <span className="text-amber-800 font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-amber-100/90 px-3 py-1 rounded-full">
                  <span className="text-amber-800 text-sm">{item.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-2xl font-semibold text-amber-900">{item.name}</h2>
                  <span className="text-amber-500 font-bold text-lg">{'★'.repeat(Math.round(item.rating))}</span>
                </div>
                <p className="text-amber-800/80 mb-3">{item.description}</p>
                <div className="flex items-center text-sm text-amber-700">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.preparationTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {showModal && selectedChai && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 text-3xl"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <img
                    src={selectedChai.image}
                    alt={selectedChai.name}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold text-amber-900 mb-3">{selectedChai.name}</h2>
                  <div className="flex items-center gap-4 text-amber-700 mb-4">
                    <span className="text-lg bg-amber-100 px-3 py-1 rounded-full">{selectedChai.category}</span>
                    <span className="flex items-center text-lg">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedChai.preparationTime}
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-amber-500 font-bold text-2xl">{'★'.repeat(Math.round(selectedChai.rating))}</span>
                  </div>
                  <p className="text-amber-800/80 text-lg mb-6">{selectedChai.description}</p>
                  <div className="text-3xl font-bold text-amber-700 mb-8">${selectedChai.price.toFixed(2)}</div>
                  <button
                    className="w-full bg-amber-700 text-white py-4 rounded-xl font-semibold text-xl hover:bg-amber-800 transition-colors"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChaiCategory;
