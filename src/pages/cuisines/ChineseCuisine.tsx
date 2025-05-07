import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";
import { cuisineData } from "@/services/data";

const ChineseCuisine = () => {
  return (
    <FoodCategoryTemplate
      title="Chinese Cuisine"
      description="Experience authentic Chinese flavors with our selection of traditional dishes, from savory stir-fries to delicate dim sum."
      items={cuisineData.chinese}
      headerImage="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3"
    />
  );
};

export default ChineseCuisine;
