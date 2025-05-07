import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { restaurants, menuItems } from "@/services/data";
import FoodItemCard from "@/components/FoodItemCard";
import { Badge } from "@/components/ui/badge";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Find the restaurant by id
  const restaurant = restaurants.find(r => r.id === id) || restaurants[0];

  // Get all menu items
  const allMenuItems = menuItems.all;

  const filteredItems = allMenuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(allMenuItems.map(item => item.category.toLowerCase()))];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 font-semibold">{restaurant.rating}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{restaurant.price}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {restaurant.categories.map((category) => (
                <span
                  key={category}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">Menu</h2>
          <div className="w-full md:w-64">
            <Input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <FoodItemCard key={item.id} food={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">No items found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
