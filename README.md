# 🔐 Password Generator

Una aplicación web moderna para generar contraseñas seguras y aleatorias, construida con Angular 19 y diseñada con una interfaz intuitiva y responsiva.

![Angular](https://img.shields.io/badge/Angular-19.1.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![PrimeNG](https://img.shields.io/badge/PrimeNG-19.1.0-FF6B35?style=for-the-badge&logo=primeng)

## ✨ Características

- **Generación de contraseñas personalizable**: Controla la longitud y los tipos de caracteres
- **Interfaz moderna y responsiva**: Diseño adaptativo con soporte para modo oscuro
- **Configuración flexible**:
  - Longitud ajustable (1-50 caracteres)
  - Inclusión de mayúsculas, minúsculas, números y símbolos
  - Opción "Todos" para seleccionar/deseleccionar todos los tipos
- **Funcionalidades adicionales**:
  - Copia al portapapeles con un clic
  - Regeneración instantánea de contraseñas
  - Interfaz intuitiva con controles deslizantes
- **Tecnologías modernas**: Angular 19, PrimeNG, Tailwind CSS

## 🚀 Inicio rápido

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o pnpm

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/password-generator.git
   cd password-generator
   ```

2. **Instala las dependencias**
   ```bash
   # Con npm
   npm install
   
   # O con pnpm (recomendado)
   pnpm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   # Con ng
   ng serve
   
   # O con pnpm
   pnpm start
   ```

4. **Abre tu navegador**
   Navega a `http://localhost:4200/` para ver la aplicación.

## 🛠️ Scripts disponibles

```bash
# Desarrollo
ng serve          # Inicia el servidor de desarrollo
npm run watch      # Construye y observa cambios

# Construcción
npm run build      # Construye para producción

# Testing
ng test           # Ejecuta las pruebas unitarias
```

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   └── core/
│   │       ├── header/          # Componente de cabecera
│   │       └── footer/          # Componente de pie de página
│   ├── pages/
│   │   ├── auth/
│   │   │   └── login/           # Página de login (en desarrollo)
│   │   └── home/                # Página principal con el generador
│   ├── app.component.*          # Componente raíz
│   ├── app.routes.ts            # Configuración de rutas
│   └── app.config.ts            # Configuración de la aplicación
├── styles.css                   # Estilos globales
└── index.html                   # Página principal
```

## 🎨 Tecnologías utilizadas

- **Frontend Framework**: Angular 19.1.0
- **UI Components**: PrimeNG 19.1.0
- **Styling**: Tailwind CSS 4.1.4
- **Language**: TypeScript 5.7.2
- **Package Manager**: pnpm
- **Icons**: PrimeIcons 7.0.0

## 🔧 Configuración de desarrollo

### Estructura de componentes

La aplicación sigue la arquitectura de Angular con:
- **Componentes standalone**: Cada componente es independiente
- **Routing**: Navegación entre páginas configurada
- **Formularios reactivos**: Uso de `FormsModule` para la gestión de formularios
- **Responsive design**: Diseño adaptativo con Tailwind CSS

### Personalización

Para personalizar la aplicación:

1. **Modificar la longitud máxima**: Cambia el valor `max="50"` en el slider
2. **Añadir nuevos tipos de caracteres**: Extiende el método `generateRandomString()`
3. **Personalizar estilos**: Modifica las clases de Tailwind CSS
4. **Añadir validaciones**: Implementa validaciones adicionales en los métodos

## 🚀 Despliegue

### Construcción para producción

```bash
npm run build
```

Los archivos de construcción se generarán en la carpeta `dist/client/`.

### Despliegue en GitHub Pages

1. Construye el proyecto: `npm run build`
2. Sube el contenido de `dist/client/` a tu repositorio
3. Configura GitHub Pages para servir desde la carpeta raíz

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Angular](https://angular.io/) - Framework web
- [PrimeNG](https://primeng.org/) - Biblioteca de componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [PrimeIcons](https://primeng.org/icons) - Iconos

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
