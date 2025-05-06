
const steps = [
  {
    icon: "📍",
    title: "Set Your Location",
    description:
      "Enable location access or enter your address manually for accurate delivery.",
  },
  {
    icon: "🍽️",
    title: "Choose the food you want",
    description:
      "Browse through hundreds of restaurants and thousands of dishes.",
  },
  {
    icon: "💳",
    title: "Confirm order with payment",
    description:
      "Select from multiple payment methods and confirm your delicious order.",
  },
  {
    icon: "⏱️",
    title: "Within 30 minutes you get your food",
    description:
      "Track your order in real-time as our delivery partners bring it to you.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="public/lovable-uploads/a5feaaa9-1359-45bc-a6b5-a5662027860b.png"
              alt="Mobile food ordering"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 bg-white px-5 py-3 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  🍔
                </div>
                <div>
                  <p className="font-bold">5000+</p>
                  <p className="text-gray-500 text-sm">Food Items</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/4 bg-white px-5 py-3 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-yellow-100 text-yellow-600 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  ⏱️
                </div>
                <div>
                  <p className="font-bold">Delivery in 30 minutes</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/3 right-0 transform translate-x-1/3 bg-white px-5 py-3 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  ❓
                </div>
                <div>
                  <p className="font-bold">Confused! How to use?</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A very Simple Process to Make Order Your Favourite Foods
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center text-xl mr-4 shrink-0">
                    <span>{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 btn-hover-effect">
                Order Food Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
