# 🧶 Crochet A Trois

Página web desarrollada con HTML, CSS, TypeScript y Angular version 19.2.11.

## 📖 Descripción

La idea de este TFG nace de la necesidad de mi pareja y sus amigas por tener una web donde puedan ver sus diseños y patrones de crochet.
Para ello hice una web minimalista y enfocada a sus necesidades, donde está todo de manera estructurada para que el usuario lo entienda a la primera sin necesidad de complicaciones.



## 🏗️ Estado del proyecto.

- Funcionalidades básicas del frontend implementadas (páginas, navegación, login, formulario).
- Backend Symfony levantado con Docker.
- Falta implementar: API básica funcional, validaciones avanzadas, tests, optimizaciones y despliegue en producción.


## ✒️Instalación y puesta en marcha

Para generar el proyecto, ejecuta estos pasos:

1º Clona el repositorio

git@github.com:JFRC92/TfgWebCrochet.git

2º Levantar los contenedores en Docker

Docker compose up -d

Esto nos construirá y levantará los servicios para el frontend y el backend

3º Accede a los servicios

- Frontend Angular: http://localhost:4200
- Backend Symfony: http://localhost:8000
  
4º Comandos Útiles

- Ver contenedores - docker-compose ps
- Acceder a un contenedor - docker exec -it <nombre_contenedor> bash
- Detener los servicios - docker-compose down
- Diagnóstico de puertos en uso - lsof -i :5432
- Matar proceso por PID - kill -9 < PID > 

## 💻 Estructura de carpetas proyecto Angular ( src/ app/ components )

| 📂 Componente    | 📝 Descripción breve                                         |
| ---------------- | ------------------------------------------------------------ |
| `contactservice` | Lógica o interfaz relacionada con el formulario de contacto. |
| `diseno`         | Módulo de diseño gráfico o presentación visual.              |
| `featured`       | Sección de elementos destacados o promociones.               |
| `footer`         | Pie de página del sitio web.                                 |
| `header`         | Encabezado general del sitio.                                |
| `inicio`         | Página principal o landing del sitio.                        |
| `login`          | Formulario y lógica de inicio de sesión.                     |
| `logo`           | Componente gráfico del logotipo.                             |
| `navigation-bar` | Barra de navegación del sitio.                               |
| `not-found`      | Página de error 404.                                         |
| `patrones`       | Galería o listado de patrones (probablemente de diseño).     |
| `scroll-img`     | Imagen o galería con efecto de desplazamiento.               |

## Estructura backend con Symfony y Docker ( /symfony-backend )

| 📂 Carpeta / Archivo | 📝 Descripción                                      |
| -------------------- | --------------------------------------------------- |
| `src/`               | Código fuente PHP del proyecto Symfony.             |
| `config/`            | Configuración del framework y servicios.            |
| `public/`            | Punto de entrada (equivale a `index.php`).          |
| `var/`               | Caché, logs y archivos generados.                   |
| `vendor/`            | Dependencias instaladas por Composer.               |
| `.env`               | Configuración de entorno (DB, mail, etc.).          |
| `Dockerfile`         | Define cómo construir la imagen Docker del backend. |
| `docker-compose.yml` | Orquesta servicios (PHP, DB, Nginx, etc.).          |

## 🎨 Estilos CSS

El diseño de la web está construido con CSS puro, siguiendo un estilo minimalista y moderno, algunas de sus características son:

- Estilo responsive adaptado a dispositivos móviles.
- Uso de glassmorphism tanto en el formulario de contacto, como en el login.
- Animaciones sutiles con '@keyframes' y ':hover'.
- Separación de estilos por componentes y estilos globales.

## 🔗 Enlaces útiles

- [Documentación Angular](https://angular.io/docs)
- [Documentación Symfony](https://symfony.com/doc/current/index.html)
- [Docker](https://docs.docker.com/)

## 📄 Licencia

Este proyecto está bajo licencia MIT - ver archivo LICENSE para detalles.

