
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FoodCategoriesSection from "@/components/FoodCategoriesSection";
import RestaurantsSection from "@/components/RestaurantsSection";
import PopularFoodSection from "@/components/PopularFoodSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DeliverySection from "@/components/DeliverySection";
import AppPromoSection from "@/components/AppPromoSection";
import LocationsSection from "@/components/LocationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <FoodCategoriesSection />
      <RestaurantsSection />
      <PopularFoodSection />
      <HowItWorksSection />
      <DeliverySection />
      <AppPromoSection />
      <LocationsSection />
    </div>
  );
};

export default Index;
