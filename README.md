# Web Ana de Consuelo

Tipo de web
Se trata de una página web para una pastelería artesanal, la
que es un pequeño negocio familiar, ubicado en un pueblo de la
sierra de Cádiz.
Esta web muestra diferentes apartados en su menú de navegación
como pueden ser:
- Quienes somos: Una descripción general de la pastelería
como tal y su trayectoria, así como el equipo que la
regenta y una presentación de sus productos estrella más
tradicionales.
- Catálogo: El apartado más importante de la web.
Totalmente centrado en mostrar al visitante un gran
surtido de imágenes con los productos disponibles, una
breve descripción, ingredientes e información sobre
alérgenos.
- Encargos: Zona destinada a realizar encargos con un
asistente por IA.
- Formulario de contacto: Un simple formulario de contacto.
- Ubicación: Muestra un área conectada a la API de Google
Maps con opción de cargar la propia app de Google.
La web, está principalmente destinada a que el visitante pueda
ver la oferta de productos que la pastelería ofrece, hacerse
cliente y gestionar encargos.
Otro propósito, es que el usuario pueda familiarizarse con los
productos más icónicos y tradicionales de la repostería de la
zona, así como, consultar información de interés.
Por los tanto, nos encontramos ante una web que combina los
siguientes tipos:
- Web corporativa:
Representa a la empresa, proporcionando información sobre
su identidad, historia, valores, productos, equipo de
trabajo y cualquier otra información relevante que pueda
interesar al público en general. Este sitio web tiene
como objetivo principal establecer la presencia en línea
de la entidad y transmitir una imagen profesional y
coherente de su marca.
 
- Tienda online:
El sitio web estará diseñado para permitir a los usuarios
comprar productos o servicios directamente a través de
Internet. Los productos estarán organizados en categorías
y se mostrarán imágenes, descripciones, precios, etc. Los
usuarios pueden navegar por el catálogo, agregar
productos a su carrito de compras, completar la
transacción de pago, aunque solo se va a ofrecer la
opción de recogida en tienda en la fecha indicada.

## Requirements

[Node.js](http://nodejs.org/) >= 14.15.x

## Getting started

Clone this repository with `git clone`, or download a .zip file using the top right green button.

Using the Terminal, navigate to the project folder and run `npm install`.

## Features

- Uses [Parcel v2](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- Minification and optimization of CSS files on production builds with [`cssnano`](https://github.com/cssnano/cssnano) (`@parcel/optimizer-cssnano`).
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).

### HTML

- Minification and optimization of CSS files on production builds [`htmlnano`](https://github.com/posthtml/htmlnano) (`@parcel/optimizer-htmlnano`).
- [PostHTML](https://github.com/posthtml/posthtml) features:
  - Include partial HTML files with [`posthtml-include`](https://github.com/posthtml/posthtml-include).

### Scripts

- Allow for modern JavaScript (ES201x/ES8/ES7/ES6…) which is automatically transpiled to ES5 and minifed in production builds, with [Babel](https://babeljs.io/).

### Images

- Image transformation with [`@parcel/transformer-image`](https://parceljs.org/recipes/image/) (based on [`sharp`](https://sharp.pixelplumbing.com/)).

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this boilerplate

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                                                                                                                     |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. This is also the build command to be run by external deployment services such as Netlify. The publishable files are then located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder and cache folders.                                                                                                                                                                                                                                                                                                               |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                                                                                                                    |

## Need help? / Want to help out?

You can contact the developer at gutperda.dev@gmail.com.
