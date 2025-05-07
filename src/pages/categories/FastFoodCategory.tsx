
import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";

// Mock data for fast food
const fastFoodItems = [
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
];

const FastFoodCategory = () => {
  return (
    <FoodCategoryTemplate
      title="Fast Food"
      description="Satisfy your cravings with our menu of quick, delicious comfort foods. From juicy burgers to crispy fries, we've got all your favorites."
      items={fastFoodItems}
      headerImage="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3"
    />
  );
};

export default FastFoodCategory;
