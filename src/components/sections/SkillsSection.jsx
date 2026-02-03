import { motion } from "framer-motion";

export const SkillsSection = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Express.js", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "AWS", level: "Beginner" },
  ];

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div className="card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 text-center"
            >
              <h3 className="font-semibold mb-1">{skill.name}</h3>
              <span className="text-sm text-primary-600 dark:text-primary-400">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
