import { categoryData } from "@/services/data";

const DrinksCategory = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {categoryData.drinks.map((drink) => (
          <div key={drink.id} className="mb-12">
            <img
              src={drink.image}
              alt={drink.name}
              className="w-full h-[550px] object-cover rounded-lg mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-2xl font-bold lowercase">{drink.name}</h2>
                {/* Optional: Add translation here */}
                <div className="text-lg font-normal text-gray-700">شاي مثلج بالليمون</div>
              </div>
              <div className="text-2xl font-bold">{drink.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DrinksCategory;
