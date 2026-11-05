'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  servicios: [
    { href: '#servicios-pmo', label: 'PMO as a Service' },
    { href: '#servicios-formacion', label: 'Formación Equipos Alto Desempeño' },
    { href: '#servicios-cambio', label: 'Gestión del Cambio' },
    { href: '#servicios-tech', label: 'Soluciones Tecnológicas' },
  ],
  empresa: [
    { href: '#metodologia', label: 'Metodología' },
    { href: '/compromiso-igualdad', label: 'Compromiso de Igualdad' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#casos-exito', label: 'Casos de Éxito' },
  ],
  legal: [
    { href: '/politica-privacidad', label: 'Política de Privacidad' },
    { href: '/terminos-uso', label: 'Términos de Uso' },
    { href: '/politica-cookies', label: 'Política de Cookies' },
    { href: '/accesibilidad', label: 'Declaración de Accesibilidad' },
  ],
};

const socialLinks = [
  { href: 'https://linkedin.com/company/albarka', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com/albarka', icon: Twitter, label: 'Twitter' },
  { href: 'https://facebook.com/albarka', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com/albarka', icon: Instagram, label: 'Instagram' },
];

const contactInfo = [
  { icon: MapPin, text: 'Av. Principal 123, Oficina 401, Bogotá, Colombia' },
  { icon: Phone, text: '+57 1 234 5678' },
  { icon: Mail, text: 'contacto@albarka.com' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" aria-label="Albarka S.A.S. - Inicio">
              <Logo width={180} height={45} variant="white" />
            </Link>
            <p className="text-body-md text-primary/70 max-w-xs leading-relaxed">
              Consultoría especializada en Dirección de Proyectos (PMO) y Transformación Organizacional.
              Articulamos Personas, Procesos y Tecnología para resultados sostenibles.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-body-md transition-all duration-300 hover:bg-secondary hover:text-white"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h3 className="text-heading-sm font-bold mb-4">Servicios PMO</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-primary/70 hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Empresa */}
          <nav aria-label="Empresa">
            <h3 className="text-heading-sm font-bold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-primary/70 hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Información legal">
            <h3 className="text-heading-sm font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-md text-primary/70 hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact Info & Divider */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-secondary">
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-body-md text-primary/80">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-body-sm text-primary/60 text-center md:text-left">
              © {currentYear} Albarka S.A.S. Todos los derechos reservados.
            </p>
            <p className="text-body-sm text-primary/60 text-center md:text-left">
              Consultoría en Dirección de Proyectos y Transformación Organizacional
            </p>
            <Link
              href="/compromiso-igualdad"
              className="text-body-sm text-secondary hover:text-white transition-colors link-underline"
            >
              Declaración de Compromiso con la Igualdad, Diversidad e Inclusión
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}