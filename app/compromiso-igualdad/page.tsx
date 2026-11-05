'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { Award, Shield, Users, Heart, Download, ArrowLeft, CheckCircle, FileText, Scale } from 'lucide-react';

const principles = [
  {
    id: 'equidad-genero',
    title: 'Equidad de Género',
    description: 'Garantizamos la igualdad de oportunidades, trato y condiciones entre mujeres y hombres en todos los procesos organizacionales: selección, promoción, formación, retribución y conciliación.',
    icon: Scale,
    commitments: [
      'Política de igualdad salarial transparente',
      'Planes de carrera sin sesgo de género',
      'Cuotas de representación en liderazgo',
      'Prevención del acoso sexual y por razón de sexo',
    ],
  },
  {
    id: 'no-discriminacion',
    title: 'No Discriminación',
    description: 'Promovemos entornos libres de discriminación por origen étnico, edad, discapacidad, orientación sexual, identidad de género, religión, opiniones políticas o cualquier otra condición personal o social.',
    icon: Shield,
    commitments: [
      'Código de conducta cero tolerancia',
      'Canales confidenciales de denuncia',
      'Formación obligatoria en diversidad',
      'Adaptaciones razonables para discapacidad',
    ],
  },
  {
    id: 'talento-sesgos',
    title: 'Desarrollo de Talento sin Sesgos',
    description: 'Diseñamos procesos de evaluación, desarrollo y promoción basados exclusivamente en mérito, competencias y potencial, eliminando sesgos inconscientes mediante herramientas objetivas y comités diversos.',
    icon: Users,
    commitments: [
      'Evaluaciones por competencias estandarizadas',
      'Comités de talento diversos e inclusivos',
      'Programas de mentoring cruzado',
      'Auditorías anuales de equidad en promociones',
    ],
  },
  {
    id: 'conciliacion',
    title: 'Conciliación Vida Laboral-Personal',
    description: 'Facilitamos la corresponsabilidad y el equilibrio entre la vida profesional y personal mediante políticas de flexibilidad, permisos extendidos y cultura de respeto al tiempo de descanso y desconexión digital.',
    icon: Heart,
    commitments: [
      'Horario flexible y trabajo híbrido',
      'Permisos parentales equiparados y extendidos',
      'Derecho a la desconexión digital',
      'Apoyo a cuidados y responsabilidades familiares',
    ],
  },
  {
    id: 'entornos-seguros',
    title: 'Entornos de Trabajo Seguros y Empáticos',
    description: 'Fomentamos una cultura de bienestar psicológico, seguridad psicológica y liderazgo empático donde todas las personas se sienten valoradas, escuchadas y seguras para expresar su autenticidad.',
    icon: Award,
    commitments: [
      'Programa de bienestar integral',
      'Liderazgo basado en inteligencia emocional',
      'Espacios de escucha activa y feedback',
      'Protocolos de actuación ante conflicto',
    ],
  },
];

const certifications = [
  { label: 'Certificado Igualdad de Género', issuer: 'Ministerio de Igualdad', year: '2024' },
  { label: 'Sello Empresa Inclusiva', issuer: 'Fundación ONCE', year: '2023' },
  { label: 'Autodeclaración Propiedad Femenina', issuer: 'Cámara de Comercio', year: '2024' },
  { label: 'Compromiso Sostenibilidad', issuer: 'Pacto Global RED', year: '2024' },
];

