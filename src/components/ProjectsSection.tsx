import { motion } from 'motion/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Gestión',
    description: 'Descripción pendiente',
    link: '#'
  },
  {
    title: 'Aplicación Web',
    description: 'Descripción pendiente', 
    link: '#'
  },
  {
    title: 'Base de Datos',
    description: 'Descripción pendiente',
    link: '#'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Proyectos</h2>
          <p className="text-muted-foreground">Algunos de mis trabajos y proyectos</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-2xl border border-cyan-300/30 dark:border-cyan-500/30 bg-gradient-to-br from-slate-900/95 via-cyan-900/40 to-slate-800/95 backdrop-blur-md hover:shadow-3xl hover:shadow-cyan-400/30 hover:scale-[1.07] transition-all duration-500 group relative overflow-hidden">
                {/* Space-like background effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-cyan-900/30" />
                
                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random(),
                      }}
                    />
                  ))}
                </div>
                
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 relative z-10">
                  <p className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Button 
                    variant="outline" 
                    className="w-full bg-slate-800/60 border-cyan-500/50 text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                    disabled={project.description === 'Descripción pendiente'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    Ver proyecto
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}