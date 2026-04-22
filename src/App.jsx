import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Pricing from './components/Pricing';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const waNumber = "50238415963"; // Número de Alejo

  const openWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
  };

  return (
    <>
      <Navbar onContact={() => openWhatsApp('Hola Alejo, vengo desde tu portafolio y me gustaría más información.')} />
      <Hero onContact={() => openWhatsApp('Hola Alejo, me interesa convertir mi negocio en una máquina de clientes.')} />
      <Benefits />
      <Portfolio />
      <Services onContact={(service) => openWhatsApp(`Hola Alejo, me interesa el servicio de: ${service}`)} />
      <Pricing onContact={(plan) => openWhatsApp(`Hola Alejo, quiero empezar con el plan de ${plan}`)} />
      <div className="section container">
        <About onContact={() => openWhatsApp('Hola Alejo, estuve leyendo sobre ti y quiero trabajar contigo.')} />
      </div>
      <CTA onContact={() => openWhatsApp('Hola Alejo, estoy listo para iniciar.')} />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${waNumber}?text=Hola+Alejo%2C+tengo+una+consulta+sobre+tus+servicios.`}
        className="float-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
