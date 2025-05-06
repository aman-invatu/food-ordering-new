
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [location, setLocation] = useState("New York");
  
  return (
    <section className="relative bg-secondary text-white overflow-hidden">
      <div className="pattern-dots absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 z-10 animate-fade-in">
            <div className="inline-block rounded-full bg-primary/20 px-4 py-2 text-sm text-primary mb-2">
              Easy way to order your food 🔥
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover the best food & drinks From Best Restaurants
            </h1>
            <p className="text-gray-300 text-lg">
              Order your favorite meals from the best restaurants in your area. Fast delivery, great variety, and amazing tastes await!
            </p>
            
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2">
              <div className="flex items-center px-3 border rounded-lg bg-gray-50 flex-1">
                <MapPin className="w-5 h-5 text-gray-500" />
                <Select defaultValue={location} onValueChange={setLocation}>
                  <SelectTrigger className="border-0 bg-transparent focus:ring-0 w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New York">New York</SelectItem>
                    <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="Miami">Miami</SelectItem>
                    <SelectItem value="San Francisco">San Francisco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <Input 
                    className="pl-10 bg-gray-50 border text-gray-900" 
                    placeholder="Search food or restaurant" 
                  />
                </div>
                <Button className="bg-primary hover:bg-primary-600">
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -right-4 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Pizza" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="Burger" 
                  className="absolute -bottom-10 -left-10 w-44 h-44 object-cover rounded-full border-4 border-white shadow-xl"
                />
                
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Salad Bowl" 
                  className="absolute -top-5 -left-5 w-36 h-36 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
