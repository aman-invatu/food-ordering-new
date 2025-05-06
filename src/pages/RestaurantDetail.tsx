
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Star, Clock, DollarSign, MapPin, Phone, Globe, ChevronDown, Info } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import FoodItemCard, { FoodItem } from "@/components/FoodItemCard";

// Mock data for restaurant
const restaurantData = {
  id: "1",
  name: "Burger Palace",
  coverImage: "https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=150&q=60",
  rating: 4.8,
  reviewCount: 243,
  description: "Serving the juiciest burgers in town since 2010. Our handcrafted burgers are made with 100% premium beef and fresh ingredients.",
  address: "123 Burger Street, Foodville, NY 10001",
  phone: "+1 (555) 123-4567",
  website: "www.burgerpalace.com",
  openingHours: "10:00 AM - 10:00 PM",
  deliveryTime: "25-35 min",
  minimumOrder: "$15.00",
  deliveryFee: "$2.99",
  tags: ["Burgers", "Fast Food", "American"],
  menu: {
    "Popular Items": [
      {
        id: "b1",
        name: "Classic Cheeseburger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 8.99,
        description: "Juicy beef patty with American cheese, lettuce, tomatoes, and our special sauce.",
        rating: 4.8,
        preparationTime: "15 mins",
        category: "Burger"
      },
      {
        id: "b2",
        name: "Double Bacon Burger",
        image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY29uJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 11.99,
        description: "Two beef patties topped with crispy bacon, cheddar cheese, and BBQ sauce.",
        rating: 4.9,
        preparationTime: "18 mins",
        category: "Burger"
      },
      {
        id: "b3",
        name: "Crispy Chicken Sandwich",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 9.99,
        description: "Crispy fried chicken breast with lettuce, pickles, and house mayo on a brioche bun.",
        rating: 4.7,
        preparationTime: "15 mins",
        category: "Sandwich"
      }
    ],
    "Burgers": [
      {
        id: "b1",
        name: "Classic Cheeseburger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 8.99,
        description: "Juicy beef patty with American cheese, lettuce, tomatoes, and our special sauce.",
        rating: 4.8,
        preparationTime: "15 mins",
        category: "Burger"
      },
      {
        id: "b2",
        name: "Double Bacon Burger",
        image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY29uJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 11.99,
        description: "Two beef patties topped with crispy bacon, cheddar cheese, and BBQ sauce.",
        rating: 4.9,
        preparationTime: "18 mins",
        category: "Burger"
      },
      {
        id: "b4",
        name: "Mushroom Swiss Burger",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 10.99,
        description: "Beef patty topped with sautéed mushrooms and melted Swiss cheese.",
        rating: 4.7,
        preparationTime: "16 mins",
        category: "Burger"
      },
      {
        id: "b5",
        name: "Veggie Burger",
        image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVnZ2llJTIwYnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 9.99,
        description: "Plant-based patty with lettuce, tomato, and vegan mayo on a whole grain bun.",
        rating: 4.6,
        preparationTime: "14 mins",
        category: "Burger"
      }
    ],
    "Sandwiches": [
      {
        id: "b3",
        name: "Crispy Chicken Sandwich",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMHNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 9.99,
        description: "Crispy fried chicken breast with lettuce, pickles, and house mayo on a brioche bun.",
        rating: 4.7,
        preparationTime: "15 mins",
        category: "Sandwich"
      },
      {
        id: "s1",
        name: "Grilled Chicken Club",
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 10.99,
        description: "Grilled chicken breast with bacon, avocado, lettuce, tomato, and mayo on toasted bread.",
        rating: 4.8,
        preparationTime: "16 mins",
        category: "Sandwich"
      },
      {
        id: "s2",
        name: "Philly Cheesesteak",
        image: "https://images.unsplash.com/photo-1511344407683-b1172dce025f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhpbGx5JTIwY2hlZXNlc3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 12.99,
        description: "Thinly sliced steak with melted provolone, sautéed onions, and peppers on a hoagie roll.",
        rating: 4.9,
        preparationTime: "18 mins",
        category: "Sandwich"
      }
    ],
    "Sides": [
      {
        id: "side1",
        name: "French Fries",
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 3.99,
        description: "Crispy golden fries seasoned with our special spice blend.",
        rating: 4.7,
        preparationTime: "10 mins",
        category: "Sides"
      },
      {
        id: "side2",
        name: "Onion Rings",
        image: "https://images.unsplash.com/photo-1639024471283-02d383a89876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb24lMjByaW5nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 4.99,
        description: "Thick-cut onion rings in a crispy batter served with dipping sauce.",
        rating: 4.6,
        preparationTime: "12 mins",
        category: "Sides"
      },
      {
        id: "side3",
        name: "Mozzarella Sticks",
        image: "https://images.unsplash.com/photo-1548340748-6d98e4a0468f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW96emFyZWxsYSUyMHN0aWNrc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 6.99,
        description: "Breaded mozzarella sticks fried to perfection, served with marinara sauce.",
        rating: 4.8,
        preparationTime: "12 mins",
        category: "Sides"
      }
    ],
    "Drinks": [
      {
        id: "d1",
        name: "Milkshake",
        image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3NoYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 5.99,
        description: "Creamy milkshake made with premium ice cream. Available in chocolate, vanilla, or strawberry.",
        rating: 4.9,
        preparationTime: "8 mins",
        category: "Drinks"
      },
      {
        id: "d2",
        name: "Soft Drink",
        image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29mdCUyMGRyaW5rfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 2.49,
        description: "Your choice of carbonated beverages with free refills.",
        rating: 4.5,
        preparationTime: "2 mins",
        category: "Drinks"
      },
      {
        id: "d3",
        name: "Fresh Lemonade",
        image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 3.99,
        description: "Freshly squeezed lemonade with just the right amount of sweetness.",
        rating: 4.8,
        preparationTime: "5 mins",
        category: "Drinks"
      }
    ]
  }
};

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Popular Items");
  
  // In a real app, you would fetch the restaurant data based on the ID
  const restaurant = restaurantData;
  
  const menuCategories = Object.keys(restaurant.menu);
  
  return (
    <div>
      {/* Cover Image */}
      <div 
        className="h-64 md:h-80 bg-center bg-cover relative"
        style={{ backgroundImage: `url(${restaurant.coverImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
        
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-lg overflow-hidden border-4 border-white shadow-lg">
              <img
                src={restaurant.logo}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 text-white">
              <h1 className="text-3xl font-bold">{restaurant.name}</h1>
              <div className="flex items-center mt-1">
                <div className="flex items-center bg-primary px-2 py-0.5 rounded text-white text-sm">
                  <Star className="h-3 w-3 fill-current mr-1" />
                  <span>{restaurant.rating}</span>
                </div>
                <span className="text-sm text-gray-200 ml-2">({restaurant.reviewCount} reviews)</span>
                <div className="mx-2">•</div>
                {restaurant.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="mr-1 text-white border-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Menu */}
            <Tabs 
              defaultValue={activeTab} 
              value={activeTab}
              onValueChange={setActiveTab}
              className="mb-12"
            >
              <TabsList className="flex overflow-x-auto pb-2 mb-6 bg-transparent h-auto">
                {menuCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {menuCategories.map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {restaurant.menu[category].map((item: FoodItem) => (
                      <FoodItemCard key={item.id} food={item} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div>
            {/* Restaurant Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-semibold mb-4">Restaurant Info</h2>
              
              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{restaurant.address}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{restaurant.phone}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Globe className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a 
                      href={`https://${restaurant.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {restaurant.website}
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-gray-600">{restaurant.openingHours}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Time</p>
                    <p className="text-gray-600">{restaurant.deliveryTime}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <DollarSign className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Minimum Order</p>
                    <p className="text-gray-600">{restaurant.minimumOrder}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Info className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">About</p>
                    <p className="text-gray-600">{restaurant.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <div>
                  <p className="text-gray-600">Delivery Fee</p>
                  <p className="font-semibold">{restaurant.deliveryFee}</p>
                </div>
                
                <button className="text-primary font-medium flex items-center">
                  Read More <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
