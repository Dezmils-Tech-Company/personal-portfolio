import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const ProjectGrid = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">📭</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No projects found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Try adjusting your filters or sync from GitHub
        </p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project._id || project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectGrid