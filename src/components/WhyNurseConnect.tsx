import React from 'react';
import { Clock, DollarSign, Users, TrendingUp } from 'lucide-react';

const WhyNurseConnect = () => {
  const features = [
    {
      icon: Clock,
      title: "Set your own schedule and service offerings",
      description: "Complete flexibility to work when and how you want"
    },
    {
      icon: DollarSign,
      title: "Get paid fairly and transparently",
      description: "No hidden fees, transparent pricing, direct payments"
    },
    {
      icon: Users,
      title: "Connect with patients who truly need your care",
      description: "Meaningful relationships with patients in their homes"
    },
    {
      icon: TrendingUp,
      title: "Be part of a movement to reshape healthcare in Houston",
      description: "Lead the transformation of nursing practice"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Built by <span className="text-blue-600">Nurses</span>. 
            Backed by <span className="text-green-600">Tech</span>. 
            Designed for <span className="text-blue-600">You</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand the challenges you face because we've been there. 
            Our platform puts control back in your hands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-50 to-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-green-600 transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl transform -rotate-2"></div>
            <img 
              src="https://images.pexels.com/photos/6749769/pexels-photo-6749769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Confident nurse with tablet smiling in home care setting"
              className="relative w-full h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Nurses Choose NurseConnect Pro
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Professional Autonomy</p>
                  <p className="text-gray-600">Maintain your clinical independence while accessing new opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Competitive Compensation</p>
                  <p className="text-gray-600">Earn what you're worth with transparent, fair pricing</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Technology Support</p>
                  <p className="text-gray-600">Modern tools that make your job easier, not harder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNurseConnect;