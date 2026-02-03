import { motion } from "framer-motion";
import { FiGithub, FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SocialLink } from "./SocialLink";

export const Header = ({ userData }) => (
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
        <SocialLink icon={FiGithub} href={userData.html_url} label="GitHub" />
        <SocialLink icon={FiLinkedin} href="#" label="LinkedIn" />
        <SocialLink icon={FiTwitter} href="#" label="Twitter" />
        <SocialLink
          icon={FiMail}
          href={`mailto:${userData.email || "your-email@example.com"}`}
          label="Email"
        />
      </div>
    </motion.div>
  </header>
);
