
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast.success("Order placed successfully!");
      clearCart();
      navigate("/checkout-success");
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
            <ShoppingCart className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/menu">
            <Button className="bg-primary hover:bg-primary-600 text-white">
              Browse Menu
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <h2 className="text-xl font-semibold">Items ({cartItems.length})</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gray-500"
                  onClick={() => {
                    clearCart();
                    toast.info("Cart has been cleared");
                  }}
                >
                  <Trash className="h-4 w-4 mr-1" /> Clear Cart
                </Button>
              </div>
              
              <div>
                {cartItems.map((item) => (
                  <div 
                    key={item.id}
                    className="py-4 border-b last:border-0 flex items-center animate-fade-in"
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <div className="text-primary font-bold mt-1">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center border rounded-md mr-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-3 py-1 text-center w-10">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          toast.info(`${item.name} removed from cart`);
                        }}
                        className="text-gray-400 hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4 border-b pb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>$4.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              
              <div className="pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${(getCartTotal() + 4.99 + getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                className="w-full bg-primary hover:bg-primary-600 text-white mb-3"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </Button>
              
              <Link to="/menu">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
