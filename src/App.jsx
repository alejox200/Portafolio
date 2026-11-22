import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const waNumber = "50233082755"; // Número de WhatsApp de Tecnolejo Guatemala

  const openWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${waNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="site-wrapper">
      <Navbar onContact={() => openWhatsApp('Hola Tecnolejo, vengo desde su sitio web y me gustaría solicitar información.')} />
      <main>
        <Hero onContact={() => openWhatsApp('Hola Tecnolejo, me gustaría solicitar una propuesta para mi negocio.')} />
        <Benefits />
        <Services onContact={(service) => openWhatsApp(`Hola Tecnolejo, me interesa conocer más sobre el servicio de: ${service}`)} />
        <Portfolio onContact={(projectTitle) => openWhatsApp(`Hola Tecnolejo, vi el proyecto "${projectTitle}" en su portafolio y me gustaría cotizar una solución similar.`)} />
        <Pricing onContact={(plan) => openWhatsApp(`Hola Tecnolejo, quiero empezar con el plan de ${plan}`)} />
        <div className="section container">
          <About onContact={() => openWhatsApp('Hola Tecnolejo, estuve leyendo sobre ustedes y quiero conversar sobre mi proyecto.')} />
        </div>
        <CTA onContact={() => openWhatsApp('Hola Tecnolejo, estoy listo para impulsar mi negocio con soluciones digitales.')} />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${waNumber}?text=Hola+Tecnolejo%2C+tengo+una+consulta+sobre+sus+servicios.`}
        className="float-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
