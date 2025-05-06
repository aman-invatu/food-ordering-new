
const stats = [
  { label: "Restaurants", value: "400+" },
  { label: "Food Items", value: "3000+" },
  { label: "Monthly Orders", value: "15k+" },
  { label: "Happy Customers", value: "10k+" },
];

const StatsSection = () => {
  return (
    <section className="bg-secondary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Enjoy 3000+ Foods from 400+ Restaurants
          </h2>
          <div className="flex justify-center mt-8">
            <button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 btn-hover-effect">
              Order Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
