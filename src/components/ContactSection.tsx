import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {

  const contactInfo = [
    {
      icon: Phone,
      label: 'Celular',
      value: '+54 261 472 0339',
      href: 'tel:+5426147203390',
      color: 'hover:text-green-500',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'krahulikcristian@gmail.com',
      href: 'mailto:krahulikcristian@gmail.com',
      color: 'hover:text-red-500',
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Contacto</h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <Card className="shadow-2xl border border-cyan-200/50 dark:border-cyan-800/50 bg-gradient-to-br from-white/90 via-cyan-50/30 to-blue-50/50 dark:from-gray-800/90 dark:via-cyan-900/30 dark:to-blue-900/30 backdrop-blur-md hover:shadow-3xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-500">
              <CardHeader>
                <CardTitle>Mis datos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:shadow-xl transition-all duration-300 group border border-gray-200/50 dark:border-gray-600/50 hover:scale-105 ${contact.color}`}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${contact.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}