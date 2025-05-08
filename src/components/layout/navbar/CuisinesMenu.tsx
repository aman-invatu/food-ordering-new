
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface Cuisine {
  name: string;
  path: string;
}

interface CuisinesMenuProps {
  cuisines: Cuisine[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const CuisinesMenu = ({ cuisines, isMobile = false, onItemClick }: CuisinesMenuProps) => {
  if (isMobile) {
    return (
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
        {cuisines.map((cuisine) => (
          <li key={cuisine.name}>
            <Link
              to={cuisine.path}
              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              onClick={onItemClick}
            >
              <div className="text-sm font-medium leading-none">{cuisine.name}</div>
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
          <NavigationMenuTrigger className="menu-item">Cuisines Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {cuisines.map((cuisine) => (
                <li key={cuisine.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={cuisine.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{cuisine.name}</div>
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

export default CuisinesMenu;
