import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: GITHUB_TOKEN ? {
    Authorization: `token ${GITHUB_TOKEN}`,
  } : {},
});

export const fetchUserData = async (username=`Dezmils-Tech-Company`) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const fetchRepositories = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

export const fetchPinnedRepos = async (username) => {
  try {
    // GitHub doesn't have a direct API for pinned repos, so we'll fetch all and filter
    const repos = await fetchRepositories(username);
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    throw error;
  }
};

export const fetchUserEvents = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}/events/public`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchRepoLanguages = async (owner, repo) => {
  try {
    const response = await githubApi.get(`/repos/${owner}/${repo}/languages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching languages:', error);
    return {};
  }
};

export const fetchStats = async (username = 'Dezmils-Tech-Company') => {
  try {
    const repos = await fetchRepositories(username)

    const totalProjects = repos.length
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0)

    // Example: featured repos could be those with > 10 stars, or your own criteria
    const featuredCount = repos.filter(repo => repo.stargazers_count > 10).length

    return {
      totalProjects,
      totalStars,
      totalForks,
      featuredCount,
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    return {
      totalProjects: 0,
      totalStars: 0,
      totalForks: 0,
      featuredCount: 0,
    }
  }
}
