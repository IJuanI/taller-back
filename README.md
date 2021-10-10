# Taller Backend (Octubre 2021)

Este proyecto es un ejemplo sencillo de un cliente interactuando con un servidor.

Está enfocado en introducir a la programación de servidores.<br>
En este caso, de un backend en Node creado en Express.<br>

En la carpeta `server` vas a encontrar una implementación completa de un servicio de artículos.<br>
La carpeta `server2` se desarrolló durante [este taller](https://www.youtube.com/watch?v=7kmbnNpwX8w), y contiene un ejemplo más simple de servidor.

Como ejemplo práctico, recomiendo implementar todas las acciones de la carpeta `server` en la carpeta `server2` (ver un partido, listar partidos, editar un partido, eliminar un partido).

## Instalar el proyecto

Para ejecutar el proyecto, es necesario instalar [NodeJS](https://nodejs.org/es/download/).

Además, recomiendo hacer un fork del repositorio de github. Para eso, apretar el botón `fork` en la esquina superior derecha de esta pantalla.

Si no tenés git y estás desde windows, también necesitas instalarte [Git for Windows](https://gitforwindows.org/). Los sistemas unix ya vienen con git instalado.

Ahora sigue descargarse el proyecto. Para eso, andá a tu fork (va a aparecer como un proyecto en tu cuenta de github), opción `Code` (un botón verde), elegi `HTTPS` y copiá el enlace.<br>
A continuación, abrí una consola de comandos en la carpeta que quieras descargar el proyecto (En windows, Shift + click secundario en la carpeta, `Abrir la ventana de PowerShell aquí`), y ejecutá el comando `git clone enlace`, en donde enlace es lo que te quedó copiado en el portapapeles.

Esto creó una carpeta `taller-back`. Desde la misma consola, podes ir a `server2` (`cd taller-back/server2`) y ejecutar el comando `npm i` para instalar el proyecto.

En este punto ya estás listo para ejecutar el proyecto con el comando `npm run start`. No te olvides de agregar un archivo `.env` con el url de la base de datos de mongo (Minutos 53 a 55 del video del taller).
