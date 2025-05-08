
import CategorySection from "./categories/CategorySection";
import ProductCard from "@/components/products/ProductCard";
import { categoryData } from "@/services/data";
import { Link } from "react-router-dom";

const burgerImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
const pizzaImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
const drinksImage = "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
const fastFoodImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
const startersImage = "https://images.unsplash.com/photo-1541014741257-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
const mainCourseImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";
const lassiImage = "https://images.unsplash.com/photo-1560035285-64808ba47bda?auto=format&fit=crop&w=1200&q=80";
const biryaniImage = "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80";

const burgers = categoryData.fastFood.filter(item => item.category === "Burger");
const pizzas = categoryData.fastFood.filter(item => item.category === "Pizza");

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="bg-gray-50 py-14 text-center">
          <h1 className="text-4xl font-thin tracking-[.15em] mb-4 text-gray-800">Menu Grid</h1>
          <p className="text-1xl text-gray-400 font-extralight tracking-[.15em]">Some informations about our restaurant</p>
        </div>

        {/* Quick category links */}
        <div className="bg-white py-6 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center flex-wrap gap-4">
              <Link to="/category/lassi" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Lassi
              </Link>
              <Link to="/category/biryani" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Biryani
              </Link>
              <Link to="/category/paneer" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Paneer
              </Link>
              <Link to="/category/pickle" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Pickle
              </Link>
              <Link to="/category/salad" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Salad
              </Link>
              <Link to="/category/chai" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Chai
              </Link>
              <Link to="/category/drinks" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Drinks
              </Link>
              <Link to="/category/fast-food" className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-primary text-sm font-medium transition-colors">
                Fast Food
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12">
          <CategorySection title="Lassi" imageUrl={lassiImage}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1">
                <p className="text-gray-500">Refreshing yogurt-based drinks with various flavors</p>
              </div>
              <Link to="/category/lassi" className="text-primary hover:underline">
                View all
              </Link>
            </div>
            {categoryData.drinks.slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={`${["Mango", "Rose", "Sweet", "Salted"][Math.floor(Math.random() * 4)]} Lassi`}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>

          <CategorySection title="Biryani" imageUrl={biryaniImage}>
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1">
                <p className="text-gray-500">Aromatic rice dishes with various flavors and spices</p>
              </div>
              <Link to="/category/biryani" className="text-primary hover:underline">
                View all
              </Link>
            </div>
            {categoryData.mainCourse.slice(0, 4).map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={`${["Chicken", "Mutton", "Veg", "Special"][Math.floor(Math.random() * 4)]} Biryani`}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
        
          <CategorySection title="Drinks" imageUrl={drinksImage}>
            {categoryData.drinks.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
          <CategorySection title="Burgers" imageUrl={burgerImage}>
            {burgers.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
          <CategorySection title="Pizza" imageUrl={pizzaImage}>
            {pizzas.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
        
          <CategorySection title="Fast Food" imageUrl={fastFoodImage}>
            {categoryData.fastFood.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
          <CategorySection title="Starters" imageUrl={startersImage}>
            {categoryData.starters.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
          <CategorySection title="Main Course" imageUrl={mainCourseImage}>
            {categoryData.mainCourse.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
              />
            ))}
          </CategorySection>
        </div>
      </main>
    </div>
  );
};

export default Menu;
