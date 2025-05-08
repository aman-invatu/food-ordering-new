
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { useEffect, useState } from "react";

// Layouts and Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import PageLoader from "@/components/ui/page-loader";

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
import AmericanCuisine from "./pages/cuisines/AmericalCuisine";
import FrenchCuisine from "./pages/cuisines/FrenchCuisine";
import ItalianCuisine from "./pages/cuisines/ItalianCuisine"
import MexicanCuisine from "./pages/cuisines/MexicanCuisine";
import JapaneseCuisine from "./pages/cuisines/JapaneseCuisine"
import ThaiCuisine from "./pages/cuisines/ThaiCuisine";
import KoreanCuisine from "./pages/cuisines/KoreanCuisines";

// Category Pages
import FastFoodCategory from "@/pages/categories/FastFoodCategory";
import DrinksCategory from "@/pages/categories/DrinksCategory";
import LunchCategory from "@/pages/categories/LunchCategory";
import DinnerCategory from "@/pages/categories/DinnerCategory";
import CoffeeCategory from "./pages/categories/CoffeeCategory";
import BreakFastCategory from "./pages/categories/BreakFastCategory";
import SnacksCategory from "./pages/categories/SnacksCategory";
import ChaiCategory from "./pages/categories/ChaiCategory";
import LassiCategory from "./pages/categories/LassiCategory";
import BiryaniCategory from "./pages/categories/BiryaniCategory";
import PaneerCategory from "./pages/categories/PaneerCategory";
import PickleCategory from "./pages/categories/PickleCategory";
import SaladCategory from "./pages/categories/SaladCategory";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
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
                  <Route path="/cuisine/american" element={<AmericanCuisine />} /> 
                  <Route path="/cuisine/italian" element={<ItalianCuisine />} /> 
                  <Route path="/cuisine/mexican" element={<MexicanCuisine />} /> 
                  <Route path="/cuisine/japanese" element={<JapaneseCuisine />} /> 
                  <Route path="/cuisine/thai" element={<ThaiCuisine />} /> 
                  <Route path="/cuisine/mediterranean" element={<IndianCuisine />} /> 
                  <Route path="/cuisine/french" element={<FrenchCuisine />} /> 
                  <Route path="/cuisine/korean" element={<KoreanCuisine />} /> 
                  
                  {/* Category Routes */}
                  <Route path="/category/fast-food" element={<FastFoodCategory />} />
                  <Route path="/category/drinks" element={<DrinksCategory />} />
                  <Route path="/category/dinner" element={<DinnerCategory />} /> 
                  <Route path="/category/lunch" element={<LunchCategory />} /> 
                  <Route path="/category/coffee" element={<CoffeeCategory />} /> 
                  <Route path="/category/breakfast" element={<BreakFastCategory />} /> 
                  <Route path="/category/snacks" element={<SnacksCategory />} /> 
                  <Route path="/category/chai" element={<ChaiCategory />} />
                  <Route path="/category/lassi" element={<LassiCategory />} />
                  <Route path="/category/biryani" element={<BiryaniCategory />} />
                  <Route path="/category/paneer" element={<PaneerCategory />} />
                  <Route path="/category/pickle" element={<PickleCategory />} />
                  <Route path="/category/salad" element={<SaladCategory />} />
         
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
