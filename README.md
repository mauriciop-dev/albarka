# Albarka S.A.S. - Landing Page

Landing page profesional para **Albarka S.A.S.**, consultora especializada en **Dirección de Proyectos (PMO)** y **Transformación Organizacional**.

## 🚀 Características

- **Next.js 14** (App Router) con TypeScript
- **Tailwind CSS** con sistema de diseño corporativo personalizado
- **Lucide React** para iconografía lineal minimalista
- **Framer Motion** para animaciones suaves y performantes
- **Shadcn UI** estilo para componentes base reutilizables
- **100% Responsive** (Mobile First)
- **Accesibilidad** (WCAG 2.1 AA)
- **SEO Optimizado** con metadata, Open Graph, Twitter Cards
- **Fuentes**: Montserrat (titulares) + Inter (cuerpo)

## 🎨 Paleta Corporativa

| Color | Hex | Uso |
|-------|-----|-----|
| Primario | `#0F2C59` | Azul Profundo Estratégico - Brand principal |
| Secundario | `#00A88F` | Verde Teal Transformación - CTAs, acentos |
| Acento | `#00B4D8` | Azul Cian Innovación - Links, highlights |
| Texto | `#2B2D42` | Gris Oscuro Estructura - Contenido principal |
| Fondo | `#F4F6F8` | Gris Arena - Backgrounds secundarios |

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx                 # Layout raíz con providers
│   ├── page.tsx                   # Landing page principal
│   ├── globals.css                # Estilos globales + Tailwind
│   └── compromiso-igualdad/
│       └── page.tsx               # Página Declaración de Igualdad
├── components/
│   ├── ui/
│   │   ├── Button.tsx             # Botones con variantes
│   │   ├── Card.tsx               # Tarjetas compuestas
│   │   ├── Input.tsx              # Input, Label, Textarea, Select
│   │   └── Logo.tsx               # Componente Logo SVG
│   ├── layout/
│   │   ├── Navbar.tsx             # Navegación responsive
│   │   └── Footer.tsx             # Footer corporativo
│   └── sections/
│       ├── Hero.tsx               # Hero con dashboard mock
│       ├── Pillars.tsx            # 3 Pilares metodológicos
│       ├── Services.tsx           # 4 Servicios PMO
│       ├── DEIBanner.tsx          # Banner Igualdad/Inclusión
│       └── ContactForm.tsx        # Formulario de contacto
├── lib/
│   └── utils.ts                   # Utilidad cn() para classnames
├── public/
│   ├── logo.svg                   # Logo corporativo
│   ├── favicon.svg                # Favicon
│   └── robots.txt                 # SEO robots
├── tailwind.config.ts             # Configuración Tailwind + theme
├── next.config.js                 # Configuración Next.js
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencias
```

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview producción
npm run start

# Linting
npm run lint
```

## 📄 Páginas

### `/` - Landing Page Principal
1. **Navbar** - Logo, navegación, CTA "Agendar Consultoría"
2. **Hero** - Titular impacto, dashboard mock interactivo, stats de confianza
3. **Pilares Metodológicos** - 3 tarjetas (Personas, Procesos, Tecnología) con Framework APT®
4. **Servicios PMO** - Grid 4 servicios (PMO as a Service, Formación, Cambio, Tech)
5. **Banner DEI** - Compromiso igualdad con enlace a `/compromiso-igualdad`
6. **Contacto** - Formulario validado + info de contacto
7. **Footer** - Legal, links, redes, enlace permanente a igualdad

### `/compromiso-igualdad` - Declaración Oficial
- Header institucional con badge de vigencia
- 5 Principios rectores con compromisos medibles
- Certificaciones y reconocimientos externos
- Plan de acción 2024-2026 (3 ejes estratégicos)
- Descarga PDF oficial firmado
- CTA para asesoría DEI

## ♿ Accesibilidad

- Semántica HTML5 correcta
- Navegación por teclado completa
- Focus visible en todos los interactivos
- Contraste AA en todos los textos
- ARIA labels y roles apropiados
- Skip to main content
- Reduced motion support
- Formularios con validación accesible

## 🔧 Personalización

### Colores (tailwind.config.ts)
```typescript
colors: {
  primary: { DEFAULT: '#0F2C59', ... },
  secondary: { DEFAULT: '#00A88F', ... },
  accent: { DEFAULT: '#00B4D8', ... },
  // ...
}
```

### Fuentes (globals.css)
```css
:root {
  --font-montserrat: 'Montserrat', system-ui, sans-serif;
  --font-inter: 'Inter', system-ui, sans-serif;
}
```

### Componentes Base
Todos los componentes en `components/ui/` usan `cn()` (clsx + tailwind-merge) para permitir extensión vía `className`.

## 📦 Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel deploy
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📋 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `dev` | Servidor desarrollo con Turbopack |
| `build` | Build producción optimizado |
| `start` | Servidor producción |
| `lint` | ESLint + TypeScript check |

## 📄 Licencia

Proyecto privado - Albarka S.A.S. - Todos los derechos reservados.

---

**Desarrollado con** ❤️ **usando Next.js, Tailwind CSS, Framer Motion y Lucide React**