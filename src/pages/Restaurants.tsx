import { useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, MapPin, Settings, SlidersHorizontal } from "lucide-react";
import { restaurants, cuisineFilters } from "@/services/data";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCuisine, setActiveCuisine] = useState("All");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) || 
      restaurant.categories.some((category) => 
        category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesCuisine = activeCuisine === "All" || 
      restaurant.categories.some((category) => category === activeCuisine);
    
    return matchesSearch && matchesCuisine;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Restaurants Near You</h1>
      <p className="text-gray-600 mb-6">
        Explore local restaurants that deliver to your doorstep
      </p>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for restaurants and cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </Button>
        </div>

        {/* Cuisine Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {cuisineFilters.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setActiveCuisine(cuisine)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCuisine === cuisine
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs className="mb-6" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-transparent h-auto border-b w-full flex justify-start">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 text-base"
          >
            All Restaurants
          </TabsTrigger>
          <TabsTrigger 
            value="popular" 
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 text-base"
          >
            Popular
          </TabsTrigger>
          <TabsTrigger 
            value="rating" 
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 text-base"
          >
            Highest Rated
          </TabsTrigger>
          <TabsTrigger 
            value="delivery" 
            className="data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none h-10 text-base"
          >
            Fastest Delivery
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      {/* Results */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              rating={restaurant.rating}
              categories={restaurant.categories}
              deliveryTime={restaurant.deliveryTime}
              price={restaurant.price}
              promotion={restaurant.promotion}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
          <p className="text-gray-500">
            Try adjusting your search or filters to find what you're looking for
          </p>
        </div>
      )}
    </div>
  );
};

export default Restaurants;
