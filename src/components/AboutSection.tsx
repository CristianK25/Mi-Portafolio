import { motion } from 'motion/react';
import { Card } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background with space-like effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-indigo-500/10" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white drop-shadow-lg">Sobre mí</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 border-0 rounded-2xl backdrop-blur-md bg-gradient-to-br from-slate-800/70 via-cyan-900/40 to-slate-900/80 shadow-2xl shadow-cyan-500/20 border border-cyan-500/20 hover:shadow-cyan-500/30 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="relative">
              {/* Glow effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent rounded-xl" />
              
              <p className="leading-relaxed text-center text-slate-100 relative z-10 drop-shadow-sm">
                Me motiva profundizar en cada detalle y seguir creciendo profesionalmente.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}