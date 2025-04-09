import React from 'react';
import { socialLinks } from '../constants';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  return (
    <section className="py-14 px-4 text-center">
      {/* Animated Heading */}
      <motion.h2
         className="text-4xl sm:text-5xl font-extrabold text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 drop-shadow-lg mb-10 hover:drop-shadow-[0_5px_15px_rgba(255,192,203,0.6)] transition duration-500"
         initial={{ opacity: 0, scale: 0.9, y: -20 }}
         whileInView={{ opacity: 1, scale: 1, y: 0 }}
         transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Connect Now
      </motion.h2>

      {/* Social Links */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            target={social.link.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="group w-36 h-36 p-4 bg-white/30 backdrop-blur-md border border-white/10 rounded-2xl 
                       shadow-lg flex flex-col justify-center items-center gap-3 
                       hover:bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 
                       transition-all duration-500 hover:scale-105 hover:-rotate-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:scale-110 transition">
              <img src={social.iconUrl} alt={social.name} className="w-6 h-6 object-contain" />
            </div>
            <p className="text-sm font-semibold text-gray-800 group-hover:text-yellow-800 transition duration-300">
              {social.name}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <motion.p
        className="mt-12 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        © {new Date().getFullYear()} Aman Patel. All rights reserved.
      </motion.p>
    </section>
  );
};

export default SocialLinks;
