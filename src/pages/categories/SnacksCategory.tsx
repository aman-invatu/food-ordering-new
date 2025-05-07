import { useCart } from "@/context/CartContext";
import { categoryData } from "@/services/data";
import { FoodItem } from "@/components/FoodItemCard";

const SnacksCategory = () => {
  const { cartItems, addToCart } = useCart();
  const snacks = categoryData.snacks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4 text-center">Snacks Stacked</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Enjoy our snacks in a clean, modern stacked card layout. Perfect for quick browsing!
        </p>
        <div className="flex flex-col gap-8">
          {snacks.map((item: FoodItem) => {
            const cartItem = cartItems.find(ci => ci.id === item.id);
            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="md:w-1/3 w-full h-56 md:h-auto flex-shrink-0 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Price badge */}
                  <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-lg font-bold shadow">
                    ${item.price}
                  </span>
                  {/* Rating badge */}
                  <span className="absolute top-4 right-4 bg-yellow-300 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75l-6.172 3.245 1.179-6.873L2 9.505l6.908-1.004L12 2.75l3.092 5.751L22 9.505l-5.007 4.617 1.179 6.873z" /></svg>
                    {item.rating}
                  </span>
                </div>
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                    <span className="inline-block bg-white text-orange-500 px-3 py-1 rounded-full text-xs font-semibold shadow mb-2">
                      {item.preparationTime}
                    </span>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all duration-200 flex items-center gap-2 text-lg group-hover:scale-105 ${cartItem ? 'bg-green-500 text-white cursor-default' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                      onClick={() => !cartItem && addToCart(item)}
                      disabled={!!cartItem}
                    >
                      {cartItem ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          Added
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SnacksCategory;
