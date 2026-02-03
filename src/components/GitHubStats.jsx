import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, Eye, Code } from 'lucide-react';
import { fetchUserData, fetchRepositories } from '../services/github';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="card flex items-center space-x-4"
  >
    <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  </motion.div>
);

export const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const username = import.meta.env.VITE_GITHUB_USERNAME;
        const [userData, repos] = await Promise.all([
          fetchUserData(username),
          fetchRepositories(username),
        ]);

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
        const publicRepos = repos.filter(repo => !repo.fork).length;

        setStats({
          followers: userData.followers,
          following: userData.following,
          publicRepos,
          totalStars,
          totalForks,
        });
      } catch (error) {
        console.error('Error loading stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        icon={Star}
        label="Total Stars"
        value={stats.totalStars}
        color="text-yellow-500"
      />
      <StatCard
        icon={GitFork}
        label="Total Forks"
        value={stats.totalForks}
        color="text-blue-500"
      />
      <StatCard
        icon={Eye}
        label="Followers"
        value={stats.followers}
        color="text-green-500"
      />
      <StatCard
        icon={Code}
        label="Public Repos"
        value={stats.publicRepos}
        color="text-purple-500"
      />
    </div>
  );
};