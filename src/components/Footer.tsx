import React from 'react';
import { Heart, Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold">NurseConnect Pro</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering Houston's nurses through technology and community. 
              Join us in revolutionizing patient care and nursing practice.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Houston, Texas</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>hello@nurseconnectpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(713) 555-NURSE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors">About Us</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors">Join as Nurse</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Find Care</a>
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors">Help Center</a>
              <a href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-gray-400 text-center">
              © 2025 NurseConnect Pro. Built with care in Houston.
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span>Licensed in Texas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span>Insured & Bonded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;