
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface FoodCategory {
  name: string;
  path: string;
}

interface FoodCategoriesMenuProps {
  categories: FoodCategory[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const FoodCategoriesMenu = ({ categories, isMobile = false, onItemClick }: FoodCategoriesMenuProps) => {
  if (isMobile) {
    return (
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
        {categories.map((category) => (
          <li key={category.name}>
            <Link
              to={category.path}
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              <div className="text-sm font-medium leading-none">{category.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="menu-item">Food Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {categories.map((category) => (
                <li key={category.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={category.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{category.name}</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default FoodCategoriesMenu;
