
import { useState } from "react";
import { categoryData } from "@/services/data";
import ProductCard from "@/components/products/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Menu3 = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const allProducts = [
    ...categoryData.fastFood,
    ...categoryData.drinks,
    ...categoryData.starters,
    ...categoryData.mainCourse,
  ];

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Our Menu</h1>
          <p className="mt-4 text-white text-center text-lg max-w-2xl mx-auto">
            Explore our exceptional selection of dishes crafted with premium ingredients
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Menu Collection</h2>
          <div className="w-64">
            <Select
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="burger">Burgers</SelectItem>
                <SelectItem value="pizza">Pizzas</SelectItem>
                <SelectItem value="drink">Drinks</SelectItem>
                <SelectItem value="starter">Starters</SelectItem>
                <SelectItem value="main">Main Course</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu3;
