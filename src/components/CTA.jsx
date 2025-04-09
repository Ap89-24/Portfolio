import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-16 px-6 sm:px-10 rounded-3xl mt-24 mx-auto max-w-5xl text-center"
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-sm mb-8 leading-tight animate-bounce"
      >
        Got an idea in mind? <br className="sm:block hidden" />
        <span className="text-gray-900">Let’s bring it to life.</span>
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-tr from-yellow-400 to-pink-400 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,186,90,0.6)]"
        >
          Contact Me
          <Rocket className="w-5 h-5" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
