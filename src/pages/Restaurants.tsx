
import { useState } from "react";
import RestaurantCard from "@/components/RestaurantCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, MapPin, Settings } from "lucide-react";

const restaurants = [
  {
    id: "1",
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    rating: 4.8,
    categories: ["Burgers", "Fast Food"],
    deliveryTime: "25 MINS",
    price: "$15 FOR TWO",
    promotion: "60% off | Use WELCOMEBACK",
  },
  {
    id: "2",
    name: "Pizza Paradise",
    image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    rating: 4.5,
    categories: ["Pizza", "Italian"],
    deliveryTime: "35 MINS",
    price: "$20 FOR TWO",
    promotion: "60% off | Use WELCOMEBACK",
  },
  {
    id: "3",
    name: "Taco Town",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFjb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4.7,
    categories: ["Mexican", "Fast Food"],
    deliveryTime: "30 MINS",
    price: "$18 FOR TWO",
    promotion: "60% off | Use WELCOMEBACK",
  },
  {
    id: "4",
    name: "Sushi Spot",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4.9,
    categories: ["Japanese", "Sushi"],
    deliveryTime: "40 MINS",
    price: "$25 FOR TWO",
    promotion: "60% off | Use WELCOMEBACK",
  },
  {
    id: "5",
    name: "Pasta Place",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4.6,
    categories: ["Italian", "Pasta"],
    deliveryTime: "35 MINS",
    price: "$22 FOR TWO",
    promotion: "50% off | Use WELCOME50",
  },
  {
    id: "6",
    name: "Noodle House",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4.8,
    categories: ["Asian", "Noodles"],
    deliveryTime: "30 MINS",
    price: "$18 FOR TWO",
    promotion: "40% off | Use NOODLE40",
  },
  {
    id: "7",
    name: "Curry Corner",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    categories: ["Indian", "Curry"],
    deliveryTime: "40 MINS",
    price: "$20 FOR TWO",
    promotion: "30% off | Use SPICY30",
  },
  {
    id: "8",
    name: "Breakfast Bar",
    image: "https://images.unsplash.com/photo-1608039790184-c0aa67827720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0JTIwcGxhdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    rating: 4.6,
    categories: ["Breakfast", "Coffee"],
    deliveryTime: "25 MINS",
    price: "$15 FOR TWO",
    promotion: "Buy 1 Get 1 Free",
  },
];

const cuisineFilters = [
  "All",
  "Burgers",
  "Pizza",
  "Sushi",
  "Mexican",
  "Italian",
  "Indian",
  "Asian",
  "Breakfast",
];

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
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Restaurants Near You</h1>
      <p className="text-gray-600 mb-6">
        Explore local restaurants that deliver to your doorstep
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search for restaurants, cuisines, dishes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="flex gap-2">
            <MapPin className="h-4 w-4" />
            <span>Location</span>
          </Button>
          
          <Button variant="outline" className="flex gap-2">
            <Settings className="h-4 w-4" />
            <span>Filters</span>
          </Button>
        </div>
      </div>
      
      {/* Cuisine Filters */}
      <div className="overflow-x-auto pb-4 mb-6">
        <div className="flex space-x-2 min-w-max">
          {cuisineFilters.map((cuisine) => (
            <button
              key={cuisine}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCuisine === cuisine
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCuisine(cuisine)}
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
            <RestaurantCard key={restaurant.id} {...restaurant} />
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
