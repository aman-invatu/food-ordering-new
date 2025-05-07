import { categoryData } from "@/services/data";

const LunchCategory = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extralight text-gray-800 mb-2 tracking-wide">Lunch Menu</h1>
          <p className="text-lg text-gray-500 font-light tracking-wider">
            Enjoy our delicious lunch options, perfect for a midday break!
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {categoryData.lunch.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white rounded-2xl shadow-lg overflow-hidden`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              <div className="flex flex-col justify-center p-8 flex-1">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h2>
                <p className="text-gray-500 mb-4">{item.description}</p>
                <div className="flex items-center gap-6">
                  <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                  <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-700 transition-colors text-base font-medium shadow">
                    Add to Cart
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

export default LunchCategory;
