
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="text-2xl font-bold ml-2 text-white">Foodie</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Delivering the best food ordering experience with thousands of restaurants to choose from.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-400 hover:text-primary transition-colors">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/restaurants" className="text-gray-400 hover:text-primary transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-primary transition-colors">
                  Order Food
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates about our special offers and new restaurants.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-primary hover:bg-primary-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Foodie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
