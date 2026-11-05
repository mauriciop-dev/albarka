'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { Users, Target, Zap, ArrowUpRight, Brain, Network, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    id: 'personas',
    title: 'Personas',
    subtitle: 'Liderazgo, Resiliencia y Desarrollo del Talento',
    description: 'Potenciamos el capital humano mediante programas de liderazgo transformacional, gestión del cambio centrada en personas y desarrollo de competencias para equipos de alto desempeño.',
    icon: Users,
    accentIcon: HeartHandshake,
    color: 'primary',
    gradient: 'from-primary to-primary-dark',
    features: [
      'Liderazgo Transformacional',
      'Gestión del Cambio Humana',
      'Desarrollo de Competencias',
      'Cultura de Resiliencia',
      'Bienestar Organizacional',
    ],
    metrics: { value: '94%', label: 'Satisfacción en equipos' },
  },
  {
    id: 'procesos',
    title: 'Procesos',
    subtitle: 'Metodologías PMO, Gobernanza y Control',
    description: 'Implementamos oficinas de gestión de proyectos (PMO) con metodologías híbridas, gobernanza adaptativa y controles que garantizan la entrega de valor estratégico.',
    icon: Target,
    accentIcon: Brain,
    color: 'secondary',
    gradient: 'from-secondary to-secondary-dark',
    features: [
      'PMO as a Service',
      'Metodologías Híbridas (Agile/Waterfall)',
      'Gobernanza y Portfolio Management',
      'Gestión de Riesgos y Beneficios',
      'Mejora Continua de Procesos',
    ],
    metrics: { value: '95%', label: 'Tasa de éxito proyectos' },
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    subtitle: 'Soluciones Digitales Ágiles e Integración',
    description: 'Aceleramos la transformación digital mediante herramientas colaborativas, automatización de flujos de trabajo y plataformas de inteligencia de proyectos.',
    icon: Zap,
    accentIcon: Network,
    color: 'accent',
    gradient: 'from-accent to-accent-dark',
    features: [
      'Plataformas PPM/PMO Digitales',
      'Automatización de Reportes',
      'Business Intelligence de Proyectos',
      'Colaboración y Trabajo Híbrido',
      'Integración de Ecosistemas',
    ],
    metrics: { value: '40%', label: 'Reducción tiempo admin' },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Pillars() {
  return (
    <section id="metodologia" className="section-padding bg-background" aria-labelledby="pillars-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-body-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true" />
            Nuestro Framework APT®
          </span>
          <h2 id="pillars-title" className="heading-section">
            Tres Pilares para una Transformación Integral
          </h2>
          <p className="subheading-section">
            Articulamos Personas, Procesos y Tecnología en un marco metodológico propio que garantiza
            alineación estratégica, adopción cultural y resultados medibles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              variants={itemVariants}
              className="group relative"
            >
              <Card variant="interactive" padding="lg" className="h-full relative overflow-hidden">
                {/* Accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
                  style={{ background: `linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                  aria-hidden="true"
                />

                {/* Icon Wrapper */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                  }}
                >
                  <pillar.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </motion.div>

                {/* Accent Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <pillar.accentIcon className="w-10 h-10 text-white/20" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-heading-lg font-bold text-text mb-2">{pillar.title}</h3>
                <p className="text-body-sm text-text-muted mb-4">{pillar.subtitle}</p>
                <p className="text-body-md text-text-light mb-6 leading-relaxed">{pillar.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6" role="list">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-secondary">
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-body-sm text-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Metric */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="text-display-sm font-bold text-primary">{pillar.metrics.value}</div>
                    <div className="text-caption text-text-muted">{pillar.metrics.label}</div>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="text-secondary font-semibold text-body-sm flex items-center gap-1"
                  >
                    Ver más
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </motion.span>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-3xl mx-auto border-secondary/30 bg-gradient-to-br from-secondary/5 to-transparent">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                <Target className="w-8 h-8 text-secondary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-heading-md font-bold text-text">Metodología APT® - Articulación Personas·Procesos·Tecnología</h3>
                <p className="text-body-md text-text-light mt-2">
                  Nuestro marco propietario integra los tres pilares en ciclos de mejora continua, asegurando que
                  cada iniciativa de transformación genere valor sostenible y medible.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}