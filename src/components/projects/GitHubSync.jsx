import { useState } from 'react'
import { FiGithub, FiRefreshCw, FiCheck } from 'react-icons/fi'
import { useProjects } from '../../context/ProjectsContext'
import { toast } from 'react-hot-toast'

const GitHubSync = () => {
  // Always pull username from .env
  const username = import.meta.env.VITE_GITHUB_USERNAME || ''
  const [force, setForce] = useState(false)
  const { syncFromGitHub, syncLoading } = useProjects()

  const handleSync = async () => {
    if (!username.trim()) {
      toast.error('GitHub username is missing in .env')
      return
    }

    try {
      await syncFromGitHub({ username, force })
      toast.success('Projects synced successfully!')
    } catch (error) {
      toast.error(error.message || 'Failed to sync projects')
    }
  }

  return (
    <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
            <FiGithub className="text-3xl text-primary-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Sync Projects from GitHub
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Keep your portfolio updated with your latest GitHub repositories
          </p>
        </div>

        <div className="space-y-4">
          {/* No input field needed since username comes from .env */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="force"
              checked={force}
              onChange={(e) => setForce(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="force" className="text-sm text-gray-700 dark:text-gray-300">
              Force sync (bypass cache)
            </label>
          </div>

          <button
            onClick={handleSync}
            disabled={syncLoading || !username.trim()}
            className="w-full btn btn-primary flex items-center justify-center"
          >
            {syncLoading ? (
              <>
                <FiRefreshCw className="animate-spin mr-2" />
                Syncing...
              </>
            ) : (
              <>
                <FiGithub className="mr-2" />
                Sync from GitHub ({username})
              </>
            )}
          </button>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center justify-center space-x-2">
              <FiCheck className="text-green-500" />
              <span>Automatically fetches repository details, stars, forks, and languages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubSync
