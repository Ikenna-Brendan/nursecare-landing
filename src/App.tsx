import React from 'react';
import Header from './components/Header';
import WhyNurseConnect from './components/WhyNurseConnect';
import WhatYouDo from './components/WhatYouDo';
import Testimonials from './components/Testimonials';
import FoundingPartner from './components/FoundingPartner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WhyNurseConnect />
      <WhatYouDo />
      <Testimonials />
      <FoundingPartner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;