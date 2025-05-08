
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="text-3xl font-bold text-primary mb-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mr-3">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <span>FoodiHub</span>
      </div>
      
      {/* Plate animation */}
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin-slow"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-600 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-gray-500 mt-4">Loading your delicious experience...</p>
    </div>
  );
};

export default PageLoader;
