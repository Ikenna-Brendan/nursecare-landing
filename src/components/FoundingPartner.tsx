import React from 'react';
import { Crown, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';

const FoundingPartner = () => {
  const perks = [
    {
      icon: Crown,
      title: "Priority listing and visibility",
      description: "Get featured placement and first access to new patients"
    },
    {
      icon: Users,
      title: "Input on app features and workflows",
      description: "Shape the platform's development based on your needs"
    },
    {
      icon: TrendingUp,
      title: "Revenue share or equity options",
      description: "Benefit financially as the platform grows and succeeds"
    },
    {
      icon: Award,
      title: "Recognition as a founding member",
      description: "Special badge and status that sets you apart"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 px-6 py-2 rounded-full">
            <Crown className="w-5 h-5" />
            <span className="font-semibold">Founding Partner Program</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Early Access. <span className="text-blue-300">Exclusive Benefits</span>. 
            Real <span className="text-green-300">Ownership</span>.
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join our select group of founding partners and help shape the future of nursing in Houston. 
            Limited spots available for qualified professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-blue-400 to-green-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <perk.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">
                {perk.title}
              </h3>
              
              <p className="text-blue-100 leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Requirements */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Founding Partner Requirements
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Active RN license in Texas</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Minimum 3 years nursing experience</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Commitment to platform growth and feedback</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="text-blue-100">Houston metro area service availability</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 rounded-2xl mb-6">
                <p className="text-3xl font-bold mb-2">Limited Time</p>
                <p className="text-blue-100">Only 25 founding partner spots available</p>
              </div>
              
              <button className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl">
                <span>Apply to Join</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartner;