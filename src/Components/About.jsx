import React from 'react'
import { motion } from 'framer-motion'
import {FaCode, FaLaptopCode, FaMobile, FaDatabase, FaInfinity} from 'react-icons/fa'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
            className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            style={{fontSize: '18px'}}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>A Systems-Oriented Software Engineer</h3>
            <p>
                I design and build scalable software systems with a strong emphasis on clean architecture, SOLID principles, and performance optimization. My work spans backend service design, database modeling, and responsive user interfaces.
                I am particularly interested in systems that operate reliably under real-world constraints and evolve gracefully over time.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>

              <div className="stat">
                <h4>24/7</h4>
                <p>Support</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-skills-preview"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 style={{marginLeft: '20px'}}>What I Do</h4>
            <br/>
            <div className="skills-preview-grid">
              <div className="skill-item">
                <FaLaptopCode className="skill-icon" />
                <h4>Backend Development</h4>
                <p>Building robust server-side applications and APIs</p>
              </div>
                <div className="skill-item">
                    <FaCode className="skill-icon" />
                    <h4>Frontend Development</h4>
                    <p>Creating responsive and interactive user interfaces</p>
                </div>
                <div className="skill-item">
                    <FaInfinity className="skill-icon" />
                    <h4>DevOps & Infrastructure</h4>
                    <p>Managing CI/CD pipelines, cloud hosting, and automation</p>
                </div>
              <div className="skill-item">
                <FaDatabase className="skill-icon" />
                <h4>Database Design</h4>
                <p>Designing efficient database structures and queries</p>
              </div>
              <div className="skill-item">
                <FaMobile className="skill-icon" />
                <h4>Mobile Development</h4>
                <p>Creating mobile-friendly applications and PWAs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About