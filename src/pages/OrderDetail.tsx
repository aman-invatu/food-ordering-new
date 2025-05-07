
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Package, 
  ArrowLeft, 
  Check, 
  Truck, 
  MapPin,
  Phone,
  User,
  Clock,
  Receipt,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock order data (would be fetched based on ID in a real app)
const mockOrder = {
  id: "ORD-38291",
  date: "2025-05-01",
  time: "19:30",
  status: "delivered",
  items: [
    {
      id: "1",
      name: "Classic Margherita Pizza",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      options: ["Extra Cheese", "Thin Crust"]
    },
    {
      id: "2",
      name: "Double Cheeseburger",
      price: 9.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      options: ["No Pickles"]
    },
  ],
  subtotal: 35.97,
  deliveryFee: 3.99,
  tax: 4.00,
  total: 43.96,
  restaurant: {
    name: "Pizza Palace",
    address: "456 Pizza Ave, New York, NY 10001",
    phone: "(212) 555-1234",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  },
  customer: {
    name: "John Doe",
    phone: "(555) 123-4567",
    email: "john@example.com"
  },
  deliveryAddress: "123 Main St, New York, NY 10001",
  paymentMethod: "Credit Card (••••4242)",
  timeline: [
    {
      status: "ordered",
      time: "19:30",
      date: "2025-05-01",
      description: "Order placed successfully"
    },
    {
      status: "confirmed",
      time: "19:32",
      date: "2025-05-01",
      description: "Restaurant confirmed your order"
    },
    {
      status: "preparing",
      time: "19:45",
      date: "2025-05-01",
      description: "Restaurant is preparing your food"
    },
    {
      status: "delivering",
      time: "20:10",
      date: "2025-05-01",
      description: "Order is out for delivery"
    },
    {
      status: "delivered",
      time: "20:35",
      date: "2025-05-01",
      description: "Order delivered successfully"
    }
  ]
};

type OrderStatus = "ordered" | "confirmed" | "preparing" | "delivering" | "delivered" | "cancelled";

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "ordered":
      return "bg-blue-500";
    case "confirmed":
      return "bg-indigo-500";
    case "preparing":
      return "bg-yellow-500";
    case "delivering":
      return "bg-orange-500";
    case "delivered":
      return "bg-green-500";
    case "cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusIcon = (status: OrderStatus) => {
  switch (status) {
    case "ordered":
      return <Package className="h-5 w-5" />;
    case "confirmed":
      return <Check className="h-5 w-5" />;
    case "preparing":
      return <Clock className="h-5 w-5" />;
    case "delivering":
      return <Truck className="h-5 w-5" />;
    case "delivered":
      return <Check className="h-5 w-5" />;
    case "cancelled":
      return <XCircle className="h-5 w-5" />;
    default:
      return <Package className="h-5 w-5" />;
  }
};

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, you would fetch the order data based on the ID
  
  const [isLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-10 flex justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  // Use the mock data for now
  const order = mockOrder;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <Link to="/orders" className="flex items-center text-primary mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span>Back to Orders</span>
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="text-3xl font-bold">Order #{order.id}</h1>
          <div className="mt-2 md:mt-0">
            <Badge className={`${getStatusColor(order.status as OrderStatus)} capitalize text-white`}>
              {getStatusIcon(order.status as OrderStatus)}
              <span className="ml-1">{order.status}</span>
            </Badge>
          </div>
        </div>
        <p className="text-gray-500">
          Placed on {new Date(order.date).toLocaleDateString()} at {order.time}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Order Items */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Order Items</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.options && item.options.length > 0 && (
                        <p className="text-gray-500 text-sm">
                          {item.options.join(", ")}
                        </p>
                      )}
                      <p className="text-gray-600 mt-1">
                        {item.quantity} × ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Order Timeline</h2>
            </div>
            <div className="p-6">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 h-full w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {order.timeline.map((event, index) => (
                    <div key={index} className="relative pl-12">
                      <div className={`absolute left-1 top-1 h-6 w-6 rounded-full flex items-center justify-center ${getStatusColor(event.status as OrderStatus)}`}>
                        {getStatusIcon(event.status as OrderStatus)}
                      </div>
                      <div>
                        <p className="font-semibold capitalize">{event.status}</p>
                        <p className="text-gray-500 text-sm">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                        <p className="mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Order Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${order.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <p className="flex items-center text-gray-600">
                  <Receipt className="h-4 w-4 mr-2" />
                  <span>Payment Method: {order.paymentMethod}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Restaurant Info */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Restaurant</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={order.restaurant.image}
                  alt={order.restaurant.name}
                  className="w-12 h-12 object-cover rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{order.restaurant.name}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{order.restaurant.address}</span>
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{order.restaurant.phone}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Delivery Information</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  <span>{order.customer.name}</span>
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{order.customer.phone}</span>
                </p>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{order.deliveryAddress}</span>
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary-600">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
