import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-emerald-800 mb-8 font-serif">
            Our Vision
          </h2>
          
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-amber-900 leading-relaxed max-w-3xl mx-auto">
            We are developing an agro-based sovereignty project rooted in God's original design 
            of living from the land. Our goal is full self-sustenance and community empowerment, 
            returning to the divine blueprint for abundant life through faithful stewardship 
            of His creation.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center items-center space-x-8"
        >
          <div className="text-emerald-600 text-4xl">🌱</div>
          <div className="text-amber-600 text-4xl">✨</div>
          <div className="text-emerald-600 text-4xl">🌾</div>
        </motion.div>
      </div>
    </section>
  );
}