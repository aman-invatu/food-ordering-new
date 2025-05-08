
import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
        <span className="text-white font-bold text-xl">F</span>
      </div>
      <span className="text-2xl font-bold ml-2 text-primary">FoodiHub</span>
    </Link>
  );
};

export default BrandLogo;
