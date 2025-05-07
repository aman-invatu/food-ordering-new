import { useState } from "react";
import FoodItemCard from "@/components/FoodItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuItems } from "@/services/data";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = menuItems[activeTab].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600 mb-6">
          Discover our wide range of delicious foods prepared by expert chefs
        </p>

        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menu items..."
              className="w-full px-4 py-2 border rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-2.5">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="burger">Burgers</TabsTrigger>
          <TabsTrigger value="pizza">Pizza</TabsTrigger>
          <TabsTrigger value="biryani">Biryani</TabsTrigger>
          <TabsTrigger value="dessert">Desserts</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <FoodItemCard key={item.id} food={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found matching your search.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Menu;
