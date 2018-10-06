# email-falso

Express-React-app para mandar correos falsos de y para cualquier dirección de correo electrónico.

## Instalación

A continuación, se muestran los pasos para correr la app.

### Prerequisites

* Una cuenta en [SendGrid](https://sendgrid.com/)
* NodeJs
* NPM o Yarn
* y ya


### Instalación

Clonar el repo usando:

```
git clone https://github.com/charlie632/email-falso.git
```

Instalando dependencias:

```
cd email-falso
yarn install 
    o 
npm install
```

```
cd client
yarn install 
    o
npm install
```

Hay que crear un archivo de configuración donde se pondrá el API Key de SendGrid.

Se regresa al root y se crea un nuevo archivo llamado **config.js** y dentro de él, ponemos lo siguiente:

```
module.exports = { SENDGRID_API: TU_API_KEY };
```
Donde *TU_API_KEY* es al Api Key que obtienes de SendGrid.

## Corriendo el programa

Para correrlo hay que correr dos comandos de inicialización:

Dentro de el root:

```
yarn start 
   o
npm start
```

Ahora nos movemos a la carpeta de **client**:

```
cd client
yarn start 
   o
npm start

```

Se te abrirá tu navegador predeterminado en el **localhost:3000** 

y listo, tienes tu web app corriendo.

## Instrucciones de uso

Solo debes poner los datos que vienen en la forma y se enviará un correo al destinatario que elegiste desde el correo del remitente.
Cabe mencionar que gmail marca como spam los remitentes bajo su dominio.

## Disclaimer

Esta app la hice por diversión y para ver qué tan rápido podía hacer una web app sencilla (me tomó 1:30 horas). No me hago responsable del mal uso que hagan de esta aplicación.


## Deployment

Luego pongo cómo hacer deployment a heroku.

## Built With

* [React](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Express](https://maven.apache.org/) - Dependency Management
* [SendGrid](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Pueden ponerse en contacto conmigo o forkear el repo si quieren ayudar a mejorar el proyecto.


## Authors

* **charlie632**  - [Twitter](https://twitter.com/Charlie_632) - [GitHub](https://github.com/charlie632)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Agradecimientos

* Gracias a mi profe de Aplciaciones Web por aburrirme y darme inspiración para esto.

