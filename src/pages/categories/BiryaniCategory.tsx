
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { categoryData } from "@/services/data";

const BiryaniCategory = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // For demo purposes, creating a simple data structure for biryanis
  const biryaniCategories = [
    { id: "veg", name: "Vegetarian Biryanis" },
    { id: "chicken", name: "Chicken Biryanis" },
    { id: "mutton", name: "Mutton Biryanis" },
    { id: "special", name: "Special Biryanis" },
  ];

  // Using mainCourse data as placeholder
  const biryaniMenuItems = categoryData.mainCourse.map((item, index) => ({
    ...item,
    id: `biryani-${index}`,
    name: `${["Classic", "Royal", "Special", "Family Pack"][index % 4]} ${
      ["Chicken", "Veg", "Mutton", "Paneer"][index % 4]
    } Biryani`,
    category: biryaniCategories[index % 4].id,
    description: `Aromatic basmati rice cooked with ${
      ["chicken", "vegetables", "mutton", "paneer"][index % 4]
    }, herbs, and authentic spices. Served with raita and salan.`,
    price: Math.floor(index % 4 + 1) * 4 + 7.99
  }));

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDialog = (item: any) => {
    alert(`Add to cart: ${item.name}`);
  };

  // Images for biryani categories
  const biryaniCategoryImages = {
    "veg": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=80",
    "chicken": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1400&q=80",
    "mutton": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1400&q=80",
    "special": "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=1400&q=80",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Menu List Header */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-[80px] font-extralight text-gray-800 mb-4 tracking-wide">Biryani Collection</h1>
          <p className="text-xl text-gray-400 font-light tracking-wider">Explore our aromatic and flavorful biryanis</p>
        </div>
      </div>

      <div className="flex flex-1 relative">
        {/* Left sidebar - Sticky */}
        <div className="w-[250px] relative ml-[200px]">
          <div className="sticky top-4 pl-8 py-8 bg-[#222222] text-white">
            <div className="flex flex-col gap-6">
              {biryaniCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="block text-left hover:text-gray-300 transition-colors text-sm tracking-wider"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="max-w-[800px]">
            {biryaniCategories.map((category) => (
              <div
                key={category.id}
                ref={el => (sectionRefs.current[category.id] = el)}
                className="mb-16"
              >
                {/* Category banner */}
                <div className="relative">
                  <div
                    className="h-[250px] w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${biryaniCategoryImages[category.id]}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-extralight text-white tracking-wider">
                      {category.name}
                    </h2>
                  </div>
                </div>

                {/* Menu items */}
                <div className="px-8">
                  {biryaniMenuItems
                    .filter(item => item.category === category.id)
                    .map(item => (
                      <div key={item.id} className="py-6 border-b border-gray-100">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-base text-gray-800 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-gray-400 text-right whitespace-nowrap">
                              <span className="text-xs mr-1">from</span>
                              <span className="text-base">${item.price.toFixed(2)}</span>
                            </div>
                            <Button
                              variant="outline"
                              className="border border-gray-300 text-gray-600 hover:border-gray-400 transition-colors h-8 text-xs px-6 rounded"
                              onClick={() => openDialog(item)}
                            >
                              ADD TO CART
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiryaniCategory;
