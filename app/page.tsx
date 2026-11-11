import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { Services } from '@/components/sections/Services';
import { DEIBanner } from '@/components/sections/DEIBanner';
import { DeclarationsSection } from '@/components/sections/DeclarationsSection';
import { ContactForm } from '@/components/sections/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consultoría en Dirección de Proyectos (PMO) y Transformación Organizacional',
  description: 'Albarka S.A.S. - Especialistas en PMO as a Service, formación de equipos de alto desempeño, gestión del cambio y soluciones tecnológicas. Metodología APT® propia.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Services />
      <DEIBanner />
      <DeclarationsSection />
      <ContactForm />
    </>
  );
}