import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  children: React.ReactNode;
  imageUrl: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, children, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const scrollByCard = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350 + 24; // card width + gap (gap-x-6 = 1.5rem = 24px)
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mb-8">
      <div 
        className="max-w-6xl mx-auto w-full h-48 bg-center bg-cover relative mb-8 flex items-center justify-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex justify-between items-center w-full px-8">
          <h2 className="text-6xl font-light text-white tracking-wide">{title}</h2>
          <button 
            onClick={toggleOpen} 
            className={`text-white bg-transparent hover:bg-white/20 rounded-full p-2 transition-all duration-500 ease-in-out transform ${
              isOpen ? 'rotate-180 bg-white/10' : ''
            }`}
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
      
      <div 
        className="max-w-6xl mx-auto overflow-hidden transition-all duration-700 ease-in-out relative"
        style={{ 
          maxHeight: isOpen ? '2000px' : '0',
          opacity: isOpen ? '1' : '0',
          transform: `translateY(${isOpen ? '0' : '-20px'})`,
          marginBottom: isOpen ? '2rem' : '0'
        }}
      >
        {/* Arrow Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow rounded-full p-2 hover:bg-gray-100 transition disabled:opacity-30"
          style={{ display: isOpen ? 'block' : 'none' }}
          onClick={() => scrollByCard('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow rounded-full p-2 hover:bg-gray-100 transition disabled:opacity-30"
          style={{ display: isOpen ? 'block' : 'none' }}
          onClick={() => scrollByCard('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={28} />
        </button>
        <div
          ref={scrollRef}
          className="bg-white rounded-lg border px-8 py-8 flex flex-row gap-x-6 overflow-x-auto scrollbar-thin transition-transform duration-700 ease-in-out"
          style={{ minWidth: 0 }}
        >
          {React.Children.map(children, (child) => (
            <div style={{ minWidth: '350px', maxWidth: '350px', flex: '0 0 350px' }}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
