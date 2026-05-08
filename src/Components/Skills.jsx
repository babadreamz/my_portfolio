import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
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
import {SiMongodb, SiPostgresql, SiTailwindcss} from 'react-icons/si'
import {FaGolang} from "react-icons/fa6";

function Skills() {

  const skills = [
      { name: 'Java', icon: FaJava, level: 95, color: '#F80000' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 90, color: '#14629b'},
      { name: 'MySQL', icon: FaDatabase, level: 85, color: '#4479A1'},
      { name: 'Go', icon: FaGolang, level: 80, color: '#1572B6' },
      { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
      { name: 'Docker', icon: FaDocker, level: 80, color: '#5b5bb4' },
      { name: 'Python', icon: FaPython, level: 70, color: '#45456d' },
      { name: 'Cloud', icon: FaCloud, level: 80, color: '#1572B6' },
      { name: 'CI/CD Pipeline', icon: FaCodeBranch, level: 80, color: '#1b0f62' },
      { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
      { name: 'Node.js', icon: FaNodeJs, level: 75, color: '#3776AB' },
      { name: 'React', icon: FaReact, level: 75, color: '#272769' },
      { name: 'JavaScript', icon: FaJs, level: 80, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, level: 60, color: '#E34F26' },
      { name: 'Tailwindcss', icon: SiTailwindcss, level: 60, color: '#1b0f62'},
      { name: 'CSS3', icon: FaCss3Alt, level: 60, color: '#1572B6' },
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
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="progress-text">{skill.level}%</span>
                  </div>
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
                <h4>Frontend</h4>
                <p>React, HTML5, CSS3, JavaScript, Tailwind CSS</p>
              </div>
              <div className="category">
                <h4>Backend</h4>
                <p>Java, Python,Go, NodeJs</p>
              </div>
              <div className="category">
                <h4>Database</h4>
                <p>MongoDB, PostgreSQL, MySQL</p>
              </div>
              <div className="category">
                <h4>Tools</h4>
                <p>Git, Postman, Docker, GitAction, </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
