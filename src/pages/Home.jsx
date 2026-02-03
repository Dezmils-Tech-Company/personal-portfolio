import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiCode, FiStar, FiUsers, FiArrowRight } from 'react-icons/fi'
import ProjectGrid from '../components/projects/ProjectGrid'
import ProjectStats from '../components/projects/ProjectStats'
import { fetchStats } from '../services/github'

const Home = () => {
  const [projects, setProjects] = useState([])
  const [stats, setStats] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.title = 'Home | Ezra Ndege Portfolio'


  const loadStats = async () => {
    const statsData = await fetchStats('Dezmils-Tech-Company')
    setStats(statsData)
  }
  loadStats()
}, [])


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white rounded-2xl max-w-7xl" />
        <div className="relative container font-bold">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-orange-500">Building Digital</span>
              <br />
              <span className="text-blue-800  font-italic">Experiences</span>
            </h1>
            <p className="text-xl text-blue-700 font-semibold mb-8">
              Full-Stack Developer passionate about creating innovative solutions with modern technologies
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/projects" className="btn btn-blue-700/10 group flex items-center">
                View Projects
                <FiArrowRight className="flex items-center flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="flex items-center btn btn-outline">
                Get In Touch
              </Link>
              <a
                href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center flexbtn glass-effect"
              >
                <FiGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By The <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Some statistics about my work and contributions
            </p>
          </motion.div>
          <ProjectStats stats={stats} />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work and open-source contributions
            </p>
          </motion.div>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
            </div>
          ) : (
            <>
              <ProjectGrid projects={projects.slice(0, 6)} />
              <div className="text-center mt-12">
                <Link to="/projects" className="btn btn-outline group">
                  View All Projects
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      

      {/* Quick Links */}
<section className="py-16">
  <div className="container">
    <div className="grid md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="card-hover p-6 rounded-xl bg-white "
      >
        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
          <FiCode className="text-2xl text-blue-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">Skills & Tech Stack</h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          Explore my technical expertise and the technologies I work with
        </p>
        <Link to="/skills" className="text-orange-500 hover:text-primary-600 font-semibold">
          View Skills →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="card-hover p-6 rounded-xl bg-white  shadow-lg"
      >
        <div className="w-12 h-12 rounded-lg bg-secondary-500/10 flex items-center justify-center mb-4">
          <FiUsers className="text-2xl text-blue-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">About Me</h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          Learn more about my journey, experience, and professional background
        </p>
        <Link to="/about" className="text-orange-500 hover:text-orange-600 font-semibold">
          About Me →
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="card-hover p-6 rounded-xl bg-white shadow-lg"
      >
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
          <FiStar className="text-2xl text-blue-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">GitHub Stats</h3>
        <p className="text-secondary-600 dark:text-secondary-400 mb-4">
          Check out my GitHub contributions, stars, and repository statistics
        </p>
        <a
          href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent text-orange-500 hover:text-accent-dark font-semibold"
        >
          View GitHub →
        </a>
      </motion.div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Home
