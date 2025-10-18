"use client"
"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, Users } from "lucide-react"

export default function ExecutiveSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glassy p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl shadow-orange-400/30">
                <img
                  src="/professional-insurance-executive-portrait.jpg"
                  alt="Mr. Shanmuga Sundaram S"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mr. Shanmuga Sundaram S</h2>
              <p className="text-orange-400 font-semibold mb-6">Senior Sales Manager, Star Health Insurance</p>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                With over a decade of expertise in the health insurance industry, Mr. Shanmuga Sundaram is dedicated to
                helping clients find the perfect Star Health Insurance plan tailored to their unique needs. His
                commitment to excellence and customer satisfaction has earned him the trust of over 3,000 satisfied
                clients.
              </p>

              {/* Highlights */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Award className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">Expert Guidance</h3>
                    <p className="text-gray-400 text-sm">Personalized insurance solutions for every client</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Briefcase className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">10+ Years Experience</h3>
                    <p className="text-gray-400 text-sm">Proven track record in health insurance</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Users className="text-orange-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-semibold">3000+ Clients</h3>
                    <p className="text-gray-400 text-sm">Trusted by thousands of satisfied customers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
