
interface FoodCategoryCardProps {
  title: string;
  image: string;
  restaurantCount: number;
  slug: string;
}

const FoodCategoryCard: React.FC<FoodCategoryCardProps> = ({
  title,
  image,
  restaurantCount,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 text-center food-card-hover cursor-pointer transition-all duration-300 hover:shadow-md">
      <div className="bg-accent rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{restaurantCount} Restaurants</p>
    </div>
  );
};

export default FoodCategoryCard;
