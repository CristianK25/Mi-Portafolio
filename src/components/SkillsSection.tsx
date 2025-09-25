import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  JavaIcon,
  SQLIcon,
  SpringBootIcon,
  GitIcon
} from './icons/TechnologyIcons';
import { Code2, Users, Target, Heart, MessageCircle, Lightbulb, Zap, Globe } from 'lucide-react';

const technicalSkills = [
  { name: 'Java', icon: JavaIcon, color: 'from-red-600 to-orange-600' },
  { name: 'MySQL', icon: SQLIcon, color: 'from-blue-500 to-blue-700' },
  { name: 'Spring', icon: SpringBootIcon, color: 'from-green-500 to-green-700' },
  { name: 'Git', icon: GitIcon, color: 'from-orange-600 to-red-700' },
  { name: 'Inglés básico', icon: Globe, color: 'from-indigo-500 to-purple-600' }
];

const softSkills = [
  { name: 'Organización', icon: Target, color: 'from-blue-500 to-blue-700' },
  { name: 'Atención al detalle', icon: Zap, color: 'from-yellow-500 to-orange-600' },
  { name: 'Aprendizaje autónomo', icon: Lightbulb, color: 'from-purple-500 to-pink-600' },
  { name: 'Empatía', icon: Heart, color: 'from-red-500 to-pink-600' },
  { name: 'Trabajo en equipo', icon: Users, color: 'from-green-500 to-teal-600' },
  { name: 'Adaptabilidad', icon: Code2, color: 'from-cyan-500 to-blue-600' },
  { name: 'Comunicación clara y directa', icon: MessageCircle, color: 'from-indigo-500 to-purple-600' }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background with space-like effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-indigo-500/10" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Habilidades</h2>
          <p className="text-muted-foreground">Competencias técnicas y blandas</p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">Stack Tecnológico</h3>
            <p className="text-sm text-muted-foreground/80">Tecnologías y herramientas que domino</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative p-0 border-0 bg-transparent overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  {/* Main card container with glass effect */}
                  <div className="relative p-6 rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-2xl group-hover:shadow-3xl group-hover:border-blue-400/30 transition-all duration-500">
                    {/* Animated glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 blur-sm transition-all duration-500`} />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Floating particles effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 20}%`,
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Icon container with modern design */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} blur-md opacity-40 group-hover:opacity-60 group-hover:blur-lg transition-all duration-500`} />
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                          <skill.icon className="h-7 w-7 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      
                      {/* Skill name with modern typography */}
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600/40 group-hover:bg-gray-700/60 group-hover:border-blue-400/40 group-hover:text-white transition-all duration-300 shadow-lg">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="mb-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Competencias Profesionales</h3>
            <p className="text-sm text-muted-foreground/80">Habilidades interpersonales y de desarrollo personal</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative p-0 border-0 bg-transparent overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                  {/* Main card container with glass effect */}
                  <div className="relative p-6 rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 shadow-2xl group-hover:shadow-3xl group-hover:border-green-400/30 transition-all duration-500">
                    {/* Animated glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-15 blur-sm transition-all duration-500`} />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Floating particles effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-green-400/60 rounded-full"
                          style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 20}%`,
                          }}
                          animate={{
                            y: [-10, -20, -10],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Icon container with modern design */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} blur-md opacity-40 group-hover:opacity-60 group-hover:blur-lg transition-all duration-500`} />
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                          <skill.icon className="h-7 w-7 text-white drop-shadow-lg" />
                        </div>
                      </div>
                      
                      {/* Skill name with modern typography */}
                      <div className="text-center">
                        <span className="inline-block px-4 py-2 text-sm font-medium text-gray-200 bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-600/40 group-hover:bg-gray-700/60 group-hover:border-green-400/40 group-hover:text-white transition-all duration-300 shadow-lg">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}