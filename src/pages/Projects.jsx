import { useEffect, useState } from 'react';
import { fetchRepositories } from '../services/github';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const repos = await fetchRepositories('Dezmils-Tech-Company');

      const mapped = repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        technologies: repo.topics || [],
        is_featured: repo.stargazers_count > 50, // example featured logic
        views: 0
      }));

      setProjects(mapped);
      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <>
    {/* Featured Projects */}
<section className="py-16 bg-gray-50 dark:bg-gray-900/50">
  <div className="container">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A selection of my recent work and open-source contributions
      </p>
    </motion.div>

    {isLoading ? (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    ) : (
      <>
        <ProjectGrid projects={projects.slice(0, 6)} />
        <div className="text-center mt-12">
          <Link to="/projects" className="btn btn-outline group">
            View All Projects
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </>
    )}
  </div>
</section>

</>

  );
};

export default Projects;