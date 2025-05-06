
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FoodItemCard from "./FoodItemCard";
import { FoodItem } from "./FoodItemCard";

const popularFoods: FoodItem[] = [
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

interface PopularFoodSectionProps {
  title?: string;
}

const PopularFoodSection: React.FC<PopularFoodSectionProps> = ({ title = "Most Ordered Food" }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold relative">
            {title}
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary"></span>
          </h2>
          <a href="/menu" className="text-primary hover:underline font-medium">
            View All
          </a>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {popularFoods.map((food) => (
              <div key={food.id} className="min-w-[280px] max-w-[280px]">
                <FoodItemCard food={food} />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularFoodSection;
