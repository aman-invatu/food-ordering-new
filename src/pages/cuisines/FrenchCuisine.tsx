import { useState } from "react";
import { cuisineData } from "@/services/data";
import ProductDialog from "@/components/products/ProductDialog";

const frenchItems = cuisineData.french.map(item => ({
  ...item,
  imageUrl: item.image,
}));

const FrenchCuisine = () => {
  const [selected, setSelected] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageClick = (item) => {
    setSelected(item);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 flex items-center justify-center mb-12">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3"
          alt="French Cuisine Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">French Cuisine</h1>
          <p className="text-lg md:text-2xl font-light drop-shadow-md">Savor the elegance and flavor of classic French dishes</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Horizontal List of Large Images */}
      <div className="max-w-4xl mx-auto flex flex-col gap-10 px-4">
        {frenchItems.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => handleImageClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{item.name}</h3>
                <span className="bg-white/80 text-gray-900 font-semibold px-3 py-1 rounded-full text-base shadow">€{item.price.toFixed(2)}</span>
              </div>
              <p className="text-white text-sm md:text-base max-w-2xl drop-shadow-md line-clamp-2">{item.description}</p>
            </div>
            <div className="absolute inset-0 transition-opacity duration-200 bg-black/10 opacity-0 group-hover:opacity-20" />
          </div>
        ))}
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

export default FrenchCuisine;
