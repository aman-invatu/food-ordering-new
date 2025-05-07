import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";
import { cuisineData } from "@/services/data";

const IndianCuisine = () => {
  return (
    <FoodCategoryTemplate
      title="Indian Cuisine"
      description="Savor the rich and diverse flavors of India with our authentic dishes, from aromatic curries to tandoori specialties."
      items={cuisineData.indian}
      headerImage="https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3"
    />
  );
};

export default IndianCuisine;
