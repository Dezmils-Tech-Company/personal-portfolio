import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCode, FiStar, FiUsers } from 'react-icons/fi'
import ProjectStats from './projects/ProjectStats.jsx'
import { fetchStats, fetchRepositories } from '../services/github.js' 
import ResumeContent from './resume/ResumeContent.jsx'
const Home = () => {
  const [stats, setStats] = useState({})
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.title = 'Home | Ezra Ndege Portfolio'

    const loadData = async () => {
      try {
        const statsData = await fetchStats('Dezmils-Tech-Company')
        setStats(statsData)

        const repoData = await fetchRepositories('Dezmils-Tech-Company') // fetch repos
        setRepos(repoData)
      } catch (err) {
        console.error('Failed to fetch data:', err)
        setError('Unable to load GitHub data at the moment.')
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || 'Dezmils-Tech-Company'

  return (
    <div className="min-h-screen font-sans">
      {/* Stats Section */}
      <section className="py-2">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-extrabold text-white mb-4">
              By The <span className="text-orange-500">Numbers</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              A snapshot of my GitHub contributions and community impact.
            </p>
          </motion.div>

          {isLoading && <p className="text-center text-gray-500">Loading stats...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!isLoading && !error && <ProjectStats stats={stats} />}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-hover p-6 rounded-xl bg-orange-50 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                <FiCode className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Skills & Tech Stack</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Explore my technical expertise and the technologies I work with.
              </p>
              <Link to="/skills" className="text-orange-500 hover:text-primary-600 font-semibold">
                View Skills →
              </Link>
            </motion.div>

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card-hover p-6 rounded-xl bg-orange-50 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary-500/10 flex items-center justify-center mb-4">
                <FiUsers className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">About Me</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Learn more about my journey, experience, and professional background.
              </p>
              <Link to="/about" className="text-orange-500 hover:text-orange-600 font-semibold">
                About Me →
              </Link>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card-hover p-6 rounded-xl bg-orange-50 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <FiStar className="text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub Stats</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                Check out my GitHub contributions, stars, and repository statistics.
              </p>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-semibold"
              >
                View GitHub →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section >
        <ResumeContent />
      </section>

           {/* Projects Section (GitHub Integrated) */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          {isLoading && <p className="text-center text-gray-500">Loading projects...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!isLoading && !error && (
            <div className="grid md:grid-cols-3 gap-8">
              {repos.slice(0, 6).map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl shadow-lg overflow-hidden bg-gray-50 border border-gray-200"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {repo.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {repo.description || 'No description available.'}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <FiStar className="text-yellow-500" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCode className="text-blue-500" /> {repo.language || 'N/A'}
                      </span>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 font-semibold hover:text-cyan-800"
                    >
                      View Repository →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Interested in working together? Let’s connect.</p>
          <Link
            to="/contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home
