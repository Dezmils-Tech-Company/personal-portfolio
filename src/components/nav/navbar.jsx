// src/components/layout/Navbar.jsx
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX, FiFolder, FiTool, FiUser, FiMail, FiSettings } from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: <FaHome /> },
     { to: '/repositories', label: 'Repositories', icon: <FiFolder /> },
    { to: '/skills', label: 'Skills', icon: <FiTool /> },
    { to: '/resume', label: 'Resume', icon: <FiFolder /> },
    { to: '/about', label: 'About', icon: <FiUser /> },
    { to: '/contact', label: 'Contact', icon: <FiMail /> },
    { to: '/admin', label: 'Admin', icon: <FiSettings /> },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"> <img src="https://i.ibb.co/KxnXs1qx/rrrr.jpg" alt="Dezmils Tech Company" className="w-full h-full rounded-full object-cover" /></div>
            <span className="text-xl text-cyan-500 font-semibold ">CEO</span>
            <span className="text-xl font-bold text-gray-900">Dezmils Tech Company</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-1 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-blue-700 hover:bg-blue-100'
                  }`
                }
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar