"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PolicyModalProps {
  policy: {
    id: number;
    title: string;
    description: string;
    icon: any;
    details: string;
  };
  onClose: () => void;
}

export default function PolicyModal({ policy, onClose }: PolicyModalProps) {
  const IconComponent = policy.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="glassy max-w-2xl w-full p-8 rounded-xl overflow-y-auto max-h-[80vh] shadow-lg"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-orange-400/20">
                <IconComponent className="text-orange-400" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {policy.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Coverage details */}
          <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-6">
            {policy.details}
          </p>

          {/* Static highlights */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <p className="text-gray-300">Comprehensive coverage included</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <p className="text-gray-300">Cashless hospitalization available</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <p className="text-gray-300">24/7 customer support</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/919994205504?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20Super%20Star%20Flexy%20health%20insurance%20plan."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 block text-center"
          >
            Get More Information
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
