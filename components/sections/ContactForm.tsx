'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input, Label, Textarea, Select } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { Mail, Phone, Building2, Send, CheckCircle, Loader2 } from 'lucide-react';

const projectTypes = [
  { value: '', label: 'Selecciona el tipo de proyecto' },
  { value: 'pmo-implementation', label: 'Implementación de PMO' },
  { value: 'team-training', label: 'Formación de Equipos' },
  { value: 'change-management', label: 'Gestión del Cambio' },
  { value: 'tech-solutions', label: 'Soluciones Tecnológicas' },
  { value: 'integrated', label: 'Transformación Integral (APT®)' },
  { value: 'dei-consulting', label: 'Asesoría DEI / Igualdad' },
  { value: 'other', label: 'Otro / Consulta General' },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoProyecto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.empresa.trim()) newErrors.empresa = 'La empresa es obligatoria';
    if (!formData.email.trim()) newErrors.email = 'El correo es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Correo inválido';
    if (!formData.tipoProyecto) newErrors.tipoProyecto = 'Selecciona un tipo de proyecto';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ nombre: '', empresa: '', email: '', telefono: '', tipoProyecto: '', mensaje: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contacto" className="section-padding bg-white" aria-labelledby="contact-title">
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
            Hablemos de tu Transformación
          </span>
          <h2 id="contact-title" className="heading-section">
            Inicia tu Proyecto con Albarka S.A.S.
          </h2>
          <p className="subheading-section">
            Cuéntanos tus desafíos y diseñaremos una propuesta a medida. Primera sesión de diagnóstico sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            <Card variant="elevated" padding="lg" className="h-full border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-heading-md font-bold text-text">¿Qué pasa después de contactar?</h3>
                </div>
              </div>

              <ul className="space-y-4 mb-8" role="list">
                {[
                  { icon: CheckCircle, title: 'Diagnóstico Inicial', desc: 'Sesión de 45 min para entender tu contexto' },
                  { icon: CheckCircle, title: 'Propuesta a Medida', desc: 'Alcance, metodología, cronograma e inversión' },
                  { icon: CheckCircle, title: 'Kick-off Ágil', desc: 'Equipo asignado y plan de arranque en 2 semanas' },
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <step.icon className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-medium text-text">{step.title}</div>
                      <div className="text-body-sm text-text-muted">{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="border-t border-border pt-6 space-y-4">
                <h4 className="font-semibold text-text">Otros Canales</h4>
                <div className="space-y-3">
                  {[
                    { icon: Mail, text: 'contacto@albarka.com', href: 'mailto:contacto@albarka.com' },
                    { icon: Phone, text: '+57 1 234 5678', href: 'tel:+5712345678' },
                    { icon: Building2, text: 'Av. Principal 123, Of. 401, Bogotá', href: '#' },
                  ].map((contact, i) => (
                    <a key={i} href={contact.href} className="flex items-center gap-3 text-body-md text-text-light hover:text-primary transition-colors">
                      <contact.icon className="w-5 h-5 text-secondary flex-shrink-0" aria-hidden="true" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Card variant="elevated" padding="lg">
              {status === 'success' ? (
                <div className="text-center py-12" role="alert">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-secondary" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-heading-lg font-bold text-text mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-body-md text-text-light mb-6">
                    Gracias por confiar en Albarka S.A.S. Nuestro equipo revisará tu solicitud y te contactaremos en menos de 24 horas hábiles.
                  </p>
                  <Button variant="outline" onClick={() => setStatus('idle')}>
                    Enviar Otra Consulta
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" aria-hidden="true" />
                        <Input
                          id="nombre"
                          name="nombre"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          className={cn('pl-10', errors.nombre && 'border-red-500 focus:border-red-500 focus:ring-red-500/20')}
                          aria-invalid={errors.nombre ? 'true' : 'false'}
                          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                        />
                      </div>
                      {errors.nombre && (
                        <p id="nombre-error" className="mt-1.5 text-body-sm text-red-600 flex items-center gap-1" role="alert">
                          <span className="w-3.5 h-3.5" aria-hidden="true">⚠</span>
                          {errors.nombre}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="empresa">Empresa / Organización *</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" aria-hidden="true" />
                        <Input
                          id="empresa"
                          name="empresa"
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className={cn('pl-10', errors.empresa && 'border-red-500 focus:border-red-500 focus:ring-red-500/20')}
                          aria-invalid={errors.empresa ? 'true' : 'false'}
                          aria-describedby={errors.empresa ? 'empresa-error' : undefined}
                        />
                      </div>
                      {errors.empresa && (
                        <p id="empresa-error" className="mt-1.5 text-body-sm text-red-600 flex items-center gap-1" role="alert">
                          <span className="w-3.5 h-3.5" aria-hidden="true">⚠</span>
                          {errors.empresa}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" aria-hidden="true" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="correo@empresa.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={cn('pl-10', errors.email && 'border-red-500 focus:border-red-500 focus:ring-red-500/20')}
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-body-sm text-red-600 flex items-center gap-1" role="alert">
                          <span className="w-3.5 h-3.5" aria-hidden="true">⚠</span>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="telefono">Teléfono (Opcional)</Label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" aria-hidden="true" />
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          placeholder="+57 3XX XXX XXXX"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tipoProyecto">Tipo de Proyecto / Interés *</Label>
                    <div className="relative">
                      <Select
                        id="tipoProyecto"
                        name="tipoProyecto"
                        value={formData.tipoProyecto}
                        onChange={handleChange}
                        className={cn(errors.tipoProyecto && 'border-red-500 focus:border-red-500 focus:ring-red-500/20')}
                        aria-invalid={errors.tipoProyecto ? 'true' : 'false'}
                        aria-describedby={errors.tipoProyecto ? 'tipo-error' : undefined}
                      >
                        {projectTypes.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </Select>
                    </div>
                    {errors.tipoProyecto && (
                      <p id="tipo-error" className="mt-1.5 text-body-sm text-red-600 flex items-center gap-1" role="alert">
                        <span className="w-3.5 h-3.5" aria-hidden="true">⚠</span>
                        {errors.tipoProyecto}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos brevemente tus desafíos, objetivos y expectativas..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      className={cn(errors.mensaje && 'border-red-500 focus:border-red-500 focus:ring-red-500/20')}
                      aria-invalid={errors.mensaje ? 'true' : 'false'}
                      aria-describedby={errors.mensaje ? 'mensaje-error' : 'mensaje-hint'}
                    />
                    {errors.mensaje ? (
                      <p id="mensaje-error" className="mt-1.5 text-body-sm text-red-600 flex items-center gap-1" role="alert">
                        <span className="w-3.5 h-3.5" aria-hidden="true">⚠</span>
                        {errors.mensaje}
                      </p>
                    ) : (
                      <p id="mensaje-hint" className="mt-1.5 text-body-sm text-text-muted">
                        Mínimo 20 caracteres. Tu información se trata con confidencialidad según nuestra Política de Privacidad.
                      </p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full" loading={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Consulta
                        <Send className="w-5 h-5" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-caption text-text-muted">
                    Al enviar, aceptas nuestra <a href="/politica-privacidad" className="text-primary hover:underline">Política de Privacidad</a> y autorizas el tratamiento de tus datos para fines comerciales.
                  </p>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}