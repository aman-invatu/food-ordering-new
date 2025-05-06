
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FoodCategoryCard from "./FoodCategoryCard";

const foodCategories = [
  {
    id: "1",
    title: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60",
    restaurantCount: 20,
    slug: "burger",
  },
  {
    id: "2",
    title: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurantCount: 20,
    slug: "pizza",
  },
  {
    id: "3",
    title: "Biryani",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurantCount: 20,
    slug: "biryani",
  },
  {
    id: "4",
    title: "Chinese",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    restaurantCount: 20,
    slug: "chinese",
  },
  {
    id: "5",
    title: "Cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    restaurantCount: 20,
    slug: "cakes",
  },
  {
    id: "6",
    title: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60",
    restaurantCount: 20,
    slug: "cold-coffee",
  },
];

const FoodCategoriesSection = () => {
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
            Collections
            <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary"></span>
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100 focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainer}
          className="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          {foodCategories.map((category) => (
            <div key={category.id} className="w-56">
              <FoodCategoryCard
                title={category.title}
                image={category.image}
                restaurantCount={category.restaurantCount}
                slug={category.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategoriesSection;
