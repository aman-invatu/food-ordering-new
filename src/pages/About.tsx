
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg opacity-90 mb-8">
              We're on a mission to deliver delicious food right to your doorstep. Learn more about our journey, values, and commitment to quality service.
            </p>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative">
                Our Story
                <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018, our food delivery service began with a simple vision: to connect people with the best local restaurants and deliver exceptional food experiences right to their homes.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small team of food enthusiasts has grown into a network of over 400 restaurant partners and thousands of satisfied customers. We believe that great food should be accessible to everyone, which drives our commitment to quality and service.
              </p>
              <p className="text-gray-700">
                Today, we continue to innovate and expand our reach, bringing more culinary delights to more people while maintaining our dedication to supporting local businesses and creating meaningful food experiences.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-600">We ensure that only the highest quality food reaches your doorstep, partnering with restaurants that share our commitment to excellence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prompt Service</h3>
              <p className="text-gray-600">We understand the value of your time. Our efficient delivery network ensures your food arrives promptly, hot and fresh.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">Your satisfaction is our top priority. We're dedicated to providing a seamless ordering experience and addressing any concerns promptly.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Food Street, Cuisine City, FC 12345</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 765-4321</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@fooddelivery.com</p>
              <p className="text-gray-600">support@fooddelivery.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9 AM - 10 PM</p>
              <p className="text-gray-600">Weekends: 10 AM - 11 PM</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.697149419326654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1651825215806!5m2!1sen!2sin" 
              className="w-full h-full" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
