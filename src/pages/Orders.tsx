
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Package, 
  Clock, 
  Eye, 
  ChevronDown, 
  ChevronUp,
  Truck,
  Check,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock order data
const mockOrders = [
  {
    id: "ORD-38291",
    date: "2025-05-01",
    status: "delivered",
    items: [
      {
        id: "1",
        name: "Classic Margherita Pizza",
        price: 12.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      },
      {
        id: "2",
        name: "Double Cheeseburger",
        price: 9.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
    ],
    total: 35.97,
    restaurant: "Pizza Palace",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-38275",
    date: "2025-04-28",
    status: "processing",
    items: [
      {
        id: "3",
        name: "Chicken Biryani",
        price: 14.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      },
    ],
    total: 14.99,
    restaurant: "Spice Garden",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-38269",
    date: "2025-04-22",
    status: "delivered",
    items: [
      {
        id: "4",
        name: "Chocolate Cake",
        price: 8.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      },
      {
        id: "5",
        name: "Vegetable Salad Bowl",
        price: 10.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      },
    ],
    total: 19.98,
    restaurant: "Garden Fresh",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-38247",
    date: "2025-04-15",
    status: "cancelled",
    items: [
      {
        id: "6",
        name: "Chicken Club Sandwich",
        price: 11.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821",
      },
    ],
    total: 23.98,
    restaurant: "Sandwich Studio",
    deliveryAddress: "123 Main St, New York, NY 10001",
  },
];

type OrderStatus = "processing" | "delivered" | "cancelled";

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "processing":
      return "bg-blue-500";
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
    case "processing":
      return <Clock className="h-4 w-4" />;
    case "delivered":
      return <Check className="h-4 w-4" />;
    case "cancelled":
      return <XCircle className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
};

const Orders = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const toggleOrder = (orderId: string) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {mockOrders.length > 0 ? (
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-lg overflow-hidden shadow-sm"
            >
              {/* Order Header */}
              <div className="p-4 md:p-6 border-b flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{order.id}</span>
                  </div>
                  <div className="text-gray-500">
                    {new Date(order.date).toLocaleDateString()}
                  </div>
                  <Badge className={`${getStatusColor(order.status as OrderStatus)} flex items-center space-x-1`}>
                    {getStatusIcon(order.status as OrderStatus)}
                    <span className="capitalize">{order.status}</span>
                  </Badge>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-semibold">
                    ${order.total.toFixed(2)}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-1"
                    onClick={() => toggleOrder(order.id)}
                  >
                    <span>{expandedOrder === order.id ? "Hide Details" : "View Details"}</span>
                    {expandedOrder === order.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Order Details (Expanded) */}
              {expandedOrder === order.id && (
                <div className="p-4 md:p-6 animate-fade-in">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Order Items</h3>
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-gray-500">
                              {item.quantity} × ${item.price.toFixed(2)}
                            </div>
                          </div>
                          <div className="font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Restaurant</h3>
                      <p>{order.restaurant}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Delivery Address</h3>
                      <p>{order.deliveryAddress}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t flex justify-between items-center">
                    <div className="flex items-center text-primary">
                      {order.status === "delivered" ? (
                        <>
                          <Check className="h-5 w-5 mr-1" />
                          <span>Delivered on {new Date(order.date).toLocaleDateString()}</span>
                        </>
                      ) : order.status === "processing" ? (
                        <>
                          <Truck className="h-5 w-5 mr-1" />
                          <span>Delivery in progress</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-5 w-5 mr-1" />
                          <span>Order was cancelled</span>
                        </>
                      )}
                    </div>
                    <Link to={`/order/${order.id}`}>
                      <Button size="sm" className="bg-primary hover:bg-primary-600 flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        View Order
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">No Orders Yet</h2>
          <p className="text-gray-500 mb-6">
            You haven't placed any orders yet. Browse our menu and place your first order!
          </p>
          <Link to="/menu">
            <Button className="bg-primary hover:bg-primary-600">Browse Menu</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
