import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchRepoLanguages } from '../../services/github';

const LanguageBar = ({ languages }) => {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  
  return (
    <div className="flex h-2 rounded-full overflow-hidden">
      {Object.entries(languages).map(([lang, value], index) => (
        <div
          key={lang}
          className="h-full"
          style={{
            width: `${(value / total) * 100}%`,
            backgroundColor: getLanguageColor(lang),
          }}
        />
      ))}
    </div>
  );
};

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    React: '#61dafb',
    Vue: '#41b883',
    'C++': '#f34b7d',
    Go: '#00ADD8',
    Rust: '#dea584',
    Shell: '#89e051',
  };
  return colors[language] || '#ccc';
};

export const RepositoryCard = ({ repo }) => {
  const [languages, setLanguages] = useState({});
  const [loadingLanguages, setLoadingLanguages] = useState(false);

  useEffect(() => {
    const loadLanguages = async () => {
      setLoadingLanguages(true);
      try {
        const langs = await fetchRepoLanguages(repo.owner.login, repo.name);
        setLanguages(langs);
      } catch (error) {
        console.error('Error loading languages:', error);
      } finally {
        setLoadingLanguages(false);
      }
    };

    loadLanguages();
  }, [repo]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-primary-500" />
          <h3 className="text-xl font-semibold truncate">{repo.name}</h3>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary-500 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
        {repo.description || 'No description provided'}
      </p>

      <div className="space-y-4">
        {!loadingLanguages && Object.keys(languages).length > 0 && (
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {Object.keys(languages).slice(0, 3).map(lang => (
                <span
                  key={lang}
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: `${getLanguageColor(lang)}20`,
                    color: getLanguageColor(lang),
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
            <LanguageBar languages={languages} />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          <span className="text-xs">
            Updated {new Date(repo.updated_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};