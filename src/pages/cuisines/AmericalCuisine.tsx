import { useState } from "react";
import { cuisineData } from "@/services/data";
import ProductDialog from "@/components/products/ProductDialog";

const americanItems = cuisineData.american.map(item => ({
  ...item,
  imageUrl: item.image,
}));

const AmericanCuisine = () => {
  const [selected, setSelected] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageClick = (item) => {
    setSelected(item);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">American Cuisine</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl px-4">
            Experience the authentic taste of America with our selection of classic dishes
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-6xl mx-auto px-2">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {americanItems.map((item) => (
            <div
              key={item.id}
              className="relative mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => handleImageClick(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ minHeight: 220, maxHeight: 340, objectFit: 'cover' }}
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 px-4 py-2 rounded text-white font-bold text-lg shadow-lg">
                {item.name}
                {/* Optionally add Arabic or category here */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🍔</div>
            <h3 className="text-xl font-bold mb-2">Authentic Taste</h3>
            <p className="text-gray-600">Experience the true flavors of American cuisine</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Made with the finest ingredients</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable delivery service</p>
          </div>
        </div>
      </div>

      {/* Product Dialog */}
      {selected && (
        <ProductDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          product={{
            id: selected.id,
            name: selected.name,
            description: selected.description,
            price: selected.price,
            imageUrl: selected.imageUrl,
          }}
        />
      )}
    </div>
  );
};

export default AmericanCuisine;
