# Changelog - Albarka Landing

## [2024-11-07] - Fix: Button text color issue on primary buttons

### Problema
Los botones con variant `primary` (fondo azul `#0F2C59`) mostraban el texto en color oscuro (`#1A3D6E` - `primary-light` renombrado a `primary-lighter`) en lugar de blanco, haciendo que el texto fuera ilegible sobre el fondo azul oscuro.

**Botones afectados:**
- Navbar: "Agendar Consultoría" (desktop y mobile)
- Hero: "Iniciar Proyecto"
- Services: CTAs de cada servicio ("Diseñar mi PMO", etc.)
- ContactForm: "Enviar Consulta"
- Footer: Botones de navegación

### Causa Raíz
1. **Configuración de colores confusa en `tailwind.config.ts`**: El color `primary.light` (`#1A3D6E`) era un azul oscuro, no un color claro como su nombre sugería. Se usaba como color de texto en variantes `outline` y `ghost`, pero también se filtraba a `primary` vía `text-primary-foreground` que no se generaba correctamente.

2. **CSS `@import` mal ubicado**: El `@import` de Google Fonts estaba después de `@tailwind` en `globals.css`, causando que el navegador lo ignorara (warning: "Define @import rules at the top of the stylesheet"). Esto impedía que el CSS se procesara correctamente.

3. **Especificidad de Tailwind**: Las clases de utilidad `text-primary-foreground` / `text-white` no tenían suficiente prioridad frente a otros estilos o no se generaban en el build final.

### Solución Implementada (Capas de defensa)

#### 1. Fix en `tailwind.config.ts` (commit 42a8999)
```typescript
// Renombrado para evitar confusión futura
primary: {
  DEFAULT: '#0F2C59',
  dark: '#0A1F42',
  lighter: '#1A3D6E',  // era 'light' - sigue siendo oscuro
  foreground: '#FFFFFF',
}
```

#### 2. Fix en `components/ui/Button.tsx` (commit 42a8999 + 30fb25a)
```tsx
// Cambio explícito a text-white
const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark ...',
  secondary: 'bg-secondary text-white ...',
  outline: 'border-2 border-primary text-primary ...',  // primary = azul oscuro para fondo claro
  ghost: 'text-primary ...',
};

// Capa extra: inline styles como fallback absoluto
const variantStyles = {
  primary: { color: '#FFFFFF' },
  secondary: { color: '#FFFFFF' },
  outline: {},
  ghost: {},
};

// Aplicado en <button> y <a> (asChild)
style={variantStyles[variant]}
```

#### 3. Fix en `app/globals.css` (commit 30fb25a)
```css
.btn-primary {
  @apply btn bg-primary hover:bg-primary-dark focus-visible:ring-primary shadow-btn-primary;
  color: #FFFFFF !important;  /* Fuerza blanco con máxima prioridad */
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  color: #FFFFFF !important;
}
```

#### 4. Fix `@import` order en `app/globals.css` (commit d44ff10)
```css
@import url('https://fonts.googleapis.com/...');  /* PRIMERO */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Resultado
✅ Botones `primary` muestran texto **blanco (#FFFFFF)** en todos los estados (normal, hover, focus, active)
✅ Botones `outline`/`ghost` usan `text-primary` (azul oscuro) para contraste en fondos claros
✅ Build limpio sin warnings CSS
✅ Despliegue en Netlify funcional tras "Clear cache and deploy site"

---

## [2024-11-07] - Fix: Title color on /compromiso-igualdad page

### Problema
El título "Declaración de Compromiso con la Igualdad, Diversidad e Inclusión" en la página `/compromiso-igualdad` no se veía blanco sobre el fondo azul (`bg-primary`) del header.

### Causa
El header tenía `text-white` pero el `<h1>` no heredaba correctamente el color (posible especificidad o reset de estilos).

### Solución
Añadido `text-white` explícito al `<h1>` en `app/compromiso-igualdad/page.tsx`:
```tsx
<h1 className="text-display-sm sm:text-display-md lg:text-display-lg font-bold tracking-tight mb-4 text-white">
  Declaración de Compromiso con la Igualdad, Diversidad e Inclusión
</h1>
```

---

## Lecciones Aprendidas / Checklist para Futuro

- [ ] **Siempre** poner `@import` al principio del CSS, antes de cualquier `@tailwind` o `@layer`
- [ ] Usar nombres de colores descriptivos y precisos (`lighter` vs `light` cuando no es realmente claro)
- [ ] Para colores críticos (texto sobre fondo oscuro), usar **doble capa**: clase Tailwind + `!important` en CSS global + inline style como último recurso
- [ ] Verificar en build de producción (`npm run build`) no solo en dev
- [ ] En Netlify: si los cambios no se ven, usar **"Clear cache and deploy site"**
- [ ] Documentar decisiones de naming de colores en `tailwind.config.ts` con comentarios