
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReservationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    persons: "",
    date: "",
    time: "",
    comment: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Submitted",
      description: "We'll confirm your reservation shortly. Thank you!",
      variant: "success",
    });
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      persons: "",
      date: "",
      time: "",
      comment: ""
    });
  };

  return (
    <section className="bg-yellow-400 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-secondary">The Roccos</span> <span className="text-white">Reservation</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opening Hours */}
          <div className="bg-secondary text-white p-8 rounded-lg relative">
            <div className="border border-dashed border-gray-500 p-10 h-full flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <p className="text-gray-300">Special menu offers.</p>
                  <h3 className="text-3xl font-bold mt-2">
                    Opening <span className="text-yellow-400">Hours</span>
                  </h3>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="mr-6">
                      <div className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <Clock className="h-8 w-8 text-gray-300" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">Sunday to Tuesday</p>
                      <p className="text-xl font-bold">09:00 To 22:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-6">
                      <div className="w-14 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <Clock className="h-8 w-8 text-gray-300" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg">Friday to Saturday</p>
                      <p className="text-xl font-bold">11:00 To 19:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <p className="text-2xl font-medium">+7(111) 45-6789</p>
              </div>
            </div>
          </div>
          
          {/* Reservation Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="persons" className="block text-sm font-medium text-gray-700 mb-1">Person</label>
                  <select
                    id="persons"
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Required Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-gray-100 rounded border-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-secondary font-bold text-lg py-6"
              >
                Book A Table
              </Button>
              
              <p className="text-sm text-gray-600 text-center mt-4">
                Is all about good food. Enjoy our delicious food.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
