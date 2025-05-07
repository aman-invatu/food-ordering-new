import { specialDishes } from "@/services/data";

const SpecialDishesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Special Dishes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our chef's special creations, crafted with the finest ingredients and prepared with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialDishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Special
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${dish.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialDishesSection;
