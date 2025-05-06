
import { useState } from "react";
import FoodItemCard, { FoodItem } from "@/components/FoodItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for food items
const menuItems: Record<string, FoodItem[]> = {
  all: [
    {
      id: "1",
      name: "Classic Margherita Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 12.99,
      description: "Fresh mozzarella, tomatoes, basil, olive oil, and our secret sauce on a thin crust.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Pizza"
    },
    {
      id: "2",
      name: "Double Cheeseburger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 9.99,
      description: "Two juicy beef patties with American cheese, lettuce, tomatoes, and our special sauce.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Burger"
    },
    {
      id: "3",
      name: "Chicken Biryani",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 14.99,
      description: "Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.",
      rating: 4.9,
      preparationTime: "25 mins",
      category: "Biryani"
    },
    {
      id: "4",
      name: "Chocolate Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 8.99,
      description: "Rich and moist chocolate cake with layers of chocolate ganache and frosting.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Dessert"
    },
    {
      id: "5",
      name: "Vegetable Salad Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      price: 10.99,
      description: "Fresh mixed greens, cherry tomatoes, cucumber, red onions, with balsamic dressing.",
      rating: 4.6,
      preparationTime: "5 mins",
      category: "Salad"
    },
    {
      id: "6",
      name: "Chicken Club Sandwich",
      image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      price: 11.99,
      description: "Grilled chicken breast, bacon, lettuce, tomato, and mayo on toasted bread.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Sandwich"
    },
    {
      id: "7",
      name: "Veggie Supreme Pizza",
      image: "https://images.unsplash.com/photo-1528490060256-c345efae4442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 13.99,
      description: "Bell peppers, mushrooms, onions, black olives, and mozzarella cheese on our signature crust.",
      rating: 4.5,
      preparationTime: "18 mins",
      category: "Pizza"
    },
    {
      id: "8",
      name: "Spicy Ramen Bowl",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      price: 12.99,
      description: "Rich broth with ramen noodles, soft-boiled egg, pork belly, green onions, and nori.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Asian"
    },
  ],
  burger: [
    {
      id: "2",
      name: "Double Cheeseburger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 9.99,
      description: "Two juicy beef patties with American cheese, lettuce, tomatoes, and our special sauce.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Burger"
    },
    {
      id: "9",
      name: "Veggie Burger",
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 8.99,
      description: "Plant-based patty with lettuce, tomato, pickles, and vegan mayo on a whole grain bun.",
      rating: 4.5,
      preparationTime: "10 mins",
      category: "Burger"
    },
    {
      id: "10",
      name: "BBQ Bacon Burger",
      image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY29uJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 11.99,
      description: "Beef patty topped with crispy bacon, cheddar cheese, onion rings, and tangy BBQ sauce.",
      rating: 4.8,
      preparationTime: "12 mins",
      category: "Burger"
    },
  ],
  pizza: [
    {
      id: "1",
      name: "Classic Margherita Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 12.99,
      description: "Fresh mozzarella, tomatoes, basil, olive oil, and our secret sauce on a thin crust.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Pizza"
    },
    {
      id: "7",
      name: "Veggie Supreme Pizza",
      image: "https://images.unsplash.com/photo-1528490060256-c345efae4442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 13.99,
      description: "Bell peppers, mushrooms, onions, black olives, and mozzarella cheese on our signature crust.",
      rating: 4.5,
      preparationTime: "18 mins",
      category: "Pizza"
    },
    {
      id: "11",
      name: "Pepperoni Pizza",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcHBlcm9uaSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      price: 14.99,
      description: "Generous amounts of pepperoni slices with mozzarella cheese and tomato sauce.",
      rating: 4.9,
      preparationTime: "15 mins",
      category: "Pizza"
    },
  ],
  biryani: [
    {
      id: "3",
      name: "Chicken Biryani",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 14.99,
      description: "Fragrant basmati rice cooked with tender chicken, aromatic spices, and herbs.",
      rating: 4.9,
      preparationTime: "25 mins",
      category: "Biryani"
    },
    {
      id: "12",
      name: "Vegetable Biryani",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      price: 12.99,
      description: "Basmati rice cooked with mixed vegetables, spices, and garnished with fried onions.",
      rating: 4.6,
      preparationTime: "20 mins",
      category: "Biryani"
    },
    {
      id: "13",
      name: "Mutton Biryani",
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      price: 16.99,
      description: "Tender mutton pieces cooked with basmati rice and special blend of spices.",
      rating: 4.9,
      preparationTime: "30 mins",
      category: "Biryani"
    },
  ],
  dessert: [
    {
      id: "4",
      name: "Chocolate Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: 8.99,
      description: "Rich and moist chocolate cake with layers of chocolate ganache and frosting.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Dessert"
    },
    {
      id: "14",
      name: "Cheesecake",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
      price: 7.99,
      description: "Creamy cheesecake on graham cracker crust topped with fresh berries.",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Dessert"
    },
    {
      id: "15",
      name: "Tiramisu",
      image: "https://images.unsplash.com/photo-1551879401-a2035935a245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
      price: 9.99,
      description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream.",
      rating: 4.9,
      preparationTime: "5 mins",
      category: "Dessert"
    },
  ],
};

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
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center mb-6 h-auto bg-transparent gap-2">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-5 py-2 rounded-full"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="burger" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-5 py-2 rounded-full"
            >
              Burgers
            </TabsTrigger>
            <TabsTrigger 
              value="pizza" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-5 py-2 rounded-full"
            >
              Pizza
            </TabsTrigger>
            <TabsTrigger 
              value="biryani" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-5 py-2 rounded-full"
            >
              Biryani
            </TabsTrigger>
            <TabsTrigger 
              value="dessert" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white px-5 py-2 rounded-full"
            >
              Desserts
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredItems.map((item) => (
                  <FoodItemCard key={item.id} food={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-2xl font-semibold text-gray-400">
                  No items found matching your search
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Menu;
