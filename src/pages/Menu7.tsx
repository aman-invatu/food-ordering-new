
import { useState } from "react";
import { categoryData } from "@/services/data";
import ProductCard from "@/components/products/ProductCard";
import { Badge } from "@/components/ui/badge";

const Menu7 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Combine all products
  const allProducts = [
    ...categoryData.fastFood,
    ...categoryData.drinks,
    ...categoryData.starters,
    ...categoryData.mainCourse,
  ];
  
  // Filter products based on search term
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof allProducts>);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Delicious Menu</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Discover a world of taste with our expertly crafted dishes
          </p>
          
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search dishes or categories..."
              className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {Object.entries(groupedProducts).length > 0 ? (
          Object.entries(groupedProducts).map(([category, products]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl font-bold">{category}</h2>
                <Badge variant="outline" className="text-sm">
                  {products.length} items
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
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
          ))
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-medium text-gray-500">No items match your search</h3>
            <p className="mt-2 text-gray-400">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu7;
