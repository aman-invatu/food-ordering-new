
import { Link } from "react-router-dom";
import { Check, Home, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

const CheckoutSuccess = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-100 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
          <Check className="h-12 w-12 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-3 text-green-600">Order Placed Successfully!</h1>
        <p className="text-xl mb-6">Thank you for your order</p>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="border-b pb-4 mb-4">
            <p className="text-gray-500">Order Reference</p>
            <p className="text-lg font-semibold">#ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
          
          <div className="space-y-3 text-left">
            <p className="text-gray-600">Your order has been confirmed and will be on its way shortly.</p>
            <p className="text-gray-600">You will receive a confirmation email with your order details.</p>
            <p className="text-gray-600">Estimated delivery time: <span className="font-semibold">30 minutes</span></p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/orders">
            <Button variant="outline" className="space-x-2">
              <Receipt className="h-4 w-4" />
              <span>View Orders</span>
            </Button>
          </Link>
          
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-600 space-x-2">
              <Home className="h-4 w-4" />
              <span>Return to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
