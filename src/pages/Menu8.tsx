
import { useState, useEffect } from "react";
import { categoryData } from "@/services/data";
import ProductCard from "@/components/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";

const Menu8 = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "featured", label: "Featured", data: [...categoryData.fastFood.slice(0, 4), ...categoryData.mainCourse.slice(0, 4)] },
    { id: "fastfood", label: "Fast Food", data: categoryData.fastFood },
    { id: "drinks", label: "Drinks", data: categoryData.drinks },
    { id: "starters", label: "Starters", data: categoryData.starters },
    { id: "maincourse", label: "Main Course", data: categoryData.mainCourse },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Approximate height of the navbar
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-[url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center h-[60vh] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Menu Showcase</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Scroll through our divine selections
          </p>
          <button 
            onClick={() => scrollToSection("featured")}
            className="flex items-center gap-2 mx-auto bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Explore Menu <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto pb-2 no-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`whitespace-nowrap font-medium text-lg px-1 pb-1 border-b-2 transition-colors ${
                  activeSection === section.id 
                    ? "text-primary border-primary" 
                    : "text-gray-500 border-transparent hover:text-gray-800"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-2">{section.label}</h2>
            <p className="text-gray-600 mb-6">
              {section.id === "featured" 
                ? "Our specially selected dishes that you must try"
                : `Explore our delicious ${section.label.toLowerCase()} options`}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.data.map((product) => (
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
            
            <Separator className="mt-16" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu8;
