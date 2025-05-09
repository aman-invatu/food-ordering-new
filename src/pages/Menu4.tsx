
import { categoryData } from "@/services/data";
import ProductCard from "@/components/products/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu4 = () => {
  const categories = [
    { id: "fastfood", label: "Fast Food", data: categoryData.fastFood },
    { id: "drinks", label: "Drinks", data: categoryData.drinks },
    { id: "starters", label: "Starters", data: categoryData.starters },
    { id: "maincourse", label: "Main Course", data: categoryData.mainCourse },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Menu Explorer</h1>
          <p className="mt-4 text-gray-300 text-center text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5')] opacity-30 bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Tabs defaultValue="fastfood" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.data.map((product) => (
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Menu4;
