import React from 'react'
import { motion } from 'framer-motion'
import {
  FaJs,
  FaPython,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaCloud,
  FaCodeBranch
} from 'react-icons/fa'
import {SiMongodb, SiPostgresql, SiSpring} from 'react-icons/si'
import {FaGolang} from "react-icons/fa6";

function Skills() {

  const skills = [
      { name: 'Java', icon: FaJava, color: '#F80000' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#14629b'},
      { name: 'Go', icon: FaGolang, color: '#1572B6' },
      { name: 'MySQL', icon: FaDatabase, color: '#4479A1'},
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Docker', icon: FaDocker, color: '#5b5bb4' },
      { name: 'CI/CD Pipeline', icon: FaCodeBranch, color: '#1b0f62' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Cloud', icon: FaCloud, color: '#1572B6' },
      { name: 'Python', icon: FaPython, color: '#45456d' },
      { name: 'Node.js', icon: FaNodeJs, color: '#3776AB' },
      { name: 'React', icon: FaReact, color: '#272769' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <p>Technologies I work with</p>
        </motion.div>
        
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }} >

                  <div className="skill-icon" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <h4>{skill.name}</h4>
                </motion.div>
              )
            })}
          </div>
          
          <motion.div className="skills-summary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }} >

              <h3>Technical Expertise</h3>
              <p>
                  My core stack is Java (Spring Boot) and Go for backend systems, with PostgreSQL
                  and MongoDB for data persistence. I build around clean architecture principles,
                  clear domain boundaries, maintainable service design, and APIs that don't become
                  someone else's problem six months later.
                  <br/><br/>
                  On the frontend I'm comfortable with React and modern CSS when the project calls
                  for it, but backend engineering is where I operate at my best.
              </p>
            <div className="expertise-categories">
              <div className="category">
                <h4>Backend</h4>
                <p>Java (Spring Boot), Go, Python, Node.js</p>
              </div>
              <div className="category">
                <h4>Database</h4>
                <p>PostgreSQL, MySQL, MongoDB</p>
              </div>
              <div className="category">
                <h4>Frontend</h4>
                <p>React, JavaScript, Tailwind CSS</p>
              </div>
              <div className="category">
                <h4>Tools</h4>
                <p>Git, Postman, Docker, GitHub Actions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
