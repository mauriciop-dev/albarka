'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Briefcase, Users, RefreshCw, Cpu, ArrowRight, CheckCircle, BarChart3, GraduationCap, Shield, Layers } from 'lucide-react';

const services = [
  {
    id: 'servicios-pmo',
    title: 'PMO as a Service',
    description: 'Implementamos y operamos Oficinas de Gestión de Proyectos (PMO) adaptadas a la madurez de tu organización, desde PMO de apoyo hasta PMO directivas estratégicas.',
    icon: Briefcase,
    color: 'primary',
    gradientFrom: '#0F2C59',
    gradientTo: '#1A3D6E',
    features: [
      'Diseño y puesta en marcha de PMO',
      'Gestión de portafolio de proyectos',
      'Governance y reporting ejecutivo',
      'Metodologías híbridas (Agile/Waterfall)',
      'Gestión de recursos y capacidad',
      'Oficina de transformación (EPMO)',
    ],
    outcomes: ['Visibilidad 360° del portafolio', 'Alineación estratégica garantizada', 'Entrega predecible de valor'],
    cta: 'Diseñar mi PMO',
  },
  {
    id: 'servicios-formacion',
    title: 'Formación Equipos Alto Desempeño',
    description: 'Desarrollamos capacidades de liderazgo y gestión de proyectos mediante programas experienciales, certificaciones y coaching para equipos que entregan resultados extraordinarios.',
    icon: GraduationCap,
    color: 'secondary',
    gradientFrom: '#00A88F',
    gradientTo: '#008772',
    features: [
      'Liderazgo de proyectos transformacional',
      'Certificaciones PMP® / CAPM® / Agile',
      'Team building para equipos de proyecto',
      'Coaching ejecutivo y de equipos',
      'Academia corporativa de gestión',
      'Desarrollo de competencias blandas',
    ],
    outcomes: ['Equipos autónomos y resilientes', 'Cultura de entrega y accountability', 'Retención de talento clave'],
    cta: 'Capacitar a mi equipo',
  },
  {
    id: 'servicios-cambio',
    title: 'Gestión del Cambio Organizacional',
    description: 'Acompañamos transformaciones complejas con metodología estructurada centrada en personas, minimizando resistencia y maximizando adopción y sostenibilidad del cambio.',
    icon: RefreshCw,
    color: 'accent',
    gradientFrom: '#00B4D8',
    gradientTo: '#0090AA',
    features: [
      'Estrategia y planificación del cambio',
      'Análisis de impacto y stakeholders',
      'Comunicación y engagement',
      'Formación y habilitación',
      'Refuerzo y sostenibilidad',
      'Medición de adopción y ROI del cambio',
    ],
    outcomes: ['Adopción >90% en iniciativas', 'Reducción de resistencia activa', 'Cambios sostenibles en el tiempo'],
    cta: 'Gestionar mi cambio',
  },
  {
    id: 'servicios-tech',
    title: 'Soluciones Tecnológicas PMO',
    description: 'Implementamos plataformas digitales para la gestión de portafolios, automatización de reportes, business intelligence de proyectos y ecosistemas de colaboración.',
    icon: Cpu,
    color: 'primary',
    gradientFrom: '#0F2C59',
    gradientTo: '#1A3D6E',
    features: [
      'Implementación PPM (MS Project, Monday, Asana, Jira)',
      'Dashboards ejecutivos y reportes automatizados',
      'Business Intelligence de proyectos (Power BI / Tableau)',
      'Automatización de flujos de trabajo (Power Automate)',
      'Integración de ecosistemas tecnológicos',
      'Migración y adopción de herramientas',
    ],
    outcomes: ['40% menos tiempo administrativo', 'Visibilidad en tiempo real', 'Decisiones basadas en datos'],
    cta: 'Digitalizar mi PMO',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-white" aria-labelledby="services-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-body-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
            Servicios de Dirección de Proyectos
          </span>
          <h2 id="services-title" className="heading-section">
            Soluciones Integrales para tu Transformación
          </h2>
          <p className="subheading-section">
            Cuatro líneas de servicio especializadas que se combinan según las necesidades de tu organización,
            desde la estrategia hasta la ejecución y la adopción cultural.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.article key={service.id} variants={itemVariants} className="group">
              <Card variant="interactive" padding="lg" className="h-full flex flex-col relative overflow-hidden">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${service.gradientFrom}, ${service.gradientTo})`,
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${service.gradientFrom}, ${service.gradientTo})`,
                  }}
                >
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-heading-md font-bold text-text mb-2">{service.title}</h3>
                  <p className="text-body-md text-text-light mb-6 leading-relaxed flex-1">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4.5 h-4.5 flex-shrink-0 text-secondary mt-0.5" aria-hidden="true" />
                        <span className="text-body-sm text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcomes */}
                  <div className="bg-background rounded-card p-4 mb-6 border border-border">
                    <div className="text-caption font-semibold text-text-muted uppercase tracking-wider mb-3">Resultados Esperados</div>
                    <ul className="space-y-1.5" role="list">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-2 text-body-sm text-text-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" asChild>
                    <a href="#contacto" className="flex items-center justify-center gap-2">
                      {service.cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        {/* Cross-service note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="card max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <Layers className="w-8 h-8 text-primary" aria-hidden="true" />
                <div className="text-left">
                  <div className="text-heading-sm font-bold text-text">Enfoque Integrado</div>
                  <div className="text-body-sm text-text-muted">Combina servicios para máximo impacto</div>
                </div>
              </div>
              <p className="text-body-md text-text-light max-w-xl">
                Nuestros servicios están diseñados para trabajar en sinergia. Una implementación de PMO
                se potencia con formación de equipos, se sustenta en gestión del cambio y se acelera con tecnología.
              </p>
              <Button variant="secondary" size="sm" asChild className="mt-2 md:mt-0">
                <a href="#contacto">Diseñar Solución Integrada</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}