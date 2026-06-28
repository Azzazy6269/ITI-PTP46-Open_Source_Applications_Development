const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path')

const routesPath = path.resolve(__dirname, 'routes', '*.js').replace(/\\/g, '/');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'API for managing authors, books, and loans'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: [routesPath]
};
const specs = swaggerJsdoc(options);
console.log(specs.paths);
console.log(path.join(__dirname, 'routes/*.js'));

module.exports = {
    swaggerUi,
    specs
}
