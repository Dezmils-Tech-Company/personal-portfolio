import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Twitter, Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import { LoadingSpinner } from './components/LoadingSpinner';
import { GitHubStats } from './components/GitHubStats';
import { RepositoryCard } from './components/RepositoryCard';
import { fetchUserData, fetchPinnedRepos } from './services/github';

const SocialLink = ({ icon: Icon, href, label }) => (
  <motion.a
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

function App() {
  const [userData, setUserData] = useState(null);
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const username = import.meta.env.VITE_GITHUB_USERNAME;
        const [user, repos] = await Promise.all([
          fetchUserData(username),
          fetchPinnedRepos(username),
        ]);
        
        setUserData(user);
        setPinnedRepos(repos);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600">
              GitHub Portfolio
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              MERN Stack Developer
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <SocialLink
              icon={Github}
              href={userData.html_url}
              label="GitHub"
            />
            <SocialLink
              icon={Linkedin}
              href="#"
              label="LinkedIn"
            />
            <SocialLink
              icon={Twitter}
              href="#"
              label="Twitter"
            />
            <SocialLink
              icon={Mail}
              href={`mailto:${userData.email || 'your-email@example.com'}`}
              label="Email"
            />
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="card">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={userData.avatar_url}
                alt={userData.name || userData.login}
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">
                  {userData.name || userData.login}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {userData.bio || 'Full-stack developer passionate about building amazing web applications.'}
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {userData.location && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {userData.location}
                    </div>
                  )}
                  {userData.blog && (
                    <a
                      href={userData.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700"
                    >
                      <LinkIcon className="w-4 h-4 mr-2" />
                      Portfolio
                    </a>
                  )}
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    Joined {new Date(userData.created_at).getFullYear()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">GitHub Statistics</h2>
          <GitHubStats />
        </motion.section>

        {/* Pinned Repositories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <RepositoryCard repo={repo} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'React', level: 'Advanced' },
                { name: 'Node.js', level: 'Advanced' },
                { name: 'MongoDB', level: 'Intermediate' },
                { name: 'Express.js', level: 'Advanced' },
                { name: 'TypeScript', level: 'Intermediate' },
                { name: 'Tailwind CSS', level: 'Advanced' },
                { name: 'Git', level: 'Advanced' },
                { name: 'AWS', level: 'Beginner' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                  className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-center"
                >
                  <h3 className="font-semibold mb-1">{skill.name}</h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>Built with React, Vite, and GitHub API</p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;