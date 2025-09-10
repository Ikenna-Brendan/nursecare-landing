import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    specialty: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600">
              We've received your interest and will be in touch within 24 hours to discuss next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Lead the Future of <span className="text-blue-600">Nursing</span> in Houston?
          </h2>
          <p className="text-xl text-gray-600">
            Tell us about yourself and join our founding partner community
          </p>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select experience level</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="11-15">11-15 years</option>
                  <option value="16+">16+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty Area *
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  required
                  value={formData.specialty}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your specialty</option>
                  <option value="icu">ICU/Critical Care</option>
                  <option value="medsurg">Medical-Surgical</option>
                  <option value="home-health">Home Health</option>
                  <option value="post-op">Post-Operative Care</option>
                  <option value="geriatric">Geriatric Care</option>
                  <option value="pediatric">Pediatric Care</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Tell us why you're interested *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Share your motivation for joining NurseConnect Pro and what you hope to achieve..."
              />
            </div>

            <button
              type="submit"
              className="w-full group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Submit Interest</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-500 text-center">
              * Required fields. We'll respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;