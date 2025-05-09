
import { useState } from "react";
import { categoryData } from "@/services/data";
import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";

const Menu5 = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Fast Food", "Drinks", "Starters", "Main Course"];
  
  const getCategoryData = (category: string) => {
    switch (category) {
      case "Fast Food": return categoryData.fastFood;
      case "Drinks": return categoryData.drinks;
      case "Starters": return categoryData.starters;
      case "Main Course": return categoryData.mainCourse;
      default: return [
        ...categoryData.fastFood,
        ...categoryData.drinks,
        ...categoryData.starters,
        ...categoryData.mainCourse
      ];
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-amber-400 to-red-600 py-24 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Food Exploration</h1>
        <p className="text-white text-lg max-w-2xl mx-auto px-4">
          Discover the finest selection of cuisines prepared by our expert chefs
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } transition-colors font-medium`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {getCategoryData(activeCategory).map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard 
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu5;
