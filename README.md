# Tecnolejo — Portafolio Corporativo

Sitio web oficial y portafolio de proyectos de **Tecnolejo**, estudio tecnológico guatemalteco enfocado en el desarrollo de páginas web, aplicaciones web a medida e integración con inteligencia artificial.

## Vista general

- **Hero corporativo** con presentación en dos columnas, mockup integrado de dispositivos y animación vinculada al desplazamiento.
- **Barra de beneficios** con los pilares principales: tecnología confiable, soluciones a medida, soporte cercano y talento guatemalteco.
- **Servicios** detallados para páginas web estáticas, aplicaciones web a medida e integración con inteligencia artificial.
- **Portafolio en carrusel horizontal circular** con rotación automática, controles manuales, vista modal de detalle y respeto por la identidad visual de cada proyecto (incluyendo proyectos de prácticas supervisadas, demostraciones conceptuales y desarrollos propios).
- **Planes, sección Sobre Nosotros y contacto directo por WhatsApp**.

## Tecnologías utilizadas

- [React 18](https://react.dev/)
- [Vite 5](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- CSS3 con diseño responsive para escritorio, tablet y móvil

## Estructura del proyecto

```text
Portafolio/
├── assets/                 # Recursos gráficos originales
├── docs/                   # Compilación de producción para GitHub Pages
├── src/
│   ├── assets/             # Imágenes optimizadas y mockups 16:9
│   ├── components/         # Componentes React (Navbar, Hero, Benefits, Services, Portfolio, ProjectCard, Pricing, About, CTA, Footer)
│   ├── App.jsx             # Aplicación principal y enlaces de contacto
│   ├── index.css           # Estilos globales y responsive
│   └── main.jsx            # Punto de entrada
├── index.html
├── package.json
└── vite.config.js          # Configurado con base: '/Portafolio/' y salida en 'docs/'
```

## Ejecución en local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Compilación y despliegue en GitHub Pages

El proyecto está configurado en `vite.config.js` con `base: '/Portafolio/'` y genera los archivos estáticos en la carpeta `docs/`:

```bash
# Generar build de producción en docs/
npm run build
```

Para publicar en GitHub Pages, configura el repositorio en **Settings → Pages** apuntando a la rama `main` y la carpeta `/docs`.

## Contacto

- **WhatsApp:** +502 3308-2755
- **Autor:** Hector Alejandro Xutuc Paz (Alejo) — Tecnolejo, Guatemala
