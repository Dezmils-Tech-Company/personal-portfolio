import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../Shared/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              {/* Removed nested Link — Logo already handles routing */}
              <Logo />
              <p className="text-gray-400 mt-3">
                Hi, I’m Dezmil — a full‑stack developer and system architect. 
                I design scalable platforms, sleek UIs, and automation workflows 
                that blend creativity with mathematics.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <a
                href="https://github.com/Dezmils-Tech-Company"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/dezmil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://twitter.com/dez_ezra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://instagram.com/dezmils"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-orange-400">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Email: dezmil.dev@gmail.com</li>
              <li>Phone: +254 712 310 100</li>
              <li>Location: Kisumu, Kenya</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4 text-orange-400">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on my latest projects and articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-black font-medium px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Dezmil Portfolio. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              <Link to="/privacy-policy" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
