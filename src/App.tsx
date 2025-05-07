
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

// Layouts and Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import Restaurants from "@/pages/Restaurants";
import RestaurantDetail from "@/pages/RestaurantDetail";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import CheckoutSuccess from "@/pages/CheckoutSuccess";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Orders from "@/pages/Orders";
import OrderDetail from "@/pages/OrderDetail";

// Cuisine Pages
import IndianCuisine from "@/pages/cuisines/IndianCuisine";
import ChineseCuisine from "@/pages/cuisines/ChineseCuisine";

// Category Pages
import FastFoodCategory from "@/pages/categories/FastFoodCategory";
import DrinksCategory from "@/pages/categories/DrinksCategory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/restaurant/:id" element={<RestaurantDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout-success" element={<CheckoutSuccess />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order/:id" element={<OrderDetail />} />
                
                {/* Cuisine Routes */}
                <Route path="/cuisine/indian" element={<IndianCuisine />} />
                <Route path="/cuisine/chinese" element={<ChineseCuisine />} />
                <Route path="/cuisine/italian" element={<IndianCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/mexican" element={<ChineseCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/japanese" element={<IndianCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/thai" element={<ChineseCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/mediterranean" element={<IndianCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/american" element={<ChineseCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/french" element={<IndianCuisine />} /> {/* Reusing template for now */}
                <Route path="/cuisine/korean" element={<ChineseCuisine />} /> {/* Reusing template for now */}
                
                {/* Category Routes */}
                <Route path="/category/fast-food" element={<FastFoodCategory />} />
                <Route path="/category/drinks" element={<DrinksCategory />} />
                <Route path="/category/dinner" element={<FastFoodCategory />} /> {/* Reusing template for now */}
                <Route path="/category/lunch" element={<DrinksCategory />} /> {/* Reusing template for now */}
                <Route path="/category/coffee" element={<FastFoodCategory />} /> {/* Reusing template for now */}
                <Route path="/category/breakfast" element={<DrinksCategory />} /> {/* Reusing template for now */}
                <Route path="/category/desserts" element={<FastFoodCategory />} /> {/* Reusing template for now */}
                <Route path="/category/snacks" element={<DrinksCategory />} /> {/* Reusing template for now */}
                <Route path="/category/healthy" element={<FastFoodCategory />} /> {/* Reusing template for now */}
                <Route path="/category/beverages" element={<DrinksCategory />} /> {/* Reusing template for now */}
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
