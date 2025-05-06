
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RestaurantCard from "./RestaurantCard";

const restaurants = [
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
];

interface RestaurantsSectionProps {
  title?: string;
}

const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({ title = "Top Restaurants" }) => {
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
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="w-72">
              <RestaurantCard
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                rating={restaurant.rating}
                categories={restaurant.categories}
                deliveryTime={restaurant.deliveryTime}
                price={restaurant.price}
                promotion={restaurant.promotion}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
