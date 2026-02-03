import { motion } from 'framer-motion'
import { FiStar, FiGitBranch, FiFolder, FiTrendingUp } from 'react-icons/fi'

const ProjectStats = ({ stats }) => {
  const statCards = [
    {
      icon: <FiFolder />,
      label: 'Total Projects',
      value: stats?.totalProjects || 0,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: <FiStar />,
      label: 'Total Stars',
      value: stats?.totalStars || 0,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: <FiGitBranch />,
      label: 'Total Forks',
      value: stats?.totalForks || 0,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: <FiTrendingUp />,
      label: 'Featured',
      value: stats?.featuredCount || 0,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center mb-4`}>
            <div className={`text-2xl ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {stat.value.toLocaleString()}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectStats
