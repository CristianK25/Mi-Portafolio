import { motion } from 'motion/react';
import { Card } from './ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      institution: "Universidad Tecnológica Nacional",
      degree: "Ingeniería en Sistemas",
      duration: "2 años",
      status: "Completado"
    },
    {
      institution: "Universidad Tecnológica Nacional", 
      degree: "Tecnicatura en Programación",
      duration: "Cursando",
      status: "En progreso"
    },
    {
      institution: "Colegio Secundario Martín Zapata",
      degree: "Bachiller en Informática",
      duration: "2020",
      status: "Completado"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      {/* Background with space-like effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-indigo-500/10" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(14)].map((_, i) => (
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
          <h2 className="mb-4 text-white drop-shadow-lg">Educación</h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border-0 rounded-2xl backdrop-blur-md bg-gradient-to-br from-slate-800/70 via-purple-900/40 to-slate-900/80 shadow-2xl shadow-purple-500/20 border border-purple-500/20 hover:shadow-purple-500/30 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-white mb-2 drop-shadow-sm">{edu.degree}</h3>
                    <p className="text-slate-300 mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        edu.status === 'En progreso' 
                          ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                          : 'bg-green-500/20 text-green-300 border border-green-500/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}