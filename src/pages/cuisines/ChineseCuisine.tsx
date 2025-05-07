
import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";

// Mock data for the cuisine
const chineseFoodItems = [
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
];

const ChineseCuisine = () => {
  return (
    <FoodCategoryTemplate
      title="Chinese Cuisine"
      description="Dive into the authentic flavors of China with our selection of traditional and modern Chinese dishes, from dim sum to stir-fries."
      items={chineseFoodItems}
      headerImage="https://images.unsplash.com/photo-1550367083-9fa5411cb8a1?ixlib=rb-4.0.3"
    />
  );
};

export default ChineseCuisine;
