import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiStar, FiGitBranch, FiEye, FiExternalLink, FiCode } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 card-hover"
    >
      {/* Tech Stack Badge */}
      {project.language && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400">
            {project.language}
          </span>
        </div>
      )}

      {/* Featured Badge */}
      {project.is_featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Featured
          </span>
        </div>
      )}

      {/* Project Image/Icon */}
      <div className="h-48 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 flex items-center justify-center">
        {project.language ? (
          <div className="text-5xl opacity-20">
            <FiCode />
          </div>
        ) : (
          <div className="text-4xl text-gray-400">
            <FiCode />
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors line-clamp-1">
            {project.name}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description || 'No description available'}
        </p>

        {/* Tech Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiStar className="mr-1 text-yellow-500" />
              <span>{project.stargazers_count || 0}</span>
            </div>
            <div className="flex items-center">
              <FiGitBranch className="mr-1 text-green-500" />
              <span>{project.forks_count || 0}</span>
            </div>
            {project.views > 0 && (
              <div className="flex items-center">
                <FiEye className="mr-1 text-blue-500" />
                <span>{project.views}</span>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-2">
            {project.html_url && (
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="View on GitHub"
              >
                <FiExternalLink className="text-lg" />
              </a>
            )}
            <Link
              to={`/projects/${project._id || project.id}`}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="View details"
            >
              <FiCode className="text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard