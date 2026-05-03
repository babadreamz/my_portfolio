import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
    FaExternalLinkAlt,
    FaGithub,
    FaReact,
    FaJs,
    FaJava,
    FaDatabase,
    FaNodeJs
} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import Portfolio from '../assets/Images/portfolio.png'
import BulkEmails from '../assets/Images/bulk_emails.png'
import ExpenseTracker from '../assets/Images/expense_tracker.png'
import vote from '../assets/Images/vote.png'
import sayepage from '../assets/Images/sayepage.png'
import {BiLogoPostgresql} from "react-icons/bi";
import {FaGolang} from "react-icons/fa6";


function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'SAYE Financial Management Platform',
            description: 'A comprehensive financial management platform enabling users to efficiently manage savings, loans, ' +
                'and investments. Built with Spring Boot (backend), React (frontend), and PostgreSQL (database), the platform features ' +
                'real-time transaction history, loan disbursement workflows, investment tracking, and administrative dashboards. ' +
                'Includes secure authentication, PDF statement generation, and intuitive financial analytics.',
            image: `${sayepage}`,
            liveUrl: 'https://sayefinance.com',
            githubUrl: 'https://github.com/babadreamz/FinancialToolFrontend', // Update with actual repository
            technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui'],
            category: 'fullstack',
            techIcons: [FaJava, FaReact, BiLogoPostgresql, SiTailwindcss]
        },
        {
            id: 2,
            title: 'Election Management System',
            description: 'A robust and secure digital voting platform designed to streamline electoral processes. ' +
                'It features real-time vote counting, secure user authentication, and an administrative dashboard ' +
                'for managing candidates and monitoring results, ensuring a transparent and tamper-proof voting ' +
                'experience across all devices.',
            image: `${vote}`,
            liveUrl: 'https://ems-frontend-98xv.onrender.com',
            githubUrl: 'https://github.com/babadreamz/ElectionManagementSystem',
            technologies: ['Java (Springboot)','PostgresQL', 'JavaScript', 'React'],
            category: 'fullstack',
            techIcons: [FaJava, FaNodeJs, BiLogoPostgresql, FaJs, FaReact]
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'Built with React, TailwindCSS, and Framer Motion. This web application delivers a responsive,' +
                ' visually engaging user experience. It combines modern UI design with smooth animations and scalable ' +
                'architecture to ensure performance and interactivity across devices.',
            image: `${Portfolio}`,
            liveUrl: 'https://myportfolio-git-main-babadreamzs-projects.vercel.app/',
            githubUrl: 'https://github.com/babadreamz/my_portfolio',
            technologies: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
            category: 'frontend',
            techIcons: [FaReact, FaJs, SiTailwindcss]
        },
        {
            id: 4,
            title: 'Expense Tracker App',
            description: 'A robust expense tracking backend service built with Spring Boot and PostgreSQL. ' +
                'Provides comprehensive RESTful APIs for recording, categorizing, and analyzing spending patterns. ' +
                'Features include secure JWT authentication, real-time budget calculations, advanced filtering and aggregation, ' +
                'and optimized database queries for handling large transaction datasets efficiently.',
            image: ExpenseTracker,
            githubUrl: 'https://github.com/babadreamz/PersonalExpenseTracker',
            technologies: ['Java(Spring Boot)', 'PostgreSQL'],
            category: 'Backend',
            techIcons: [FaJava, FaDatabase]
        },
        {
            id: 5,
            title: 'Email Sender',
            description: 'A high-performance email delivery microservice built with Go. Designed for reliable, scalable mass communication ' +
                'with support for customizable email templates, batch processing, and detailed delivery tracking. ' +
                'Exposes clean REST APIs for integration with other services, featuring asynchronous job queuing and comprehensive error handling.',
            image: `${BulkEmails}`,
            githubUrl: 'https://github.com/babadreamz/EmailSender',
            technologies: ['Golang', 'API Integration','Microservices'],
            category: 'backend',
            techIcons: [FaGolang]
        }
    ]

    const categories = [
        { id: 'all', name: 'All Projects' },
        { id: 'fullstack', name: 'Full Stack' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>My Projects</h2>
                    <p>Recent works and achievements in app development</p>
                </motion.div>

                <motion.div
                    className="project-filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <FaExternalLinkAlt />
                                        </motion.a>
                                        <motion.a href={project.githubUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="project-link"
                                                  whileHover={{ scale: 1.1 }}
                                                  whileTap={{ scale: 0.9 }}
                                        >
                                            <FaGithub />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <br/>
                                <p>{project.description}</p>

                                <div className="project-technologies">
                                    {project.techIcons.map((Icon, idx) => (
                                        <Icon key={idx} className="tech-icon" />
                                    ))}
                                </div>

                                <div className="project-tech-list">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>Check out for more projects on GitHub.</p>
                    <div className="cta-buttons">
                        <motion.a
                            href="https://github.com/babadreamz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub /> View GitHub
                        </motion.a>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects