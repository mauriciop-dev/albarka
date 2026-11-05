'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowRight, Target, Users, Zap, Shield } from 'lucide-react';

const stats = [
  { value: '150+', label: 'Proyectos Entregados' },
  { value: '95%', label: 'Tasa de Éxito' },
  { value: '50+', label: 'Organizaciones Transformadas' },
  { value: '20+', label: 'Años de Experiencia' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden" aria-labelledby="hero-title">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex items-center justify-center lg:justify-start gap-2 text-secondary"
            >
              <span className="relative">
                <span className="absolute -inset-1 bg-secondary/20 rounded-full blur-sm" aria-hidden="true" />
                <Target className="w-5 h-5 relative" aria-hidden="true" />
              </span>
              <span className="text-body-sm font-semibold uppercase tracking-wider">Nueva Perspectiva</span>
            </motion.div>

            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-display-md sm:text-display-lg lg:text-display-xl font-bold tracking-tight text-primary leading-tight"
            >
              Transformación Organizacional y{' '}
              <span className="relative">
                Gestión de Proyectos
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-secondary/20 -z-10" aria-hidden="true" />
              </span>{' '}
              con Enfoque Humano y Tecnológico
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mt-6 text-body-lg lg:text-body-lg text-text-light max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Fortalecemos las capacidades estratégicas de tu organización articulando
              <strong className="text-text">Personas, Procesos y Tecnología</strong> para lograr resultados sostenibles y medibles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" asChild>
                <a href="#contacto" className="flex items-center gap-2">
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/compromiso-igualdad" className="flex items-center gap-2">
                  Ver Compromiso Social
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-display-sm font-bold text-primary">{stat.value}</div>
                  <div className="text-body-sm text-text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Visual / Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="relative card p-0 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-primary px-6 py-4 border-b border-border flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 text-body-sm text-white font-medium">PMO Dashboard - Albarka S.A.S.</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* KPI Row */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Proyectos Activos', value: '24', icon: Target, color: 'primary' },
                    { label: 'Equipos Formados', value: '12', icon: Users, color: 'secondary' },
                    { label: 'Cambios Implementados', value: '8', icon: Zap, color: 'accent' },
                    { label: 'Riesgos Mitigados', value: '94%', icon: Shield, color: 'secondary' },
                  ].map((kpi, i) => (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                      className="bg-background rounded-card p-4 border border-border"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-body-sm text-text-muted">{kpi.label}</span>
                        <kpi.icon className={cn('w-5 h-5', `text-${kpi.color}`)} aria-hidden="true" />
                      </div>
                      <div className="text-display-sm font-bold text-text">{kpi.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  <div className="text-body-sm font-medium text-text">Avance Global del Portafolio</div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-body-sm text-text-muted">
                    <span>Planificado</span>
                    <span>78% Completado</span>
                    <span>Entregado</span>
                  </div>
                </div>

                {/* Methodology Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {['Personas', 'Procesos', 'Tecnología'].map((pillar, i) => (
                    <motion.div
                      key={pillar}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                      className="bg-white rounded-card p-3 border border-border text-center hover:border-secondary/50 transition-colors"
                    >
                      <div className="text-caption font-semibold text-text-muted uppercase tracking-wider">{pillar}</div>
                      <div className="text-heading-sm font-bold text-primary mt-1">{[87, 92, 79][i]}%</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 lg:-left-8 bg-white rounded-card shadow-card-hover p-4 border border-border animate-pulse"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-secondary" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-body-sm font-semibold text-text">Metodología Propia</div>
                  <div className="text-caption text-text-muted">APT Framework®</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}