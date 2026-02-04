import { motion } from 'framer-motion'
import { FiStar, FiGitBranch, FiFolder, FiTrendingUp } from 'react-icons/fi'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const ProjectStats = ({ stats }) => {
  const statCards = [
    {
      icon: FiFolder,
      label: 'Total Projects',
      value: stats?.totalProjects || 0,
      color: 'text-blue-500',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-blue-500/10',
    },
    {
      icon: FiStar,
      label: 'Total Stars',
      value: stats?.totalStars || 0,
      color: 'text-yellow-500',
      bgColor: 'bg-gradient-to-br from-yellow-500/20 to-yellow-500/10',
    },
    {
      icon: FiGitBranch,
      label: 'Total Forks',
      value: stats?.totalForks || 0,
      color: 'text-green-500',
      bgColor: 'bg-gradient-to-br from-green-500/20 to-green-500/10',
    },
    {
      icon: FiTrendingUp,
      label: 'Featured',
      value: stats?.featuredCount || 0,
      color: 'text-purple-500',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-purple-500/10',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map(({ icon: Icon, label, value, color, bgColor }, index) => (
        <motion.div
          key={label}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
          className="rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          aria-label={label}
        >
          <div className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center mb-4 shadow-md`}>
            <Icon className={`text-3xl ${color}`} />
          </div>
          <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            {Number(value).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 tracking-wide">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectStats
