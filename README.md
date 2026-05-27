# Teslo Shop (RJ)

Pequeña tienda/administrador construida con Vite + React y TailwindCSS (shadcn UI). Esta documentación resume la estructura, decisiones y los arreglos que se han aplicado o que conviene aplicar.

## Tecnologías

- Vite (React)
- React + TypeScript
- TailwindCSS (configurable con dark mode por clase)
- shadcn UI
- lucide-react (iconos)
- @fontsource-variable/geist
- Plugins: @tailwindcss/vite, @rolldown/plugin-babel

## Estructura principal (relevante)

- src/
  - admin/
    - components/ (AdminHeader, AdminSidebar, AdminTitle, ...)
    - layouts/ (AdminLayout.tsx)
    - pages/ (AdminProductsPage.tsx, ...)
  - shop/
    - pages/ (HomePage.tsx)
    - components/
  - index.css

## Arranque del proyecto

1. Instalar dependencias:
   - npm install
2. Levantar servidor dev:
   - npm run dev
3. Construir:
   - npm run build
4. Servir la build:
   - npm run preview (o tu servidor preferido)

## Notas importantes / recomendaciones aplicadas

- Tailwind en `src/index.css`: reemplazar `@import "tailwindcss";` por las directivas oficiales para que se generen las capas:

  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

  (mantén luego tus @import de shadcn, fuentes y otros).

- Activar dark mode por clase en `tailwind.config.*`:

  ```js
  // tailwind.config.js
  module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: { extend: {} },
    plugins: [],
  };
  ```

- Para forzar siempre modo oscuro (rápido): añadir `class="dark"` al elemento `<html>` en `index.html` o desde JS:

  ```ts
  document.documentElement.classList.add("dark");
  ```

  Tu `index.css` ya define variables en `:root` y `.dark` y usa `body { @apply bg-background text-foreground; }`, por lo que al añadir la clase `.dark` se aplicará el fondo oscuro y texto claro.

- Vite ya está configurado para Tailwind (plugin `tailwindcss()` en `vite.config.ts`).

## Problemas detectados y cómo se resolvieron

- AdminHeader: se usó `h-18` (no incluida por defecto en Tailwind). Solución: usar una utilidad válida (ej. `h-16`, `h-20` o `h-[72px]`) o expandir spacing en `tailwind.config`.
- AdminLayout: para que el contenido principal ocupe toda la altura y permita scroll interno es necesario:
  - contenedor raíz: `min-h-screen`
  - contenedor del contenido: `flex-1 flex flex-col min-h-0`
  - main: `flex-1 min-h-0 overflow-auto`
    Ejemplo ya aplicado en el layout: el main debe ser scrollable y ocupar el espacio restante.
- Error de import/export (AdminHeader): el componente exporta named export (`export const AdminHeader`) pero en algún import se esperaba default. Usar import nombrado:
  ```ts
  import { AdminHeader } from "@/admin/components/AdminHeader";
  ```
  o exportar también por defecto:
  ```ts
  export default AdminHeader;
  ```
- Alturas y scroll de tablas: envolver tablas en `div.overflow-x-auto` y usar `min-h-0` en contenedores flex para que funcionen correctamente los scrolls verticales/horizontales.
- Si persisten problemas de altura, añadir en `index.css`:
  ```css
  html,
  body,
  #root {
    height: 100%;
  }
  ```

## Buenas prácticas y siguientes pasos

- Mantener `darkMode: 'class'` y una lógica de toggling que guarde preferencia en localStorage y respete `prefers-color-scheme`.
- Revisar todas las clases personalizadas (como `h-18`) y usar utilidades válidas o extender el theme.
- Añadir pruebas unitarias para componentes críticos (paginador, grid, formularios).
- Centralizar layout/admin state (sidebar collapse) si se comparte entre páginas.

---
