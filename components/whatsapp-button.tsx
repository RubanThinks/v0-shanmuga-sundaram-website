"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919994205504?text=Hi%2C%20I%20want%20to%20get%20a%20health%20insurance%20consultation%20with%20Mr.%20Shanmuga%20Sundaram."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg hover:shadow-green-400/50 transition-all duration-300"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <Image
          src="/WhatsApp.png" // your image in the public folder
          alt="WhatsApp"
          width={28}
          height={28}
          className="w-7 h-7" // ensures it fits nicely in the button
        />
      </motion.div>
    </motion.a>
  )
}
