import { useState } from "react";
import { cuisineData } from "@/services/data";
import ProductDialog from "@/components/products/ProductDialog";

const indianItems = cuisineData.indian.map(item => ({
  ...item,
  imageUrl: item.image,
}));

const IndianCuisine = () => {
  const [selected, setSelected] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageClick = (item) => {
    setSelected(item);
    setDialogOpen(true);
  };

  // Helper to chunk items for the alternating pattern
  const getGridItems = (items) => {
    const result = [];
    let i = 0;
    while (i < items.length) {
      // Full width
      result.push([items[i]]);
      i++;
      // Two half-width
      if (i < items.length) {
        const row = [items[i]];
        i++;
        if (i < items.length) {
          row.push(items[i]);
          i++;
        }
        result.push(row);
      }
    }
    return result;
  };

  const gridRows = getGridItems(indianItems);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-2 grid gap-4">
        {gridRows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={`w-full flex ${row.length === 1 ? '' : 'gap-4'}`}
          >
            {row.map((item, colIdx) => (
              <div
                key={item.id}
                className={`relative mb-4 cursor-pointer group ${row.length === 1 ? 'w-full' : 'w-1/2'}`}
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
                </div>
              </div>
            ))}
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

export default IndianCuisine;
