# Lupes BBQ - Sitio Web

Sitio web oficial de Lupes BBQ, especialistas en costillas BBQ que ahora ofrece productos congelados para hacer parrilladas en casa.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Carrusel Interactivo**: Navegación fluida por los productos
- **Componentes Modulares**: Arquitectura limpia y mantenible
- **Paleta de Colores Premium**: Blanco, negro, grises y naranja fuego
- **Tipografía Moderna**: Usando la fuente Inter para máxima legibilidad
- **Animaciones Suaves**: Transiciones y efectos hover elegantes

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos y consistentes
- **React Hooks** - Manejo de estado y efectos

## 📁 Estructura del Proyecto

\`\`\`
lupes-bbq/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ProductCarousel.tsx
│   ├── BBQBoxSection.tsx
│   ├── EducationalSection.tsx
│   ├── ValueProposition.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── public/
│   └── (imágenes y assets)
├── README.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## 🎨 Paleta de Colores

- **Naranja Principal**: #FF6A00 (orange-500)
- **Naranja Hover**: #EA580C (orange-600)
- **Grises**: De gray-50 a gray-900
- **Blanco**: #FFFFFF
- **Negro**: #000000

## 📱 Secciones del Sitio

1. **Header**: Navegación sticky con logo y menú responsivo
2. **Hero Section**: Mensaje principal con CTAs prominentes
3. **Carrusel de Productos**: 7 productos congelados con navegación
4. **BBQ Boxes**: 3 paquetes premium con diferentes niveles
5. **Tips Educativos**: 5 consejos de experto para parrilladas
6. **Propuesta de Valor**: Por qué elegir Lupes BBQ
7. **CTA Final**: Llamada a la acción principal
8. **Footer**: Información de contacto y enlaces legales

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
\`\`\`bash
git clone https://github.com/tu-usuario/lupes-bbq.git
cd lupes-bbq
\`\`\`

2. **Instalar dependencias**
\`\`\`bash
npm install
# o
yarn install
\`\`\`

3. **Ejecutar en desarrollo**
\`\`\`bash
npm run dev
# o
yarn dev
\`\`\`

4. **Abrir en el navegador**
Visita \`http://localhost:3000\`

## 📦 Scripts Disponibles

- \`npm run dev\` - Inicia el servidor de desarrollo
- \`npm run build\` - Construye la aplicación para producción
- \`npm run start\` - Inicia el servidor de producción
- \`npm run lint\` - Ejecuta el linter de código

## 🌐 Despliegue en GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

1. **Crear archivo de workflow**
Crea \`.github/workflows/deploy.yml\`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
\`\`\`

2. **Configurar next.config.js**
\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
\`\`\`

3. **Habilitar GitHub Pages**
- Ve a Settings > Pages en tu repositorio
- Selecciona "GitHub Actions" como source

### Opción 2: Despliegue Manual

1. **Construir para producción**
\`\`\`bash
npm run build
\`\`\`

2. **Subir la carpeta \`out\` a GitHub Pages**

## 🎯 Próximas Mejoras

- [ ] Integración con sistema de e-commerce
- [ ] Galería de imágenes reales de productos
- [ ] Sistema de reservas online
- [ ] Blog con recetas y tips
- [ ] Integración con redes sociales
- [ ] Sistema de reviews y testimonios
- [ ] Calculadora de porciones
- [ ] Mapa de ubicaciones de restaurantes

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo \`LICENSE\` para más detalles.

## 📞 Contacto

**Lupes BBQ**
- Sitio Web: [https://web.lupesbbq.com/](https://web.lupesbbq.com/)
- Email: hola@lupesbbq.com
- Teléfono: +52 (55) 1234-5678

---

**Hecho con ❤️ para los amantes del BBQ**
\`\`\`
