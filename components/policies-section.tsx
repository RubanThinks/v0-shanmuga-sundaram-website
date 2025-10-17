"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, Shield, Users, TrendingUp, Zap, Home, Baby, Briefcase, AlertCircle, Pill, Smile } from "lucide-react"
import PolicyModal from "./policy-modal"

const policies = [
  {
    id: 1,
    title: "Comprehensive Health Coverage",
    description: "Complete health protection with hospitalization, surgery, and medication coverage.",
    icon: Heart,
    details:
      "Covers inpatient and outpatient treatments, diagnostic tests, and emergency care with cashless facilities at network hospitals.",
  },
  {
    id: 2,
    title: "Family Floater Plans",
    description: "Protect your entire family with a single comprehensive policy.",
    icon: Users,
    details: "Flexible coverage for the whole family with shared sum insured and individual claim benefits.",
  },
  {
    id: 3,
    title: "Critical Illness Coverage",
    description: "Financial protection against major health emergencies.",
    icon: AlertCircle,
    details: "Covers critical illnesses like cancer, heart attack, stroke, and kidney failure with lump sum benefits.",
  },
  {
    id: 4,
    title: "Maternity & Child Care",
    description: "Special coverage for pregnancy and newborn care.",
    icon: Baby,
    details: "Includes pre-natal, post-natal, and newborn care with delivery and hospitalization benefits.",
  },
  {
    id: 5,
    title: "Senior Citizen Plans",
    description: "Tailored coverage for elderly family members.",
    icon: Shield,
    details: "Designed specifically for seniors with higher coverage limits and comprehensive health benefits.",
  },
  {
    id: 6,
    title: "Dental & Vision Care",
    description: "Optional add-ons for dental and eye care coverage.",
    icon: Smile,
    details: "Covers dental treatments, eye checkups, and vision correction procedures.",
  },
  {
    id: 7,
    title: "Wellness Programs",
    description: "Preventive health benefits and wellness initiatives.",
    icon: Zap,
    details: "Annual health checkups, fitness programs, and preventive care benefits included.",
  },
  {
    id: 8,
    title: "Corporate Health Plans",
    description: "Customized solutions for businesses and employees.",
    icon: Briefcase,
    details: "Group health insurance with flexible coverage options and competitive premiums.",
  },
  {
    id: 9,
    title: "Cashless Hospitalization",
    description: "Seamless treatment at network hospitals.",
    icon: Home,
    details: "Access to 10,000+ network hospitals with direct billing and zero paperwork.",
  },
  {
    id: 10,
    title: "Pharmacy Benefits",
    description: "Discounted medicines and pharmacy services.",
    icon: Pill,
    details: "Cashless pharmacy access with discounts on prescribed medications.",
  },
  {
    id: 11,
    title: "Accident Coverage",
    description: "Protection against accidental injuries and emergencies.",
    icon: TrendingUp,
    details: "Covers accidental injuries, emergency treatments, and rehabilitation services.",
  },
  {
    id: 12,
    title: "Lifetime Renewability",
    description: "Continuous coverage throughout your life.",
    icon: Shield,
    details: "Guaranteed renewal without age limits or health condition restrictions.",
  },
]

export default function PoliciesSection() {
  const [selectedPolicy, setSelectedPolicy] = useState<(typeof policies)[0] | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="policies" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Insurance <span className="text-orange-400">Policies</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive health insurance solutions designed to protect you and your family
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {policies.map((policy) => {
            const IconComponent = policy.icon
            return (
              <motion.div
                key={policy.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glassy-card cursor-pointer group"
                onClick={() => setSelectedPolicy(policy)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-orange-400/20 group-hover:bg-orange-400/30 transition-colors">
                    <IconComponent className="text-orange-400" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{policy.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{policy.description}</p>
                <button className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors">
                  Know More →
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {selectedPolicy && <PolicyModal policy={selectedPolicy} onClose={() => setSelectedPolicy(null)} />}
    </section>
  )
}
