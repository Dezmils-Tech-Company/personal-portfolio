import { motion } from "framer-motion";

export const SocialLink = ({ icon: Icon, href, label }) => (
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
