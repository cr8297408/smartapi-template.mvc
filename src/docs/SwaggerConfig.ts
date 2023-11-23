import swaggerJsdoc from 'swagger-jsdoc';
import { LocalEnvironmentInstance } from '../enviroment/LocalEnviroment';

const enviroment = LocalEnvironmentInstance.setup();

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'Change this title in [src/docs/SwaggerConfig.ts]',
      version: '1.0'
    },

    // server running the api
    servers: [
      {
        url: enviroment.URL,
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          in: 'header',
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./src/routes/**/**.ts'],
};

/**
 * @description Create a swagger js doc object for use documentation in routes
 * @params {options: swaggerJsdoc.Options}
 */
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
