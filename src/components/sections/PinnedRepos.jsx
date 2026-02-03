import { motion } from "framer-motion";
import { RepositoryCard } from "./RepositoryCard";

export const PinnedRepos = ({ pinnedRepos }) => (
  <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
    <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pinnedRepos.map((repo, index) => (
        <motion.div key={repo.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
          <RepositoryCard repo={repo} />
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default PinnedRepos;