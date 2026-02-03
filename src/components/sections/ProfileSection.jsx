import { motion } from "framer-motion";
import { MapPin, Calendar, Link as LinkIcon } from "lucide-react";

export const ProfileSection = ({ userData }) => (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-12">
    <div className="card">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={userData.avatar_url}
          alt={userData.name || userData.login}
          className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">{userData.name || userData.login}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {userData.bio || "Full-stack developer passionate about building amazing web applications."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {userData.location && (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                {userData.location}
              </div>
            )}
            {userData.blog && (
              <a href={userData.blog} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-600 hover:text-primary-700">
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
);
