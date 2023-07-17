const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { version } = require('../package.json');
// import { version } from "../../package.json";

app = express();

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "GivingHands Project Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
      },
    },
    servers: [
      {
        url: "http://localhost:4001",
      },
    ], 
    securityDefinitions: {
      BasicAuth: {
        type: "bearer"
      },
    }, 
    security: {
      basicAuth: [],
    }
  },
  apis: ["./swagger/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

module.exports = app;