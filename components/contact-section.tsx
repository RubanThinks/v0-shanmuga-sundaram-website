"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:sss.pvdr1@gmail.com?subject=Health Insurance Inquiry from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0DPhone: ${formData.phone}%0D%0DMessage:%0D${formData.message}`

    window.location.href = mailtoLink
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Have questions? We're here to help you find the perfect insurance plan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="p-4 rounded-lg bg-orange-400/20 h-fit">
                <Phone className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a href="tel:+919994205504" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +91 9994205504
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-4 rounded-lg bg-orange-400/20 h-fit">
                <Mail className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href="mailto:sss.pvdr1@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  sss.pvdr1@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
  <div className="p-4 rounded-lg bg-orange-400/20 h-fit">
    <MapPin className="text-orange-400" size={24} />
  </div>
  <div>
    <h3 className="text-white font-semibold mb-2">Location</h3>
    <p className="text-gray-300">
      <a
        href="https://www.google.com/maps?q=Vincent,+bus+stop,+13,+Cherry+Rd,+Salem,+Tamil+Nadu+636007"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition-colors"
      >
        Vincent, bus stop, 13, Cherry Rd, Salem, Tamil Nadu 636007
      </a>
    </p>
  </div>
</div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glassy p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-900/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-900/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-blue-900/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-blue-900/30 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your insurance needs..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center font-semibold"
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
