
import { categoryData } from "@/services/data";
import ProductCard from "@/components/products/ProductCard";

const Menu6 = () => {
  const categories = [
    { name: "Fast Food", data: categoryData.fastFood, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000" },
    { name: "Drinks", data: categoryData.drinks, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" },
    { name: "Starters", data: categoryData.starters, image: "https://images.unsplash.com/photo-1541014741257-de529411b96a?auto=format&fit=crop&q=80&w=1000" },
    { name: "Main Course", data: categoryData.mainCourse, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            A culinary journey through our finest offerings
          </p>
        </div>
      </div>

      {categories.map((category, index) => (
        <section 
          key={category.name} 
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-1/3">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="rounded-lg shadow-lg object-cover w-full h-64"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                <p className="text-gray-600 mb-6">
                  Explore our delicious selection of {category.name.toLowerCase()} prepared with the finest ingredients
                  by our experienced chefs.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          </div>
        </section>
      ))}
    </div>
  );
};

export default Menu6;
