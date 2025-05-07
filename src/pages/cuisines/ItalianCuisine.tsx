import { useState } from "react";
import { cuisineData } from "@/services/data";
import ProductDialog from "@/components/products/ProductDialog";

const italianItems = cuisineData.italian.map(item => ({
  ...item,
  imageUrl: item.image,
}));

const ItalianCuisine = () => {
  const [selected, setSelected] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRowClick = (item) => {
    setSelected(item);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-56 md:h-64 flex items-center justify-center mb-10">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3"
          alt="Italian Cuisine Hero"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">Italian Cuisine</h1>
          <p className="text-lg md:text-2xl font-light drop-shadow-md">Enjoy the taste of Italy with our classic dishes</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Minimalist List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-6 px-4">
        {italianItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer p-4 group"
            onClick={() => handleRowClick(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-gray-800 truncate">{item.name}</h3>
                <span className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm">€{item.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
            </div>
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

export default ItalianCuisine;
