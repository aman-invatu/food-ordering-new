
import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";

// Mock data for the cuisine
const indianFoodItems = [
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
];

const IndianCuisine = () => {
  return (
    <FoodCategoryTemplate
      title="Indian Cuisine"
      description="Explore the rich and diverse flavors of India with our authentic selection of dishes featuring aromatic spices and traditional cooking methods."
      items={indianFoodItems}
      headerImage="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3"
    />
  );
};

export default IndianCuisine;
