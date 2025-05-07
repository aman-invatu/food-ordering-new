
import { useState } from "react";
import { FoodItem } from "@/components/FoodItemCard";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface FoodCategoryTemplateProps {
  title: string;
  description: string;
  items: FoodItem[];
  headerImage?: string;
}

const FoodCategoryTemplate: React.FC<FoodCategoryTemplateProps> = ({
  title,
  description,
  items,
  headerImage,
}) => {
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  // Sort items based on selected criteria
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // Default sort by popularity
  });

  // Filter items by price range
  const filteredItems = sortedItems.filter(
    (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Category Header */}
      <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
        <img 
          src={headerImage || "https://images.unsplash.com/photo-1493770348161-369560ae357d"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-gray-200 max-w-2xl">{description}</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-64 space-y-6">
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="font-semibold text-lg">Filters</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setFilterVisible(!filterVisible)}
              className="flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              {filterVisible ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          <div className={`space-y-6 ${filterVisible ? 'block' : 'hidden lg:block'}`}>
            <div>
              <h3 className="font-medium mb-3">Sort By</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="popularity" 
                    name="sort" 
                    checked={sortBy === "popularity"}
                    onChange={() => setSortBy("popularity")}
                    className="mr-2" 
                  />
                  <label htmlFor="popularity">Popularity</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="price-low" 
                    name="sort" 
                    checked={sortBy === "price-low"}
                    onChange={() => setSortBy("price-low")}
                    className="mr-2" 
                  />
                  <label htmlFor="price-low">Price: Low to High</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="price-high" 
                    name="sort" 
                    checked={sortBy === "price-high"}
                    onChange={() => setSortBy("price-high")}
                    className="mr-2" 
                  />
                  <label htmlFor="price-high">Price: High to Low</label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="rating" 
                    name="sort" 
                    checked={sortBy === "rating"}
                    onChange={() => setSortBy("rating")}
                    className="mr-2" 
                  />
                  <label htmlFor="rating">Rating</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <div className="flex justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={priceRange[0]} 
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full mb-4"
                />
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={priceRange[1]} 
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>

            <Button
              onClick={() => {
                setSortBy("popularity");
                setPriceRange([0, 100]);
              }}
              variant="outline"
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-yellow-500 text-white">
                        <Star className="h-3 w-3 mr-1 fill-current" />
                        {item.rating}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-blue-500 text-white">
                        {item.preparationTime}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary-600 text-white"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <SlidersHorizontal className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold mb-2">No items found</h2>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters to find what you're looking for
              </p>
              <Button 
                onClick={() => {
                  setSortBy("popularity");
                  setPriceRange([0, 100]);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCategoryTemplate;
