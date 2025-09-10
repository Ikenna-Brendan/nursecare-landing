import React from 'react';
import { Home, Shield, Users, ChevronRight } from 'lucide-react';

const WhatYouDo = () => {
  const services = [
    {
      icon: Home,
      title: "Home Visits & Wellness Checks",
      description: "Provide personalized care in the comfort of patients' homes"
    },
    {
      icon: Shield,
      title: "Post-Op Care & Monitoring",
      description: "Support patients through critical recovery periods"
    },
    {
      icon: Users,
      title: "Care Coordination & Education",
      description: "Bridge the gap between hospital and home care"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Deliver <span className="text-blue-600">Care</span>. 
            Build <span className="text-green-600">Trust</span>. 
            Lead <span className="text-blue-600">Change</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Use your expertise where it matters most. Our platform connects you with patients 
            who need your specialized care and attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works Steps */}
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Set Your Profile</h4>
              <p className="text-gray-600">Complete your professional profile and set your availability</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Receive Bookings</h4>
              <p className="text-gray-600">Get matched with patients who need your specific expertise</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Deliver Care</h4>
              <p className="text-gray-600">Provide excellent care using our secure documentation tools</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl">
            <span>See How It Works</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouDo;