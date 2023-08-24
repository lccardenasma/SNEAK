## README

En este proyecto se utilizaron varias tecnologías para facilitar el desarrollo y mejorar la experiencia del usuario. A continuación, se explica por qué se eligieron y cómo se utilizan estas tecnologías.

### SASS:
Por qué:
SASS (Syntactically Awesome Style Sheets) se eligió como preprocesador de CSS debido a sus características avanzadas que permiten una mejor organización y mantenimiento del código CSS. SASS ofrece características como variables, anidación de reglas, mixins y funciones, lo que facilita la creación y gestión de estilos complejos.

Comando:
El código SASS se compila en CSS utilizando el siguiente comando en la terminal:
    `npm run scss`o `sass --watch scss/style.scss css/style.css`

### JSON Server:
Por qué:
JSON Server se utilizó como una forma rápida y sencilla de simular una API RESTful para el desarrollo y prueba de la aplicación. Permite crear endpoints personalizados con datos en formato JSON, lo que facilita el desarrollo frontend en paralelo con el backend.

Comando:
El servidor JSON se inicia mediante el siguiente comando en la terminal:

   `npm run server` o `json-server --watch data.json`

Esto establece un servidor local con los datos proporcionados en el archivo db.json, permitiendo a la aplicación realizar solicitudes HTTP como si estuviera interactuando con una API real.

### LIVE SERVER:
Por qué:
Live Server se eligió como servidor local para el desarrollo porque proporciona una forma fácil de recargar automáticamente la página web cada vez que se realizan cambios en el código fuente. Esto acelera el proceso de desarrollo al eliminar la necesidad de recargar manualmente la página cada vez que se hacen cambios.

Comando:
El servidor Live Server se inicia utilizando el siguiente comando en la terminal:

live-server
`npm start` o `live-server`

Una vez iniciado, se abrirá automáticamente el navegador con la aplicación y cualquier cambio en los archivos se reflejará instantáneamente en la página web abierta.

En resumen, se utilizaron estas tecnologías en el proyecto por las siguientes razones:

*SASS*: Para una gestión eficiente y avanzada de estilos CSS.
*JSON Server*: Para simular una API RESTful y facilitar el desarrollo frontend y backend en paralelo.
*LIVE SERVER*: Para recargar automáticamente la página web y agilizar el proceso de desarrollo.
Los comandos proporcionados son ejemplos de cómo iniciar estas tecnologías en el entorno de desarrollo. Asegúrate de tener las dependencias instaladas y ajusta los comandos según sea necesario para que se adapten a tu proyecto.

# PASOS PARA SU EJECUCIÓN 

- clonar repositorio
- npm install
- npm run server
- npm run scss
- npm start