export default function CompromisoIgualdadPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Institutional */}
      <header className="bg-primary text-white py-8 lg:py-12" role="banner">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-body-sm font-semibold mb-4">
              <Award className="w-4 h-4" aria-hidden="true" />
              Documento Oficial - Vigente 2024-2026
            </div>
            <h1 className="text-display-sm sm:text-display-md lg:text-display-lg font-bold tracking-tight mb-4">
              Declaración de Compromiso con la Igualdad, Diversidad e Inclusión
            </h1>
            <p className="text-body-lg text-primary/80 max-w-2xl mx-auto">
              Albarka S.A.S. — Empresa de propiedad mayoritaria femenina comprometida con la transformación organizacional desde la equidad.
            </p>
          </motion.div>
        </div>
      </header>

      <main id="main-content" className="section-padding" role="main">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <a href="/">
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Volver a la Landing Principal
              </a>
            </Button>
          </motion.div>

          {/* Intro */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
            aria-labelledby="intro-title"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="intro-title" className="heading-section mb-6">
                Nuestro Compromiso Institucional
              </h2>
              <div className="prose prose-primary max-w-none text-text-light leading-relaxed space-y-4">
                <p>
                  En <strong>Albarka S.A.S.</strong>, entendemos que la igualdad, la diversidad y la inclusión no son solo principios éticos,
                  sino pilares estratégicos para la excelencia organizacional y la innovación sostenible.
                </p>
                <p>
                  Como empresa de <strong>propiedad mayoritaria femenina</strong> y referente en consultoría de transformación,
                  asumimos la responsabilidad de liderar con el ejemplo, construyendo una cultura donde cada persona —independiente
                  de su género, origen, edad, capacidad, orientación o identidad— pueda desarrollarse plenamente y aportar su talento único.
                </p>
                <p>
                  Esta declaración formaliza nuestros compromisos medibles, nuestro plan de acción 2024-2026 y los mecanismos de
                  rendición de cuentas que garantizan el cumplimiento efectivo de nuestros principios.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Principles */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-16"
            aria-labelledby="principles-title"
          >
            <div className="text-center mb-12">
              <h2 id="principles-title" className="heading-section mb-4">
                Principios Rectores y Compromisos
              </h2>
              <p className="subheading-section">
                Cinco principios fundamentales que guían nuestra actuación diaria y nuestra estrategia de largo plazo
              </p>
            </div>

            <div className="space-y-6">
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card variant="interactive" padding="lg" className="relative overflow-hidden border-border group-hover:border-secondary/50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00A88F 0%, #00B4D8 100%)' }}>
                        <principle.icon className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-heading-lg font-bold text-text mb-2">{principle.title}</h3>
                        <p className="text-body-md text-text-light mb-5 leading-relaxed">{principle.description}</p>

                        <div className="grid sm:grid-cols-2 gap-3">
                          {principle.commitments.map((commitment, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -16 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                              className="flex items-start gap-2.5 p-3 bg-background rounded-card border border-border"
                            >
                              <CheckCircle className="w-5 h-5 flex-shrink-0 text-secondary mt-0.5" aria-hidden="true" />
                              <span className="text-body-sm text-text">{commitment}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Certifications & Recognitions */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mb-16"
            aria-labelledby="certs-title"
          >
            <div className="text-center mb-10">
              <h2 id="certs-title" className="heading-section mb-4">
                Reconocimientos y Certificaciones
              </h2>
              <p className="subheading-section">
                Avales externos que validan nuestro compromiso real y medible
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, i) => (
                <motion.article
                  key={cert.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <Card variant="default" padding="md" className="text-center h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                    <Award className="w-10 h-10 text-primary mx-auto mb-3" aria-hidden="true" />
                    <h4 className="font-semibold text-text mb-1">{cert.label}</h4>
                    <p className="text-body-sm text-text-muted">{cert.issuer}</p>
                    <p className="text-caption text-text-muted mt-1">{cert.year}</p>
                  </Card>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Action Plan Summary */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mb-16"
            aria-labelledby="plan-title"
          >
            <h2 id="plan-title" className="heading-section text-center mb-10">
              Plan de Acción 2024-2026 - Ejes Estratégicos
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Gobernanza y Medición',
                  icon: FileText,
                  items: ['Comité DEI trimestral', 'KPIs de igualdad en dashboard', 'Auditoría salarial anual', 'Informe público de progreso'],
                },
                {
                  title: 'Cultura y Formación',
                  icon: Users,
                  items: ['Formación obligatoria DEI (100%)', 'Programa mentoring inclusivo', 'Liderazgo empático certificado', 'Campañas de sensibilización'],
                },
                {
                  title: 'Políticas y Procesos',
                  icon: Shield,
                  items: ['Protocolo acoso actualizado', 'Permisos parentales equiparados', 'Flexibilidad total híbrida', 'Reclutamiento ciego (blind CV)'],
                },
              ].map((axis, i) => (
                <motion.article
                  key={axis.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                >
                  <Card variant="elevated" padding="lg" className="h-full border-primary/20">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <axis.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-heading-md font-bold text-text mb-4">{axis.title}</h3>
                    <ul className="space-y-2.5" role="list">
                      {axis.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-body-sm text-text-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* Document Download & Contact */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="mb-16"
            aria-labelledby="download-title"
          >
            <Card variant="elevated" padding="lg" className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="text-center mb-8">
                <h2 id="download-title" className="heading-section mb-3">
                  Documento Oficial Firmado
                </h2>
                <p className="text-body-md text-text-light">
                  Descarga la declaración completa con firmas de la Dirección, anexos normativos y plan de acción detallado.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="/documentos/Declaracion_Compromiso_Igualdad_Albarka_SAS.pdf" download>
                    <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                    Descargar PDF Oficial (2.4 MB)
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="#contacto">
                    <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                    Solicitar Versión Accesible
                  </a>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="flex items-center gap-2 text-body-sm text-text-muted">
                  <Shield className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Documento verificado y firmado digitalmente</span>
                </div>
                <div className="flex items-center gap-2 text-body-sm text-text-muted">
                  <FileText className="w-4 h-4 text-secondary" aria-hidden="true" />
                  <span>Versión accesible (WCAG 2.1 AA) disponible</span>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Contact for DEI Advisory */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            aria-labelledby="advisory-title"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2 id="advisory-title" className="heading-section mb-4">
                ¿Necesitas Asesoría en Igualdad, Diversidad e Inclusión?
              </h2>
              <p className="text-body-lg text-text-light mb-8">
                Acompañamos a organizaciones en el diseño e implementación de planes de igualdad, protocolos de acoso,
                auditorías salariales y transformación cultural inclusiva.
              </p>
              <Button size="lg" asChild>
                <a href="/#contacto" className="flex items-center justify-center gap-2">
                  Solicitar Asesoría DEI
                  <ArrowLeft className="w-5 h-5 -rotate-90" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer already included in layout */}
    </div>
  );
}