import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


import Home from "./pages/Hero";
import About from "./pages/AboutSection";
import Features from "./pages/Features";
import Services from "./pages/Services";
import Apps from "./pages/Application";
import Benefits from "./pages/BenefitsSection";

import Careers from "./pages/CareersSection";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsAndConditions.jsx";
import EmergencyProtocols from "./pages/EmergencyProtocols.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import "./App.css";
import ContactSection from "./pages/ContactSection";

function App() {
  return (
    <div className="app-container">
     
      <Navbar />

      <main>
        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="features" className="section">
          <Features />
        </section>

        <section id="services" className="section">
          <Services />
        </section>

        <section id="apps" className="section">
          <Apps />
        </section>

        <section id="benefits" className="section">
          <Benefits />
        </section>

        <section id="contact" className="section contact">
          <ContactSection />
        </section>

        <section id="careers" className="section">
          <Careers />
        </section>

        <section id="help-center" className="section">
          <HelpCenter />
        </section>

        <section id="privacy-policy" className="section">
          <PrivacyPolicy />
        </section>

        <section id="terms-of-service" className="section">
          <TermsOfService />
        </section>

        <section id="emergency-protocols" className="section">
          <EmergencyProtocols />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
