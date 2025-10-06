"use client";

import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-dark-900 text-dark-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-t border-dark-800 py-6">
          <div className="flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-dark-400 text-sm flex items-center gap-1"
            >
              Made with <FiHeart className="text-red-500" /> by Kusum  © {new Date().getFullYear()}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}