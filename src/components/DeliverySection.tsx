
const DeliverySection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Want to Earn Extra With us? Join as a Delivery Partner
            </h2>
            <p className="text-white/80">
              Join our team of delivery partners and earn competitive pay with
              flexible hours. Be your own boss, set your own schedule, and make
              money delivering food to hungry customers in your community.
            </p>
            <div className="mt-8">
              <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 btn-hover-effect">
                Apply Now
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <img
                src="public/lovable-uploads/a4c30c2d-1915-429d-a6c1-3167830e3451.png"
                alt="Delivery partner"
                className="w-full rounded-lg z-10 relative"
              />
              <div className="absolute top-1/4 right-0 transform translate-x-1/4 bg-white px-5 py-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="bg-primary/20 text-primary h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    📋
                  </div>
                  <div>
                    <p className="font-bold">65 Orders Completed Today</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 bg-white px-5 py-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center">
                  <div className="bg-primary/20 text-primary h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    💰
                  </div>
                  <div>
                    <p className="font-bold">Earning This Month $880</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
