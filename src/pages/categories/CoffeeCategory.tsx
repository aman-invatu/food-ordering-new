import FoodCategoryTemplate from "@/components/templates/FoodCategoryTemplate";
import { categoryData } from "@/services/data";

const CoffeeCategory = () => {
  return (
    <FoodCategoryTemplate
      title="coffee"
      description="Satisfy your cravings with our menu of quick, delicious comfort foods. From juicy burgers to crispy fries, we've got all your favorites."
      items={categoryData.coffee}
      headerImage="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3"
    />
  );
};

export default CoffeeCategory;
