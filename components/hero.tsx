"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
  id="home"
  className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden"
>
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="text-center w-full max-w-4xl mx-auto"
  >
    {/* Main Heading */}
    <motion.h1
      variants={itemVariants}
      className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug sm:leading-tight break-words"
    >
      Your Trusted Health Insurance{" "}
      <span className="text-orange-400 block sm:inline">Expert</span>
    </motion.h1>

    {/* Typing Tagline */}
    <motion.div variants={itemVariants} className="mb-8 px-2">
      <p className="text-base sm:text-xl text-gray-300 mb-4 leading-relaxed">
        Helping clients secure the best health insurance plans for over 10 years.
      </p>
    </motion.div>

    {/* Stats */}
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12 w-full max-w-2xl mx-auto"
    >
      <div className="glassy p-3 sm:p-4 rounded-lg">
        <p className="text-xl sm:text-3xl font-bold text-orange-400">10+</p>
        <p className="text-sm text-gray-300">Years Experience</p>
      </div>
      <div className="glassy p-3 sm:p-4 rounded-lg">
        <p className="text-xl sm:text-3xl font-bold text-orange-400">3000+</p>
        <p className="text-sm text-gray-300">Satisfied Clients</p>
      </div>
      <div className="glassy p-3 sm:p-4 rounded-lg col-span-2 sm:col-span-1">
        <p className="text-xl sm:text-3xl font-bold text-orange-400">100%</p>
        <p className="text-sm text-gray-300">Dedicated Support</p>
      </div>
    </motion.div>

    {/* CTA Buttons */}
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-orange-400/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        Get Consultation <ArrowRight size={18} />
      </motion.a>

      <motion.a
        href="https://wa.me/919994205504?text=Hi%2C%20I%20want%20to%20get%20a%20health%20insurance%20consultation%20with%20Mr.%20Shanmuga%20Sundaram."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
      >
        Chat on WhatsApp
      </motion.a>
    </motion.div>
  </motion.div>
</section>
  )
}
