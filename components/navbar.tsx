"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Updated nav items with About
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#executive" }, // About points to executive-section
    { label: "Policies", href: "#policies" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-blue-900/20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Logo + Client Name + Tagline */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-400/50">
              <span className="text-white font-bold text-lg md:text-xl">SS</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg md:text-2xl">
                MR. Shanmuga Sundaram
              </span>
              <span className="text-gray-300 text-xs md:text-sm">
                 Star Health Insurance Executive
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ color: "#FF8C00" }}
                className="text-gray-200 hover:text-orange-400 transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-200 hover:text-orange-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
