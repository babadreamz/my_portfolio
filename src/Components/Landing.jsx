import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaWhatsapp } from 'react-icons/fa'


function Landing() {
    const profileImg = import.meta.env.VITE_PROFILE_PIC;

  const my_cv = import.meta.env.VITE_CV

    const handleDownloadCV = () => {
        if (!my_cv) {
            alert('CV link not found. Check Vercel Environment Variables.');
            return;
        }
        window.open(my_cv, '_blank');
    };

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER
    const message = 'Hello Shima! I saw your portfolio and would like to discuss further.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }



  return (
    <section id="home" className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <motion.div 
            className="landing-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Hello, I'm</h3>
            <h1>Shima Hilary Kaior</h1>
              <h2>Backend Engineer</h2>
              <p>
                  I design and build robust, scalable backend systems that power
                  real-world products, from distributed APIs and financial platforms
                  to secure microservices. I bring full-stack capability when the
                  product demands it, but my core is in the engine room.
              </p>
            
            <div className="landing-buttons">
              <motion.button 
                className="btn btn-primary"
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary"
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp /> WhatsApp Me
              </motion.button>
              
              <motion.button
                className="btn btn-outline"
                onClick={handleHireMe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div className="placeholder-image"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }} >
            <img src={profileImg} alt="Profile" />
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Landing