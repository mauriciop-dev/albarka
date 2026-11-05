'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Heart, Users, Shield, Award } from 'lucide-react';

export function DEIBanner() {
  return (
    <section className="section-padding bg-background" aria-labelledby="dei-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Background decorative shape */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />

          <div
            className="relative card border-2 border-secondary/30 bg-gradient-to-br from-background to-white overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #F4F6F8 0%, #FFFFFF 100%)' }}
          >
            {/* Decorative left border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent" aria-hidden="true" />

            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Icon & Badge */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                    style={{ background: 'linear-gradient(135deg, #00A88F 0%, #00B4D8 100%)' }}
                  >
                    <Heart className="w-10 h-10 text-white" aria-hidden="true" />
                  </motion.div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-body-sm font-semibold mb-4">
                    <Award className="w-4 h-4" aria-hidden="true" />
                    Certificación en Igualdad de Género
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2">
                  <h2 id="dei-title" className="heading-section text-center lg:text-left">
                    Compromiso con la Igualdad, Diversidad e Inclusión
                  </h2>
                  <p className="subheading-section text-center lg:text-left max-w-none mx-auto lg:mx-0">
                    En Albarka S.A.S. construimos una cultura organizacional donde la igualdad de oportunidades,
                    la diversidad de pensamiento y la inclusión genuina son pilares fundamentales de nuestra
                    identidad como empresa de propiedad mayoritaria femenina y referente en transformación organizacional.
                  </p>

                  {/* Principles */}
                  <div className="mt-8 grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Users, title: 'Equidad de Género', desc: 'Políticas de igualdad salarial y oportunidades' },
                      { icon: Shield, title: 'No Discriminación', desc: 'Entornos libres de sesgos y barreras' },
                      { icon: Heart, title: 'Talento sin Sesgos', desc: 'Desarrollo basado en mérito y potencial' },
                      { icon: Award, title: 'Conciliación Vida-Trabajo', desc: 'Flexibilidad y bienestar integral' },
                    ].map((principle, i) => (
                      <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-white rounded-card border border-border hover:border-secondary/50 transition-colors"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                          <principle.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="font-semibold text-text">{principle.title}</div>
                          <div className="text-body-sm text-text-muted mt-0.5">{principle.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:col-span-3 lg:col-start-1 mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-body-md text-text-light">
                      Conoce nuestra declaración completa, compromisos medibles y plan de acción anual.
                    </p>
                  </div>
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <a href="/compromiso-igualdad" className="flex items-center gap-2">
                      Leer Declaración Completa
                      <Award className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto" asChild>
                    <a href="#contacto" className="flex items-center gap-2">
                      Consultar Asesoría DEI
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}