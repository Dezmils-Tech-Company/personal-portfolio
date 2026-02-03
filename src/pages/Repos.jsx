import React, { useEffect, useState } from "react";
import { fetchRepositories } from "../services/github";
import RepoList from "../pages/repos/RepoList.jsx";
import Spiner from "../components/Shared/Spinner.jsx";

const Repos = ({ username = "Dezmils-Tech-Company" }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchRepositories(username);
        setRepos(data);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
      } finally {
        setLoading(false);
      }
    };
    loadRepos();
  }, [username]);

  if (loading) return <Spiner message="Loading repositories..." />;

  return <RepoList repos={repos} />;
};

export default Repos;
