"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="backdrop-blur-xl bg-blue-950/40 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          
          {/* Social Icons + Google Maps */}
          <div className="flex gap-6">
            <motion.a
              href="https://www.instagram.com/shanmuga_sundaram_official/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#FF8C00" }}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/shanmugasundaram.swamynathan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#FF8C00" }}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="mailto:healthinsurancetnsss@gmail.com"
              whileHover={{ scale: 1.2, color: "#FF8C00" }}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://maps.google.com?q=Vincent+bus+stop+13+Cherry+Rd+Salem+Tamil+Nadu+636007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#FF8C00" }}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300"
            >
              <MapPin size={24} />
            </motion.a>
          </div>

          {/* Disclaimer */}
          <p className="text-gray-400 text-sm text-center max-w-2xl mt-4">
            Independent Star Health Insurance Executive — Not the official Star Health Insurance website.
          </p>

          {/* Copyright */}
          <p className="text-gray-500 text-xs">© 2025 Mr. Shanmuga Sundaram S. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
            }
