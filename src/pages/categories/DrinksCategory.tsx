
import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";

// Mock data for drinks
const drinksItems = [
  {
    id: "d1",
    name: "Classic Milkshake",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3",
    price: 6.99,
    description: "Creamy vanilla milkshake blended with premium ice cream, topped with whipped cream and a cherry.",
    rating: 4.8,
    preparationTime: "5 mins",
    category: "Milkshakes"
  },
  {
    id: "d2",
    name: "Fresh Berry Smoothie",
    image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?ixlib=rb-4.0.3",
    price: 7.99,
    description: "A refreshing blend of mixed berries, banana, and Greek yogurt for a healthy, delicious treat.",
    rating: 4.7,
    preparationTime: "5 mins",
    category: "Smoothies"
  },
  {
    id: "d3",
    name: "Iced Caramel Latte",
    image: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-4.0.3",
    price: 5.99,
    description: "Espresso shots combined with milk, caramel syrup, and ice for a sweet, refreshing coffee drink.",
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
    description: "Freshly squeezed lemon juice mixed with water and sugar, served over ice with a lemon wedge.",
    rating: 4.6,
    preparationTime: "3 mins",
    category: "Non-Alcoholic"
  },
  {
    id: "d6",
    name: "Matcha Green Tea",
    image: "https://images.unsplash.com/photo-1536013631178-0e247b1d442c?ixlib=rb-4.0.3",
    price: 5.49,
    description: "Premium Japanese matcha powder whisked with hot water for a traditional and healthy tea experience.",
    rating: 4.7,
    preparationTime: "5 mins",
    category: "Tea"
  },
  {
    id: "d7",
    name: "Tropical Punch",
    image: "https://images.unsplash.com/photo-1596803244535-925769f389fc?ixlib=rb-4.0.3",
    price: 6.99,
    description: "A vibrant mix of pineapple, orange, and cranberry juices with a splash of lime for a tropical escape.",
    rating: 4.6,
    preparationTime: "4 mins",
    category: "Juice"
  },
  {
    id: "d8",
    name: "Hot Chocolate",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3",
    price: 5.49,
    description: "Rich, creamy hot chocolate made with premium cocoa, topped with whipped cream and chocolate shavings.",
    rating: 4.8,
    preparationTime: "5 mins",
    category: "Hot Drinks"
  }
];

const DrinksCategory = () => {
  return (
    <FoodCategoryTemplate
      title="Drinks & Beverages"
      description="Quench your thirst with our selection of refreshing drinks, from handcrafted coffees to fresh smoothies and classic beverages."
      items={drinksItems}
      headerImage="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3"
    />
  );
};

export default DrinksCategory;
