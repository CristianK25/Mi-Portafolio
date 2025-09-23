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
  { name: 'SQL', icon: SQLIcon, color: 'from-blue-500 to-blue-700' },
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
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto max-w-6xl">
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
          className="mb-12"
        >
          <h3 className="mb-6 text-center text-muted-foreground">Habilidades Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon with glow effect */}
                  <div className="relative z-10 mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <skill.icon className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="text-sm py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:from-white group-hover:to-gray-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-700 transition-all duration-300 shadow-md group-hover:shadow-lg relative z-10"
                  >
                    {skill.name}
                  </Badge>
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
          <h3 className="mb-6 text-center text-muted-foreground">Habilidades Blandas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center shadow-xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-110 transition-all duration-500 group relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon with glow effect */}
                  <div className="relative z-10 mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <skill.icon className="h-6 w-6 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="text-sm py-2 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:from-white group-hover:to-gray-100 dark:group-hover:from-gray-600 dark:group-hover:to-gray-700 transition-all duration-300 shadow-md group-hover:shadow-lg relative z-10"
                  >
                    {skill.name}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}