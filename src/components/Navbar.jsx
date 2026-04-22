import React from 'react';
import { motion } from 'framer-motion';

const HoverLink = ({ text, href }) => {
  const linkContainer = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hovered: {
      transition: { staggerChildren: 0.03 }
    }
  };

  const letterAnim = {
    hidden: { y: 0 },
    visible: { y: 0 },
    hovered: {
      y: ["0%", "-100%", "100%", "0%"],
      transition: { duration: 0.35, times: [0, 0.45, 0.5, 1], ease: "easeInOut" }
    }
  };

  return (
    <motion.li variants={linkContainer} whileHover="hovered" style={{ overflow: 'hidden' }}>
      <a href={href} style={{ display: 'flex', overflow: 'hidden' }}>
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={letterAnim} style={{ display: 'inline-block' }}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </a>
    </motion.li>
  );
};

function Navbar({ onContact }) {
  const logoText = "Tecnolejo";
  
  const logoContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const letterAnim = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 200, damping: 20 } 
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <motion.div 
          className="navbar-logo"
          variants={logoContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', overflow: 'hidden' }}
        >
          {logoText.split('').map((char, index) => (
            <motion.span key={index} variants={letterAnim} style={{ display: 'inline-block' }}>
              {char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.ul 
          className="nav-links"
          variants={logoContainer}
          initial="hidden"
          animate="visible"
        >
          <HoverLink text="Beneficios" href="#beneficios" />
          <HoverLink text="Portafolio" href="#portafolio" />
          <HoverLink text="Servicios" href="#servicios" />
          <HoverLink text="Precios" href="#precios" />
        </motion.ul>
        
        <motion.button 
          className="btn btn-primary" 
          onClick={onContact} 
          style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Consultar ahora
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
