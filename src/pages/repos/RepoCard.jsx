import { FaEye, FaStar, FaCodeBranch } from "react-icons/fa";

const RepoCard = ({ repo }) => (
  <div
    className="bg-white/5 text-center backdrop-blur-md p-4 rounded-xl border border-gray-200 dark:border-gray-700 
               hover:shadow-xl hover:border-primary-500 transition-all duration-300"
    role="article"
    tabIndex={0}
  >
    {/* Title */}
    <h3 className="text-xl font-bold  text-primary-600 dark:text-primary-400 mb-2">
      {repo.name}
    </h3>

    {/* Description */}
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]">
      {repo.description || "No description provided."}
    </p>


    {/* Links */}
    <div className="flex items-center justify-between text-sm">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 
                   hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <FaEye />
        <span>View on GitHub</span>
      </a>
      <span className="flex items-center space-x-1">
        <FaStar className="text-yellow-500" />
        <span>Stars: {repo.stargazers_count}</span>
      </span>
      <span className="flex items-center space-x-1">
        <FaCodeBranch className="text-blue-500" />
        <span>Forks: {repo.forks_count}</span>
        
      </span>
      {repo.language && (
        <span className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 
                         text-primary-600 dark:text-primary-400 text-xs rounded-md">
          {repo.language}
        </span>
      )}
    </div>
  </div>
);

export default RepoCard;
