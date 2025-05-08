import { useState, useRef } from "react";
import { categoryData } from "@/services/data";
import { useCart } from "@/context/CartContext";

const LassiCategory = () => {
  const [selectedLassi, setSelectedLassi] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();
  const scrollRef = useRef(null);

  const handleOpenModal = (item) => {
    setSelectedLassi(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLassi(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedLassi);
    handleCloseModal();
  };

  const lassiItems = categoryData.drinks.filter(item => 
    item.name.toLowerCase().includes('lassi') || 
    item.category.toLowerCase().includes('lassi') ||
    item.description.toLowerCase().includes('lassi')
  );

  const displayItems = lassiItems.length > 0 ? lassiItems : categoryData.drinks.slice(0, 6);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560035285-64808ba47bda?auto=format&fit=crop&w=2000&q=80"
            alt="Lassi Collection"
            className="w-full h-full object-cover transform scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative h-full flex items-end pb-32 px-4">
          <div className="max-w-4xl">
            <h1 className="text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
              Artisanal Lassi
              <br />
              Collection
            </h1>
            <p className="text-2xl text-white/90 font-light max-w-2xl">
              Handcrafted with love, served with passion
            </p>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Featured Lassi</h2>
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[400px] cursor-pointer"
                  onClick={() => handleOpenModal(item)}
                >
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-white/90 mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">${item.price.toFixed(2)}</span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Masonry Grid Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Explore Our Collection</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-8 cursor-pointer"
              onClick={() => handleOpenModal(item)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-rose-600 font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.preparationTime}
                    </span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedLassi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full mx-4 overflow-hidden">
            <div className="relative">
              <button
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={selectedLassi.image}
                    alt={selectedLassi.name}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8">
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">{selectedLassi.name}</h2>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.round(selectedLassi.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg mb-6">{selectedLassi.description}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-rose-600">${selectedLassi.price.toFixed(2)}</span>
                      <span className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                        {selectedLassi.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Preparation Time: {selectedLassi.preparationTime}</span>
                    </div>

                    <button
                      className="w-full bg-rose-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-rose-700 transition-colors flex items-center justify-center space-x-2"
                      onClick={handleAddToCart}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LassiCategory;
