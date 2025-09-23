import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Users, MessageCircle, Clock, Package, Target, CheckCircle } from 'lucide-react';

export function ExperienceSection() {
  const responsibilities = [
    { icon: MessageCircle, text: 'Atención al cliente y comunicación' },
    { icon: Clock, text: 'Cumplimiento de tiempos y coordinación con el equipo' },
    { icon: Package, text: 'Traslado y armado de mobiliario' },
    { icon: Target, text: 'Organización y control de materiales' },
    { icon: Users, text: 'Trabajo en equipo para cumplir tiempos y calidad de servicio' }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Experiencia Laboral</h2>
          <p className="text-muted-foreground">Mi trayectoria profesional</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl border border-indigo-300/30 dark:border-indigo-400/30 bg-gradient-to-br from-slate-900/95 via-indigo-900/40 to-slate-800/95 backdrop-blur-md hover:shadow-3xl hover:shadow-indigo-400/30 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
            {/* Space-like background effects */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-500/10 to-purple-500/15" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-indigo-900/30" />
            
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.7, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-slate-100 drop-shadow-lg">Soul Livings</CardTitle>
                  <p className="text-slate-400">Ayudante</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
              <p className="text-slate-300">
                Experiencia desarrollando habilidades clave en atención al cliente y trabajo en equipo.
              </p>
              
              <div className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={responsibility.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-slate-800/60 via-indigo-900/50 to-slate-800/60 border border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex-shrink-0">
                      <responsibility.icon className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-slate-200 text-sm flex-1">
                      {responsibility.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}