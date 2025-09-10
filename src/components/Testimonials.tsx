import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez, RN",
      role: "ICU Specialist • 12 years experience",
      quote: "Finally, a platform that respects our time and expertise. I can focus on patient care instead of paperwork.",
      rating: 5,
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Chen, RN",
      role: "Home Health • 8 years experience", 
      quote: "The flexibility to set my own schedule has been life-changing. I'm earning more while maintaining work-life balance.",
      rating: 5,
      image: "https://images.pexels.com/photos/6749833/pexels-photo-6749833.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Jennifer Adams, RN",
      role: "Post-Op Care • 15 years experience",
      quote: "Being part of the founding group means my voice is heard. We're building something special for nurses in Houston.",
      rating: 5,
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Hear from <span className="text-blue-600">Fellow Nurses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            "Finally, a platform that respects our time and expertise."
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 group-hover:text-blue-300 transition-colors" />
              
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-blue-100">Active Nurses</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-blue-100">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Patients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.9★</p>
              <p className="text-blue-100">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;