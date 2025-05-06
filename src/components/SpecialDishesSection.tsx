
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const dishes = [
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

const SpecialDishesSection = () => {
  const [expandedDish, setExpandedDish] = useState<string | null>(null);

  const handleToggleDescription = (id: string) => {
    setExpandedDish(expandedDish === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-16">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mr-6">
              <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.25C7.99594 5.25 4.75 8.49594 4.75 12.5V19.25H19.25V12.5C19.25 8.49594 16.0041 5.25 12 5.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2.75V5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.75 2.75L14 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.25 2.75L10 5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.25 19.25H4.75V21.25H19.25V19.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.75 12.5H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 10.25V14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-bold">
                Our Special <span className="text-yellow-400">Dishes</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10">
            {dishes.map((dish) => (
              <div key={dish.id} className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <button
                  onClick={() => handleToggleDescription(dish.id)}
                  className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
                
                {expandedDish === dish.id && (
                  <div className="mt-4 bg-white p-4 rounded-lg shadow-lg text-left animate-fade-in">
                    <p className="text-gray-700 mb-2">{dish.description}</p>
                    <p className="text-lg font-bold text-primary mb-3">${dish.price.toFixed(2)}</p>
                    <Button asChild className="w-full bg-primary hover:bg-primary-600">
                      <Link to="/menu">Order Now</Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDishesSection;
