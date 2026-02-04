import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';




export default function Hero() {
  return (
    <>
      <section className=" text-white min-h-screen flex justify-center px-6 pt-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left py-4 my-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-cyan-400">Ezra Ndege</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Full-Stack Developer crafting sleek digital experiences with React, Node.js, and MongoDB. I also integrate AI models with Python to supercharge web applications.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/repositories"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center px-4"
          >
            <img
              src="https://i.ibb.co/cXKRgnw5/nba.jpg"
              alt="Ezra Ndege"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
    </>

    );
}