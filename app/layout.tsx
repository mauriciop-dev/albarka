import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Albarka S.A.S. | Consultoría en Dirección de Proyectos (PMO) y Transformación Organizacional',
    template: '%s | Albarka S.A.S.',
  },
  description: 'Especialistas en PMO as a Service, formación de equipos de alto desempeño, gestión del cambio y soluciones tecnológicas. Metodología APT®: Personas, Procesos, Tecnología.',
  keywords: ['PMO', 'Dirección de Proyectos', 'Transformación Organizacional', 'Gestión del Cambio', 'Consultoría', 'Equipos Alto Desempeño', 'Metodologías Ágiles', 'Igualdad', 'Diversidad', 'Inclusión'],
  authors: [{ name: 'Albarka S.A.S.' }],
  creator: 'Albarka S.A.S.',
  publisher: 'Albarka S.A.S.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://albarka.com'),
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://albarka.com',
    siteName: 'Albarka S.A.S.',
    title: 'Albarka S.A.S. | Consultoría PMO y Transformación Organizacional',
    description: 'Especialistas en Dirección de Proyectos, PMO as a Service, Gestión del Cambio y Transformación Digital. Metodología APT® propia.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Albarka S.A.S. - Transformación Organizacional y Gestión de Proyectos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albarka S.A.S. | Consultoría PMO y Transformación',
    description: 'Especialistas en Dirección de Proyectos, PMO as a Service, Gestión del Cambio y Transformación Digital.',
    images: ['/og-image.png'],
    creator: '@albarka',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F2C59' },
    { media: '(prefers-color-scheme: dark)', color: '#0F2C59' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded-btn"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}