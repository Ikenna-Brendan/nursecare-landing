import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">NurseConnect Pro</span>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Empowering</span> Houston's Nurses.{' '}
                <span className="text-green-600">Elevating</span> Patient Care.
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Join a nurse-led platform that puts your skills, time, and impact first.
              </p>
            </div>

            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl">
              <span>Become a Founding Nurse Partner</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600">Join 50+ nurses already on the platform</p>
                <div className="flex space-x-1 mt-1">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Confident nurse with tablet in home care setting"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-1000">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce delay-2000">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">4.9★</p>
                <p className="text-sm text-gray-600">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;