import React from 'react'
import { motion } from 'framer-motion'
import {FaLaptopCode, FaDatabase, FaInfinity} from 'react-icons/fa'

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
                  I design and build scalable backend systems with a strong emphasis on
                  clean architecture, performance, and long-term maintainability. My focus
                  is on service design, data modeling, and distributed
                  system behaviour under real-world constraints.
                  <br/>
                  I care less about what's trendy and more about systems that hold up
                  when they actually matter.
              </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>2</h4>
                <p>Systems Live in Production</p>
              </div>

              <div className="stat">
                <h4>700+</h4>
                <p>Users Served</p>
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
                <FaDatabase className="skill-icon" />
                <h4>Database Design</h4>
                <p>Designing efficient database structures and queries</p>
              </div>
                <div className="skill-item">
                    <FaInfinity className="skill-icon" />
                    <h4>DevOps & Infrastructure</h4>
                    <p>Managing CI/CD pipelines, cloud hosting, and automation</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About