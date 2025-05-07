import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { dinnerMenuItems, dinnerCategories, dinnerCategoryImages } from "@/services/data";

const DinnerCategory = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openDialog = (item: any) => {
    // Implement your add-to-cart dialog/modal here
    alert(`Add to cart: ${item.name}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Menu List Header */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-[80px] font-extralight text-gray-800 mb-4 tracking-wide">Menu List</h1>
          <p className="text-xl text-gray-400 font-light tracking-wider">Some informations about our restaurant</p>
        </div>
      </div>

      <div className="flex flex-1 relative">
        {/* Left sidebar - Sticky */}
        <div className="w-[250px] relative ml-[200px]">
          <div className="sticky top-4 pl-8 py-8 bg-[#222222] text-white">
            <div className="flex flex-col gap-6">
              {dinnerCategories.map((category) => (
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
            {dinnerCategories.map((category) => (
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
                      backgroundImage: `url('${dinnerCategoryImages[category.id] || `https://source.unsplash.com/random/1400x800/?${category.id}`}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-6xl font-extralight text-white tracking-wider">
                      {category.name.charAt(0).toUpperCase() + category.name.slice(1).toLowerCase()}
                    </h2>
                  </div>
                </div>

                {/* Menu items */}
                <div className="px-8">
                  {dinnerMenuItems
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

export default DinnerCategory;
