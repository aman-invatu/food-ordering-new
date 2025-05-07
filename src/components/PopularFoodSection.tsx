import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FoodItemCard from "./FoodItemCard";
import { popularFoods } from "@/services/data";

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
