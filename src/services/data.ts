import { FoodItem } from "@/components/FoodItemCard";

// Menu Items Data
export const menuItems: Record<string, FoodItem[]> = {
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

// Restaurants Data
export const restaurants = [
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

// Cuisine Filters
export const cuisineFilters = [
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

// Popular Foods Data
export const popularFoods: FoodItem[] = [
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
  }
];

// Special Dishes Data
export const specialDishes = [
  {
    id: "1",
    name: "Fried Fish",
    image: "https://images.unsplash.com/photo-1594041680539-fc0a3d03cae6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZWQlMjBmaXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 14.99,
    description: "Crispy fried fish served with lemon, tartar sauce and a side of fries.",
  },
  {
    id: "2",
    name: "Shashlik Chicken",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMHNrZXdlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 16.99,
    description: "Marinated grilled chicken skewers with vegetables, served with special sauce.",
  },
  {
    id: "3",
    name: "Chicago Deep",
    image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVlcCUyMGRpc2glMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 19.99,
    description: "Authentic Chicago deep dish pizza with extra cheese and premium toppings.",
  },
  {
    id: "4",
    name: "Cheese Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    price: 12.99,
    description: "Juicy beef patty with melted cheese, fresh vegetables, and our signature sauce.",
  },
  {
    id: "5",
    name: "Pizza Margherita",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    price: 15.99,
    description: "Classic Italian pizza with tomato sauce, fresh mozzarella, and basil leaves.",
  },
];

// How It Works Steps
export const howItWorksSteps = [
  {
    icon: "📍",
    title: "Set Your Location",
    description: "Enable location access or enter your address manually for accurate delivery.",
  },
  {
    icon: "🍽️",
    title: "Choose the food you want",
    description: "Browse through hundreds of restaurants and thousands of dishes.",
  },
  {
    icon: "💳",
    title: "Confirm order with payment",
    description: "Select from multiple payment methods and confirm your delicious order.",
  },
  {
    icon: "⏱️",
    title: "Within 30 minutes you get your food",
    description: "Track your order in real-time as our delivery partners bring it to you.",
  },
];

// Countries Data
export const countries = [
  {
    name: "USA",
    flag: "https://flagcdn.com/w320/us.png",
  },
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
  },
  {
    name: "Australia",
    flag: "https://flagcdn.com/w320/au.png",
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png",
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png",
  },
  {
    name: "Dubai",
    flag: "https://flagcdn.com/w320/ae.png",
  },
  {
    name: "Africa",
    flag: "https://flagcdn.com/w320/za.png",
  },
  {
    name: "UK",
    flag: "https://flagcdn.com/w320/gb.png",
  },
];

// Mock Order Data
export const mockOrder = {
  id: "ORD-38291",
  date: "2025-05-01",
  time: "19:30",
  status: "delivered",
  items: [
    {
      id: "1",
      name: "Classic Margherita Pizza",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      options: ["Extra Cheese", "Thin Crust"]
    },
    {
      id: "2",
      name: "Double Cheeseburger",
      price: 9.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      options: ["No Pickles"]
    },
  ],
  subtotal: 35.97,
  deliveryFee: 3.99,
  tax: 4.00,
  total: 43.96,
  restaurant: {
    name: "Pizza Palace",
    address: "456 Pizza Ave, New York, NY 10001",
    phone: "(212) 555-1234",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  },
  customer: {
    name: "John Doe",
    phone: "(555) 123-4567",
    email: "john@example.com"
  },
  deliveryAddress: "123 Main St, New York, NY 10001",
  paymentMethod: "Credit Card (••••4242)",
  timeline: [
    {
      status: "ordered",
      time: "19:30",
      date: "2025-05-01",
      description: "Order placed successfully"
    },
    {
      status: "confirmed",
      time: "19:32",
      date: "2025-05-01",
      description: "Restaurant confirmed your order"
    },
    {
      status: "preparing",
      time: "19:45",
      date: "2025-05-01",
      description: "Restaurant is preparing your food"
    },
    {
      status: "delivering",
      time: "20:10",
      date: "2025-05-01",
      description: "Order is out for delivery"
    },
    {
      status: "delivered",
      time: "20:35",
      date: "2025-05-01",
      description: "Order delivered successfully"
    }
  ]
};

// Mock Orders Data
export const mockOrders = [
  {
    id: "ORD-38291",
    date: "2025-05-01",
    status: "delivered",
    items: [
      {
        id: "1",
        name: "Classic Margherita Pizza",
        price: 12.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
      {
        id: "2",
        name: "Double Cheeseburger",
        price: 9.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
    ],
    total: 35.97,
    restaurant: "Pizza Palace",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-38275",
    date: "2025-04-28",
    status: "processing",
    items: [
      {
        id: "3",
        name: "Chicken Biryani",
        price: 14.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      },
    ],
    total: 14.99,
    restaurant: "Spice Garden",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-38269",
    date: "2025-04-22",
    status: "delivered",
    items: [
      {
        id: "4",
        name: "Chocolate Cake",
        price: 8.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      },
      {
        id: "5",
        name: "Vegetable Salad Bowl",
        price: 10.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },
    ],
    total: 19.98,
    restaurant: "Garden Fresh",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-38247",
    date: "2025-04-15",
    status: "cancelled",
    items: [
      {
        id: "6",
        name: "Chicken Club Sandwich",
        price: 11.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821",
      },
    ],
    total: 23.98,
    restaurant: "Sandwich Studio",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
];

// Restaurant Detail Data
export const restaurantData = {
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
      // ... other menu items ...
    ],
    // ... other menu categories ...
  }
};

// Category Data
export const categoryData = {
  fastFood: [
    {
      id: "ff1",
      name: "Double Cheeseburger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
      price: 9.99,
      description: "Two juicy beef patties with American cheese, lettuce, tomatoes, and our special sauce.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Burger"
    },
    {
      id: "ff2",
      name: "Crispy Chicken Sandwich",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Crispy fried chicken breast with fresh lettuce, tomato, and mayo on a brioche bun.",
      rating: 4.6,
      preparationTime: "8 mins",
      category: "Sandwich"
    },
    {
      id: "ff3",
      name: "Loaded Fries",
      image: "https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-4.0.3",
      price: 6.99,
      description: "Crispy fries topped with melted cheese, bacon bits, sour cream, and green onions.",
      rating: 4.8,
      preparationTime: "12 mins",
      category: "Sides"
    },
    {
      id: "ff4",
      name: "Buffalo Wings",
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3",
      price: 12.99,
      description: "Crispy fried chicken wings tossed in spicy buffalo sauce, served with ranch dressing.",
      rating: 4.7,
      preparationTime: "15 mins",
      category: "Appetizer"
    },
    {
      id: "ff5",
      name: "Classic Hot Dog",
      image: "https://images.unsplash.com/photo-1613484619879-0c5749ebd8aa?ixlib=rb-4.0.3",
      price: 5.99,
      description: "Grilled all-beef hot dog on a soft bun with ketchup, mustard, relish, and onions.",
      rating: 4.5,
      preparationTime: "5 mins",
      category: "Sandwich"
    },
    {
      id: "ff6",
      name: "Pepperoni Pizza",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Classic pepperoni pizza with tomato sauce and mozzarella cheese on a hand-tossed crust.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Pizza"
    },
    {
      id: "ff7",
      name: "Onion Rings",
      image: "https://images.unsplash.com/photo-1639024471283-03ad2fafe9ae?ixlib=rb-4.0.3",
      price: 5.99,
      description: "Crispy battered onion rings served with our special dipping sauce.",
      rating: 4.6,
      preparationTime: "8 mins",
      category: "Sides"
    },
    {
      id: "ff8",
      name: "Chicken Nuggets",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3",
      price: 7.99,
      description: "Tender chicken nuggets with a crispy coating, served with your choice of dipping sauce.",
      rating: 4.5,
      preparationTime: "7 mins",
      category: "Appetizer"
    }
  ],
  drinks: [
    {
      id: "d1",
      name: "Classic Milkshake",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3",
      price: 6.99,
      description: "Creamy vanilla milkshake blended with premium ice cream, topped with whipped cream and a cherry. lassi",
      rating: 4.8,
      preparationTime: "5 mins",
      category: "Milkshakes"
    },
    {
      id: "d2",
      name: "Fresh Berry Smoothie",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3",
      price: 7.99,
      description: "A refreshing blend of mixed berries, banana, and Greek yogurt for a healthy, delicious treat. lassi",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Smoothies"
    },
    {
      id: "d3",
      name: "Iced Caramel Latte",
      image: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-4.0.3",
      price: 5.99,
      description: "Espresso shots combined with milk, caramel syrup, and ice for a sweet, refreshing coffee drink. lassi",
      rating: 4.8,
      preparationTime: "4 mins",
      category: "Coffee"
    },
    {
      id: "d4",
      name: "Mango Lassi",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3",
      price: 6.49,
      description: "Traditional Indian yogurt drink blended with ripe mangoes and a hint of cardamom.",
      rating: 4.9,
      preparationTime: "5 mins",
      category: "International"
    },
    {
      id: "d5",
      name: "Fresh Lemonade",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3",
      price: 4.99,
      description: "Freshly squeezed lemon juice mixed with water and sugar, served over ice with a lemon wedge. lassi",
      rating: 4.6,
      preparationTime: "3 mins",
      category: "Non-Alcoholic"
    },
    {
      id: "d6",
      name: "Matcha Green Tea",
      image: "https://images.unsplash.com/photo-1536013631178-0e247b1d442c?ixlib=rb-4.0.3",
      price: 5.49,
      description: "Premium Japanese matcha powder whisked with hot water for a traditional and healthy tea experience. lassi",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Tea"
    },
    {
      id: "d7",
      name: "Tropical Punch lassi",
      image: "https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-4.0.3",
      price: 6.99,
      description: "A vibrant mix of pineapple, orange, and cranberry juices with a splash of lime for a tropical escape. lassi",
      rating: 4.6,
      preparationTime: "4 mins",
      category: "Juice"
    },
    {
      id: "d8",
      name: "Hot Chocolate ",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3",
      price: 5.49,
      description: "Rich, creamy hot chocolate made with premium cocoa, topped with whipped cream and chocolate shavings. lassi",
      rating: 4.8,
      preparationTime: "5 mins",
      category: "Hot Drinks"
    }
  ],
  chai: [
    {
      id: 'ch1',
      name: 'Masala Chai',
      image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80',
      price: 4.50,
      description: 'Traditional Indian spiced tea with ginger, cardamom, and cinnamon.',
      rating: 4.9,
      preparationTime: '5 mins',
      category: 'Hot Chai'
    },
    {
      id: 'ch2',
      name: 'Kashmiri Kahwa',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 5.00,
      description: 'Green tea with saffron, cardamom, and almonds.',
      rating: 4.8,
      preparationTime: '6 mins',
      category: 'Special Chai'
    },
    {
      id: 'ch3',
      name: 'Ginger Chai',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 4.00,
      description: 'Strong black tea with fresh ginger and honey.',
      rating: 4.7,
      preparationTime: '5 mins',
      category: 'Hot Chai'
    },
    {
      id: 'ch4',
      name: 'Iced Chai Latte',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 5.50,
      description: 'Chilled spiced tea with milk and ice.',
      rating: 4.6,
      preparationTime: '4 mins',
      category: 'Iced Chai'
    },
    {
      id: 'ch5',
      name: 'Tulsi Chai',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 4.50,
      description: 'Holy basil tea with ginger and honey.',
      rating: 4.8,
      preparationTime: '5 mins',
      category: 'Herbal Chai'
    },
    {
      id: 'ch6',
      name: 'Elaichi Chai',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 4.00,
      description: 'Cardamom-infused black tea with milk.',
      rating: 4.7,
      preparationTime: '5 mins',
      category: 'Hot Chai'
    },
    {
      id: 'ch7',
      name: 'Rose Chai',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 5.00,
      description: 'Black tea with rose petals and cardamom.',
      rating: 4.9,
      preparationTime: '6 mins',
      category: 'Special Chai'
    },
    {
      id: 'ch8',
      name: 'Adrak Chai',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      price: 4.00,
      description: 'Strong ginger tea with black pepper and honey.',
      rating: 4.8,
      preparationTime: '5 mins',
      category: 'Hot Chai'
    }
  ],
  lunch: [
    {
      id: "d1",
      name: "1Classic Milkshake",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3",
      price: 6.99,
      description: "Creamy vanilla milkshake blended with premium ice cream, topped with whipped cream and a cherry.",
      rating: 4.8,
      preparationTime: "5 mins",
      category: "Milkshakes"
    },
    {
      id: "d2",
      name: "1Fresh Berry Smoothie",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3",
      price: 7.99,
      description: "A refreshing blend of mixed berries, banana, and Greek yogurt for a healthy, delicious treat.",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Smoothies"
    },
    {
      id: "d3",
      name: "1Iced Caramel Latte",
      image: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-4.0.3",
      price: 5.99,
      description: "Espresso shots combined with milk, caramel syrup, and ice for a sweet, refreshing coffee drink.",
      rating: 4.8,
      preparationTime: "4 mins",
      category: "Coffee"
    },
    {
      id: "d4",
      name: "1Mango Lassi",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3",
      price: 6.49,
      description: "Traditional Indian yogurt drink blended with ripe mangoes and a hint of cardamom.",
      rating: 4.9,
      preparationTime: "5 mins",
      category: "International"
    },
    {
      id: "d5",
      name: "1Fresh Lemonade",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3",
      price: 4.99,
      description: "Freshly squeezed lemon juice mixed with water and sugar, served over ice with a lemon wedge.",
      rating: 4.6,
      preparationTime: "3 mins",
      category: "Non-Alcoholic"
    },
    {
      id: "d6",
      name: "1Matcha Green Tea",
      image: "https://images.unsplash.com/photo-1536013631178-0e247b1d442c?ixlib=rb-4.0.3",
      price: 5.49,
      description: "Premium Japanese matcha powder whisked with hot water for a traditional and healthy tea experience.",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Tea"
    },
    {
      id: "1d7",
      name: "Tropical Punch",
      image: "https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-4.0.3",
      price: 6.99,
      description: "A vibrant mix of pineapple, orange, and cranberry juices with a splash of lime for a tropical escape.",
      rating: 4.6,
      preparationTime: "4 mins",
      category: "Juice"
    },
    {
      id: "1d8",
      name: "Hot Chocolate",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3",
      price: 5.49,
      description: "Rich, creamy hot chocolate made with premium cocoa, topped with whipped cream and chocolate shavings.",
      rating: 4.8,
      preparationTime: "5 mins",
      category: "Hot Drinks"
    }
  ],
  dinner: [
    {
      id: "8d1",
      name: "1Classic Milkshake",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3",
      price: 6.99,
      description: "Creamy vanilla milkshake blended with premium ice cream, topped with whipped cream and a cherry.",
      rating: 4.8,
      preparationTime: "5 mins",
      category: "Milkshakes"
    },
    {
      id: "7d2",
      name: "1Fresh Berry Smoothie",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3",
      price: 7.99,
      description: "A refreshing blend of mixed berries, banana, and Greek yogurt for a healthy, delicious treat.",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Smoothies"
    },
    {
      id: "6d3",
      name: "1Iced Caramel Latte",
      image: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-4.0.3",
      price: 5.99,
      description: "Espresso shots combined with milk, caramel syrup, and ice for a sweet, refreshing coffee drink.",
      rating: 4.8,
      preparationTime: "4 mins",
      category: "Coffee"
    },
    {
      id: "5d4",
      name: "1Mango Lassi",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3",
      price: 6.49,
      description: "Traditional Indian yogurt drink blended with ripe mangoes and a hint of cardamom.",
      rating: 4.9,
      preparationTime: "5 mins",
      category: "International"
    },
    {
      id: "4d5",
      name: "1Fresh Lemonade",
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3",
      price: 4.99,
      description: "Freshly squeezed lemon juice mixed with water and sugar, served over ice with a lemon wedge.",
      rating: 4.6,
      preparationTime: "3 mins",
      category: "Non-Alcoholic"
    },
    {
      id: "3d6",
      name: "1Matcha Green Tea",
      image: "https://images.unsplash.com/photo-1536013631178-0e247b1d442c?ixlib=rb-4.0.3",
      price: 5.49,
      description: "Premium Japanese matcha powder whisked with hot water for a traditional and healthy tea experience.",
      rating: 4.7,
      preparationTime: "5 mins",
      category: "Tea"
    },
    {
      id: "2d7",
      name: "Tropical Punch",
      image: "https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-4.0.3",
      price: 6.99,
      description: "A vibrant mix of pineapple, orange, and cranberry juices with a splash of lime for a tropical escape.",
      rating: 4.6,
      preparationTime: "4 mins",
      category: "Juice"
    },
    {
      id: "8d8",
      name: "Hot Chocolate",
      image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3",
      price: 5.49,
      description: "Rich, creamy hot chocolate made with premium cocoa, topped with whipped cream and chocolate shavings.",
      rating: 4.8,
      preparationTime: "5 mins",
      category: "Hot Drinks"
    }
  ],
  coffee: [
    {
      id: 'c1',
      name: 'Espresso',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
      price: 4.00,
      description: 'Rich and bold espresso shot made from premium beans.',
      rating: 4.8,
      preparationTime: '3 mins',
      category: 'Espresso'
    },
    {
      id: 'c2',
      name: 'Cappuccino',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      price: 5.00,
      description: 'Classic Italian coffee with steamed milk and foam.',
      rating: 4.7,
      preparationTime: '5 mins',
      category: 'Cappuccino'
    },
    {
      id: 'c3',
      name: 'Latte',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      price: 5.50,
      description: 'Smooth espresso with steamed milk and a light layer of foam.',
      rating: 4.9,
      preparationTime: '5 mins',
      category: 'Latte'
    },
    {
      id: 'c4',
      name: 'Americano',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      price: 4.50,
      description: 'Espresso diluted with hot water for a smooth, rich flavor.',
      rating: 4.6,
      preparationTime: '4 mins',
      category: 'Americano'
    },
    {
      id: 'c5',
      name: 'Mocha',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
      price: 6.00,
      description: 'Espresso with chocolate, steamed milk, and whipped cream.',
      rating: 4.8,
      preparationTime: '6 mins',
      category: 'Mocha'
    },
    {
      id: 'c6',
      name: 'Flat White',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
      price: 5.50,
      description: 'Velvety microfoam milk poured over a double shot of espresso.',
      rating: 4.7,
      preparationTime: '5 mins',
      category: 'Flat White'
    },
    {
      id: 'c7',
      name: 'Iced Coffee',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=800&q=80',
      price: 5.00,
      description: 'Chilled coffee served over ice, perfect for a hot day.',
      rating: 4.5,
      preparationTime: '4 mins',
      category: 'Iced Coffee'
    },
    {
      id: 'c8',
      name: 'Affogato',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      price: 6.50,
      description: 'Espresso poured over a scoop of vanilla ice cream.',
      rating: 4.9,
      preparationTime: '4 mins',
      category: 'Affogato'
    }
  ],
  breakFast: [
    {
      id: "bf1",
      name: "Classic Pancakes",
      image: "https://images.unsplash.com/photo-1528207776546-365bb10ee283?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Fluffy buttermilk pancakes served with maple syrup, fresh berries, and whipped cream.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Breakfast"
    },
    {
      id: "bf2",
      name: "Avocado Toast",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3",
      price: 7.99,
      description: "Smashed avocado on artisan sourdough toast with cherry tomatoes, microgreens, and a poached egg.",
      rating: 4.7,
      preparationTime: "8 mins",
      category: "Breakfast"
    },
    {
      id: "bf3",
      name: "Eggs Benedict",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3",
      price: 12.99,
      description: "English muffin topped with Canadian bacon, poached eggs, and hollandaise sauce.",
      rating: 4.9,
      preparationTime: "15 mins",
      category: "Breakfast"
    },
    {
      id: "bf4",
      name: "Breakfast Burrito",
      image: "https://images.unsplash.com/photo-1585499583264-27a9d4a7519b?ixlib=rb-4.0.3",
      price: 9.99,
      description: "Scrambled eggs, black beans, cheese, and salsa wrapped in a warm tortilla.",
      rating: 4.6,
      preparationTime: "12 mins",
      category: "Breakfast"
    },
    {
      id: "bf5",
      name: "Belgian Waffles",
      image: "https://images.unsplash.com/photo-1562376552-329d9b0644f5?ixlib=rb-4.0.3",
      price: 10.99,
      description: "Crispy waffles served with fresh strawberries, whipped cream, and maple syrup.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Breakfast"
    },
    {
      id: "bf6",
      name: "Breakfast Bowl",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3",
      price: 11.99,
      description: "Quinoa bowl with roasted vegetables, avocado, poached egg, and tahini dressing.",
      rating: 4.7,
      preparationTime: "15 mins",
      category: "Breakfast"
    },
    {
      id: "bf7",
      name: "French Toast",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Thick-cut brioche bread dipped in cinnamon-vanilla custard, served with fresh berries.",
      rating: 4.8,
      preparationTime: "12 mins",
      category: "Breakfast"
    },
    {
      id: "bf8",
      name: "Breakfast Sandwich",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3",
      price: 7.99,
      description: "Egg, cheese, and bacon on a toasted English muffin with a side of hash browns.",
      rating: 4.6,
      preparationTime: "8 mins",
      category: "Breakfast"
    }
  ],
  snacks: [
    {
      id: "sn1",
      name: "Loaded Nachos",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      price: 7.99,
      description: "Crispy tortilla chips topped with melted cheese, jalapeños, salsa, and sour cream.",
      rating: 4.7,
      preparationTime: "8 mins",
      category: "Snacks"
    },
    {
      id: "sn2",
      name: "Mozzarella Sticks",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      price: 6.49,
      description: "Golden-fried mozzarella cheese sticks served with marinara sauce.",
      rating: 4.6,
      preparationTime: "7 mins",
      category: "Snacks"
    },
    {
      id: "sn3",
      name: "Chicken Tenders",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
      price: 8.99,
      description: "Crispy breaded chicken tenders served with honey mustard dip.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Snacks"
    },
    {
      id: "sn4",
      name: "French Fries",
      image: "https://images.unsplash.com/photo-1542444459-db68ac1c90b9?auto=format&fit=crop&w=800&q=80",
      price: 4.99,
      description: "Classic golden fries, crispy on the outside and fluffy inside.",
      rating: 4.5,
      preparationTime: "5 mins",
      category: "Snacks"
    },
    {
      id: "sn5",
      name: "Spring Rolls",
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
      price: 5.99,
      description: "Vegetable spring rolls served with sweet chili dipping sauce.",
      rating: 4.6,
      preparationTime: "6 mins",
      category: "Snacks"
    },
    {
      id: "sn6",
      name: "Popcorn Chicken",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      price: 7.49,
      description: "Bite-sized crispy chicken pieces, perfect for snacking.",
      rating: 4.7,
      preparationTime: "9 mins",
      category: "Snacks"
    },
    {
      id: "sn7",
      name: "Garlic Bread",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      price: 4.49,
      description: "Toasted baguette slices topped with garlic butter and herbs.",
      rating: 4.5,
      preparationTime: "6 mins",
      category: "Snacks"
    },
    {
      id: "sn8",
      name: "Mini Samosas",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80",
      price: 5.99,
      description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.",
      rating: 4.8,
      preparationTime: "8 mins",
      category: "Snacks"
    }
  ],
  starters: [
    {
      id: "starter1",
      name: "Bruschetta",
      image: "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 5.50,
      description: "Toasted bread with tomatoes and basil.",
      rating: 4.7,
      preparationTime: "8 mins",
      category: "Starters"
    },
    {
      id: "starter2",
      name: "Garlic Bread",
      image: "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 4.50,
      description: "Toasted bread with garlic butter.",
      rating: 4.6,
      preparationTime: "7 mins",
      category: "Starters"
    },
    {
      id: "starter3",
      name: "Mozzarella Sticks",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
      price: 6.50,
      description: "Breaded mozzarella with marinara sauce.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Starters"
    }
  ],
  mainCourse: [
    {
      id: "main1",
      name: "Grilled Salmon",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 18.00,
      description: "Fresh salmon with vegetables.",
      rating: 4.9,
      preparationTime: "20 mins",
      category: "Main Course"
    },
    {
      id: "main2",
      name: "Chicken Parmigiana",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 16.00,
      description: "Breaded chicken with tomato sauce and cheese.",
      rating: 4.8,
      preparationTime: "18 mins",
      category: "Main Course"
    },
    {
      id: "main3",
      name: "Vegetable Lasagna",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      price: 14.00,
      description: "Layers of pasta with vegetables and cheese.",
      rating: 4.7,
      preparationTime: "22 mins",
      category: "Main Course"
    }
  ]
};

// Cuisine Data
export const cuisineData = {
  chinese: [
    {
      id: "c1",
      name: "Kung Pao Chicken",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce.",
      rating: 4.7,
      preparationTime: "20 mins",
      category: "Main Course"
    },
    {
      id: "c2",
      name: "Sweet and Sour Pork",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3",
      price: 13.99,
      description: "Crispy battered pork with bell peppers and pineapple in a tangy sweet and sour sauce.",
      rating: 4.6,
      preparationTime: "25 mins",
      category: "Main Course"
    },
    {
      id: "c3",
      name: "Dim Sum Platter",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3",
      price: 16.99,
      description: "Assortment of steamed dumplings with various fillings, served in bamboo steamers.",
      rating: 4.8,
      preparationTime: "30 mins",
      category: "Appetizer"
    },
    {
      id: "c4",
      name: "Peking Duck",
      image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3",
      price: 28.99,
      description: "Roasted duck served with thin pancakes, spring onions, cucumber, and sweet bean sauce.",
      rating: 4.9,
      preparationTime: "40 mins",
      category: "Main Course"
    },
    {
      id: "c5",
      name: "Mapo Tofu",
      image: "https://images.unsplash.com/photo-1542803293-59465c4e2f95?ixlib=rb-4.0.3",
      price: 12.99,
      description: "Tofu in a spicy sauce with minced meat, Sichuan peppercorns, and chili bean paste.",
      rating: 4.5,
      preparationTime: "15 mins",
      category: "Main Course"
    },
    {
      id: "c6",
      name: "Spring Rolls",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Crispy rolled pastry filled with vegetables and meat, served with dipping sauce.",
      rating: 4.6,
      preparationTime: "12 mins",
      category: "Appetizer"
    },
    {
      id: "c7",
      name: "Hot and Sour Soup",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3",
      price: 7.99,
      description: "Tangy and spicy soup with tofu, bamboo shoots, and mushrooms in a rich broth.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Soup"
    },
    {
      id: "c8",
      name: "Yangzhou Fried Rice",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3",
      price: 11.99,
      description: "Stir-fried rice with eggs, shrimp, pork, and vegetables in a savory sauce.",
      rating: 4.7,
      preparationTime: "15 mins",
      category: "Rice"
    }
  ],
  indian: [
    {
      id: "i1",
      name: "Butter Chicken",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3",
      price: 15.99,
      description: "Tender chicken cooked in a rich and creamy tomato-based sauce with butter and aromatic spices.",
      rating: 4.8,
      preparationTime: "25 mins",
      category: "Main Course"
    },
    {
      id: "i2",
      name: "Paneer Tikka Masala",
      image: "https://images.unsplash.com/photo-1596797038530-2c107aa4a98f?ixlib=rb-4.0.3",
      price: 13.99,
      description: "Grilled paneer cheese cubes in a spiced curry sauce with bell peppers and onions.",
      rating: 4.7,
      preparationTime: "20 mins",
      category: "Main Course"
    },
    {
      id: "i3",
      name: "Chicken Biryani",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3",
      price: 16.99,
      description: "Fragrant basmati rice layered with marinated chicken and aromatic spices, slow-cooked to perfection.",
      rating: 4.9,
      preparationTime: "35 mins",
      category: "Rice"
    },
    {
      id: "i4",
      name: "Masala Dosa",
      image: "https://images.unsplash.com/photo-1589223537062-7a586980bc78?ixlib=rb-4.0.3",
      price: 10.99,
      description: "Thin crispy crepe made from fermented rice and lentil batter, filled with spiced potato mixture.",
      rating: 4.6,
      preparationTime: "15 mins",
      category: "Breakfast"
    },
    {
      id: "i5",
      name: "Vegetable Samosas",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3",
      price: 7.99,
      description: "Crispy pastry triangles filled with spiced potatoes, peas, and aromatic herbs.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Appetizer"
    },
    {
      id: "i6",
      name: "Chicken Tikka",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Marinated chicken pieces grilled to perfection in a tandoor oven with aromatic spices.",
      rating: 4.8,
      preparationTime: "18 mins",
      category: "Appetizer"
    },
    {
      id: "i7",
      name: "Malai Kofta",
      image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-4.0.3",
      price: 13.99,
      description: "Soft potato and cheese dumplings in a creamy tomato sauce with aromatic Indian spices.",
      rating: 4.6,
      preparationTime: "25 mins",
      category: "Main Course"
    },
    {
      id: "i8",
      name: "Gulab Jamun",
      image: "https://images.unsplash.com/photo-1546069901-d5aeb35d29a9?ixlib=rb-4.0.3",
      price: 6.99,
      description: "Soft milk solids dumplings, deep-fried and soaked in rose-scented sugar syrup.",
      rating: 4.9,
      preparationTime: "8 mins",
      category: "Dessert"
    }
  ],
  american: [
    {
      id: "a1",
      name: "Classic Cheeseburger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
      price: 12.99,
      description: "Juicy beef patty with American cheese, lettuce, tomatoes, and our special sauce on a toasted bun.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Burger"
    },
    {
      id: "a2",
      name: "BBQ Ribs",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
      price: 24.99,
      description: "Slow-cooked pork ribs glazed with our signature BBQ sauce, served with coleslaw and cornbread.",
      rating: 4.9,
      preparationTime: "45 mins",
      category: "Main Course"
    },
    {
      id: "a3",
      name: "Mac and Cheese",
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Creamy macaroni pasta with a blend of cheddar, mozzarella, and parmesan cheeses, topped with breadcrumbs.",
      rating: 4.7,
      preparationTime: "20 mins",
      category: "Side Dish"
    },
    {
      id: "a4",
      name: "Chicken Wings",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3",
      price: 16.99,
      description: "Crispy fried chicken wings tossed in your choice of buffalo, BBQ, or honey garlic sauce.",
      rating: 4.8,
      preparationTime: "25 mins",
      category: "Appetizer"
    },
    {
      id: "a5",
      name: "New York Style Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3",
      price: 18.99,
      description: "Large thin-crust pizza with tomato sauce, mozzarella, and your choice of toppings.",
      rating: 4.7,
      preparationTime: "30 mins",
      category: "Pizza"
    },
    {
      id: "a6",
      name: "Apple Pie",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Classic American dessert with spiced apple filling in a flaky crust, served with vanilla ice cream.",
      rating: 4.9,
      preparationTime: "10 mins",
      category: "Dessert"
    },
    {
      id: "a7",
      name: "Grilled Cheese Sandwich",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3",
      price: 9.99,
      description: "Toasted sandwich with melted cheddar and American cheese, served with tomato soup.",
      rating: 4.6,
      preparationTime: "12 mins",
      category: "Sandwich"
    },
    {
      id: "a8",
      name: "Hot Dog",
      image: "https://images.unsplash.com/photo-1612392062122-61b3b8f3dcc3?ixlib=rb-4.0.3",
      price: 7.99,
      description: "All-beef hot dog in a soft bun with mustard, ketchup, relish, and onions.",
      rating: 4.5,
      preparationTime: "8 mins",
      category: "Sandwich"
    }
  ],
  french: [
    {
      id: "f1",
      name: "Coq au Vin",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
      price: 22.99,
      description: "Chicken braised with red wine, mushrooms, bacon, and onions for a rich, savory flavor.",
      rating: 4.8,
      preparationTime: "45 mins",
      category: "Main Course"
    },
    {
      id: "f2",
      name: "Ratatouille",
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-4.0.3",
      price: 16.99,
      description: "A classic Provençal vegetable stew with eggplant, zucchini, peppers, and tomatoes.",
      rating: 4.7,
      preparationTime: "30 mins",
      category: "Vegetarian"
    },
    {
      id: "f3",
      name: "Bouillabaisse",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3",
      price: 28.99,
      description: "Traditional fish stew from Marseille with assorted seafood, saffron, and herbs.",
      rating: 4.9,
      preparationTime: "50 mins",
      category: "Seafood"
    },
    {
      id: "f4",
      name: "Quiche Lorraine",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Savory tart with a creamy filling of eggs, cream, bacon, and cheese.",
      rating: 4.6,
      preparationTime: "25 mins",
      category: "Appetizer"
    },
    {
      id: "f5",
      name: "Crème Brûlée",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3",
      price: 9.99,
      description: "Classic French dessert with a creamy custard base and caramelized sugar crust.",
      rating: 4.9,
      preparationTime: "15 mins",
      category: "Dessert"
    },
    {
      id: "f6",
      name: "Croissant",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3",
      price: 5.99,
      description: "Flaky, buttery pastry, perfect for breakfast or a snack.",
      rating: 4.7,
      preparationTime: "10 mins",
      category: "Bakery"
    },
    {
      id: "f7",
      name: "French Onion Soup",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3",
      price: 12.99,
      description: "Rich beef broth with caramelized onions, topped with toasted bread and melted cheese.",
      rating: 4.8,
      preparationTime: "35 mins",
      category: "Soup"
    },
    {
      id: "f8",
      name: "Tarte Tatin",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Upside-down caramelized apple tart, a French classic dessert.",
      rating: 4.7,
      preparationTime: "20 mins",
      category: "Dessert"
    }
  ],
  italian: [
    {
      id: "it1",
      name: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3",
      price: 13.99,
      description: "Classic Neapolitan pizza with fresh mozzarella, tomatoes, basil, and olive oil.",
      rating: 4.8,
      preparationTime: "20 mins",
      category: "Pizza"
    },
    {
      id: "it2",
      name: "Spaghetti Carbonara",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3",
      price: 15.99,
      description: "Pasta with creamy egg sauce, pancetta, parmesan, and black pepper.",
      rating: 4.7,
      preparationTime: "18 mins",
      category: "Pasta"
    },
    {
      id: "it3",
      name: "Lasagna Bolognese",
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?ixlib=rb-4.0.3",
      price: 17.99,
      description: "Layered pasta with rich meat sauce, béchamel, and mozzarella cheese.",
      rating: 4.9,
      preparationTime: "35 mins",
      category: "Pasta"
    },
    {
      id: "it4",
      name: "Risotto alla Milanese",
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-4.0.3",
      price: 16.99,
      description: "Creamy risotto with saffron, parmesan, and a touch of butter.",
      rating: 4.6,
      preparationTime: "25 mins",
      category: "Rice"
    },
    {
      id: "it5",
      name: "Tiramisu",
      image: "https://images.unsplash.com/photo-1551879401-a2035935a245?ixlib=rb-4.0.3",
      price: 9.99,
      description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.",
      rating: 4.9,
      preparationTime: "10 mins",
      category: "Dessert"
    },
    {
      id: "it6",
      name: "Caprese Salad",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3",
      price: 11.99,
      description: "Fresh mozzarella, tomatoes, basil, olive oil, and balsamic glaze.",
      rating: 4.7,
      preparationTime: "8 mins",
      category: "Salad"
    },
    {
      id: "it7",
      name: "Fettuccine Alfredo",
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Pasta tossed in a creamy parmesan sauce with butter and black pepper.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Pasta"
    },
    {
      id: "it8",
      name: "Bruschetta",
      image: "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
      rating: 4.6,
      preparationTime: "10 mins",
      category: "Appetizer"
    }
  ],
  mexican: [
    {
      id: "m1",
      name: "Street Tacos",
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3",
      price: 12.99,
      description: "Authentic street-style tacos with your choice of meat, topped with fresh cilantro, onions, and lime.",
      rating: 4.8,
      preparationTime: "15 mins",
      category: "Tacos"
    },
    {
      id: "m2",
      name: "Chicken Burrito",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3",
      price: 14.99,
      description: "Large flour tortilla filled with grilled chicken, rice, beans, cheese, and fresh vegetables.",
      rating: 4.7,
      preparationTime: "20 mins",
      category: "Burritos"
    },
    {
      id: "m3",
      name: "Beef Enchiladas",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3",
      price: 16.99,
      description: "Corn tortillas filled with seasoned beef, smothered in enchilada sauce and melted cheese.",
      rating: 4.9,
      preparationTime: "25 mins",
      category: "Enchiladas"
    },
    {
      id: "m4",
      name: "Chiles Rellenos",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3",
      price: 13.99,
      description: "Poblano peppers stuffed with cheese, battered and fried, served with ranchero sauce.",
      rating: 4.6,
      preparationTime: "18 mins",
      category: "Main Course"
    },
    {
      id: "m5",
      name: "Guacamole",
      image: "https://images.unsplash.com/photo-1582169296194-4d644c384f79?ixlib=rb-4.0.3",
      price: 8.99,
      description: "Freshly made guacamole with ripe avocados, tomatoes, onions, cilantro, and lime juice.",
      rating: 4.8,
      preparationTime: "10 mins",
      category: "Appetizer"
    },
    {
      id: "m6",
      name: "Churros",
      image: "https://images.unsplash.com/photo-1582169296194-4d644c384f79?ixlib=rb-4.0.3",
      price: 7.99,
      description: "Crispy fried dough pastries dusted with cinnamon sugar, served with chocolate dipping sauce.",
      rating: 4.9,
      preparationTime: "12 mins",
      category: "Desserts"
    },
    {
      id: "m7",
      name: "Quesadilla",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3",
      price: 11.99,
      description: "Grilled flour tortilla filled with melted cheese and your choice of meat or vegetables.",
      rating: 4.7,
      preparationTime: "15 mins",
      category: "Appetizer"
    },
    {
      id: "m8",
      name: "Flan",
      image: "https://images.unsplash.com/photo-1582169296194-4d644c384f79?ixlib=rb-4.0.3",
      price: 6.99,
      description: "Creamy caramel custard dessert, a classic Mexican sweet treat.",
      rating: 4.8,
      preparationTime: "8 mins",
      category: "Desserts"
    }
  ]
};

// Dinner Menu Items
export const dinnerMenuItems = [
  // Burgers
  {
    id: '1',
    name: 'Beef Burger',
    description: 'Beef, cheese, potato, onion, fries',
    price: 9.00,
    category: 'burgers'
  },
  {
    id: '2',
    name: 'Broccoli',
    description: 'Chicken, cheese, potato, onion, fries',
    price: 9.00,
    category: 'burgers'
  },
  {
    id: '3',
    name: 'Chicken Burger',
    description: 'Chicken, cheese, potato, onion, fries',
    price: 14.00,
    category: 'burgers'
  },
  {
    id: '4',
    name: 'Double Cheese Burger',
    description: 'Double beef patty, extra cheese, lettuce, tomato',
    price: 16.00,
    category: 'burgers'
  },
  // Pasta
  {
    id: '5',
    name: 'Spaghetti Carbonara',
    description: 'Creamy sauce, bacon, parmesan cheese, black pepper',
    price: 12.00,
    category: 'pasta'
  },
  {
    id: '6',
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato sauce, garlic, red chili, parsley',
    price: 11.00,
    category: 'pasta'
  },
  {
    id: '7',
    name: 'Fettuccine Alfredo',
    description: 'Creamy parmesan sauce, butter, black pepper',
    price: 13.00,
    category: 'pasta'
  },
  {
    id: '8',
    name: 'Lasagna Bolognese',
    description: 'Layered pasta, meat sauce, bechamel, mozzarella',
    price: 15.00,
    category: 'pasta'
  },
  // Pizza
  {
    id: '9',
    name: 'Margherita Pizza',
    description: 'Fresh tomato sauce, mozzarella, basil leaves',
    price: 11.00,
    category: 'pizza'
  },
  {
    id: '10',
    name: 'Pepperoni Pizza',
    description: 'Tomato sauce, mozzarella, spicy pepperoni',
    price: 13.00,
    category: 'pizza'
  },
  {
    id: '11',
    name: 'Four Cheese Pizza',
    description: 'Mozzarella, gorgonzola, parmesan, ricotta',
    price: 14.00,
    category: 'pizza'
  },
  {
    id: '12',
    name: 'BBQ Chicken Pizza',
    description: 'BBQ sauce, chicken, red onions, cilantro',
    price: 15.00,
    category: 'pizza'
  },
  // Sushi
  {
    id: '13',
    name: 'California Roll',
    description: 'Crab meat, avocado, cucumber, tobiko',
    price: 12.00,
    category: 'sushi'
  },
  {
    id: '14',
    name: 'Spicy Tuna Roll',
    description: 'Fresh tuna, spicy mayo, cucumber, sesame',
    price: 14.00,
    category: 'sushi'
  },
  {
    id: '15',
    name: 'Dragon Roll',
    description: 'Eel, cucumber, avocado, unagi sauce',
    price: 16.00,
    category: 'sushi'
  },
  {
    id: '16',
    name: 'Rainbow Roll',
    description: 'California roll topped with assorted sashimi',
    price: 18.00,
    category: 'sushi'
  },
  // Desserts
  {
    id: '17',
    name: 'Tiramisu',
    description: 'Coffee-flavored Italian dessert with mascarpone',
    price: 8.00,
    category: 'desserts'
  },
  {
    id: '18',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center',
    price: 9.00,
    category: 'desserts'
  },
  {
    id: '19',
    name: 'New York Cheesecake',
    description: 'Classic cheesecake with berry compote',
    price: 8.50,
    category: 'desserts'
  },
  {
    id: '20',
    name: 'Crème Brûlée',
    description: 'French vanilla custard with caramelized sugar',
    price: 9.50,
    category: 'desserts'
  },
  // Drinks
  {
    id: '21',
    name: 'Mojito',
    description: 'Rum, fresh mint, lime, soda water',
    price: 10.00,
    category: 'drinks'
  },
  {
    id: '22',
    name: 'Fresh Berry Smoothie',
    description: 'Mixed berries, yogurt, honey',
    price: 7.00,
    category: 'drinks'
  },
  {
    id: '23',
    name: 'Espresso Martini',
    description: 'Vodka, coffee liqueur, fresh espresso',
    price: 12.00,
    category: 'drinks'
  },
  {
    id: '24',
    name: 'Tropical Paradise',
    description: 'Mango, pineapple, coconut water, passion fruit',
    price: 8.00,
    category: 'drinks'
  }
];

export const dinnerCategories = [
  { id: 'burgers', name: 'BURGERS' },
  { id: 'pasta', name: 'PASTA' },
  { id: 'pizza', name: 'PIZZA' },
  { id: 'sushi', name: 'SUSHI' },
  { id: 'desserts', name: 'DESSERTS' },
  { id: 'drinks', name: 'DRINKS' }
];

export const dinnerCategoryImages = {
  burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  pasta: "https://images.unsplash.com/photo-1473093295043-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  desserts: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
  drinks: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
};

