
const AppPromoSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <div className="relative z-10 animate-float">
                  <img
                    src="public/lovable-uploads/90c766be-aa43-494d-b535-5a7e6bbd78e5.png"
                    alt="Mobile app"
                    className="w-full max-w-sm mx-auto"
                  />
                </div>
                
                <div className="absolute top-0 left-0 w-full h-full z-0">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
                    <path 
                      fill="#FF5722" 
                      d="M45.1,-74.5C58.2,-67.7,68.8,-55.3,76.5,-41.2C84.3,-27.2,89.2,-11.4,88,3.9C86.9,19.2,79.7,34.1,69.8,46.5C60,58.9,47.5,68.9,33.4,74.1C19.3,79.4,3.6,80,-10.7,76.2C-25,72.4,-38,64.3,-48.5,53.9C-59,43.6,-67.1,31,-71.1,17.1C-75.2,3.2,-75.3,-11.7,-70.9,-25.2C-66.5,-38.7,-57.8,-50.6,-46,-60.1C-34.2,-69.6,-19.2,-76.6,-2.8,-72.7C13.5,-68.9,32.1,-81.3,45.1,-74.5Z" 
                      transform="translate(100 100)" 
                    />
                  </svg>
                </div>
                
                <div className="hexagon-container absolute top-0 left-0 w-full h-full">
                  <div className="hexagon-item" style={{ top: '15%', left: '10%' }}>
                    <img
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                      alt="Food item"
                      className="w-14 h-14 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  
                  <div className="hexagon-item" style={{ bottom: '20%', left: '15%' }}>
                    <img
                      src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                      alt="Food item"
                      className="w-12 h-12 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  
                  <div className="hexagon-item" style={{ top: '30%', right: '10%' }}>
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60"
                      alt="Food item"
                      className="w-16 h-16 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                  
                  <div className="hexagon-item" style={{ bottom: '25%', right: '15%' }}>
                    <img
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60"
                      alt="Food item"
                      className="w-14 h-14 object-cover rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </div>
              
              <button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold flex items-center justify-center mx-auto mt-8 btn-hover-effect">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Now
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              It's More Easy to Order By Mobile App
            </h2>
            <p className="text-gray-600 mb-8">
              Download our mobile app for a faster, more convenient way to order your favorite food. Get exclusive app-only deals and track your delivery in real-time. Available on iOS and Android platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transform transition hover:scale-105">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
              <a href="#" className="transform transition hover:scale-105">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">50k+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">4.8</div>
                <p className="text-gray-600">App Rating</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">1k+</div>
                <p className="text-gray-600">Daily Downloads</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary">250k+</div>
                <p className="text-gray-600">Orders Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromoSection;
