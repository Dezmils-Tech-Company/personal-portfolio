import RepoCard from "./RepoCard";

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return (
      <p className="text-terminal-muted text-center">
        No repositories found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {repos.map((repo) => (
        <RepoCard key={repo.id || repo.github_id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
