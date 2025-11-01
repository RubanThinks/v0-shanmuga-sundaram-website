"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import PolicyModal from "./policy-modal";

const policies = [
  {
    id: 1,
    title: "Super Star Flexy",
    description:
      "Comprehensive plan with automatic restoration, premium waiver, AYUSH cover, and much more.",
    icon: Star,
    details: `⭐ Automatic Restoration of Sum Insured
Up to 100% SI, unlimited times in a policy year for related and unrelated illness for subsequent hospitalisation.

⭐ Cumulative Bonus

⭐ Air Ambulance

⭐ Organ Donor Expenses
Coverage up to the SI, including the donor’s post-donation complications.

⭐ Unlimited Tele-consultation
Available on STAR Health App
AI Driven face scan — 2 times per month for each Insured.

⭐ Modern Treatments
Coverage for 10+ modern treatments including Bronchical Thermoplasty, Robotic surgery, Vaporisation of the prostate among others - Up to SI.

⭐ Road Ambulance
Covered up to the SI.

⭐ Anesthesia, blood, oxygen, operation theatre charges, ICU charges
Covered upto SI.

⭐ Room, Boarding and Nursing Charges
No limit on room rent.

⭐ Freeze your Age
Insured will pay premium as per the entry age till the insured makes the first claim (hospitalisation or day care). This is available up to Age 50 only.

⭐ Day Care Procedures
All Day Care Procedures covered up to the SI.

⭐ AYUSH Treatment
Covered up to the SI.

⭐ Pre and Post Hospitalization
Medical expenses incurred within 90 days before and up to 180 days after hospitalization are covered.

⭐ Premium Waiver
One year premium is waived if the proposer (who is also insured) is diagnosed with a listed critical illness or dies due to an accident.

⭐ STAR Wellness Program
Accessible through the STAR Health App and STAR Wellness App; earn over 1,000 points annually through wellness activities. Points redeemable for up to 20% discount on renewal premium.`,
  },
];

export default function PoliciesSection() {
  const [selectedPolicy, setSelectedPolicy] = useState<(typeof policies)[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
            Our <span className="text-orange-400">Policy</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our all-in-one health insurance plan designed for complete protection.
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
            const IconComponent = policy.icon;
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
            );
          })}
        </motion.div>
      </div>

      {selectedPolicy && (
        <PolicyModal policy={selectedPolicy} onClose={() => setSelectedPolicy(null)} />
      )}
    </section>
  );
                }
