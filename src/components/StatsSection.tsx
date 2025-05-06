
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Restaurants", value: "400+" },
  { label: "Food Items", value: "3000+" },
  { label: "Monthly Orders", value: "15k+" },
  { label: "Happy Customers", value: "10k+" },
];

const StatsSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  // Extract numeric values from stats
  const maxValues = stats.map(stat => {
    const value = stat.value;
    if (value.includes("k+")) {
      return parseInt(value) * 1000;
    }
    return parseInt(value);
  });

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((_, index) => {
        const maxValue = maxValues[index];
        const step = Math.ceil(maxValue / 50); // Complete animation in ~50 steps
        const duration = 2000; // 2 seconds animation
        const interval = duration / 50;
        
        return setInterval(() => {
          setCounters(prev => {
            const newValues = [...prev];
            if (newValues[index] < maxValue) {
              newValues[index] = Math.min(newValues[index] + step, maxValue);
            }
            return newValues;
          });
        }, interval);
      });
      
      return () => {
        intervals.forEach(interval => clearInterval(interval));
      }
    }
  }, [inView, maxValues]);

  const formatValue = (value, index) => {
    if (stats[index].value.includes("k+")) {
      return `${Math.floor(value / 1000)}k+`;
    }
    return `${value}+`;
  };

  return (
    <section ref={ref} className="bg-secondary py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Enjoy 3000+ Foods from 400+ Restaurants
          </h2>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
              <Link to="/menu">Order Now</Link>
            </Button>
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
                {formatValue(counters[index], index)}
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
