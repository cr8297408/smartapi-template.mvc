import express, { Application, Router } from 'express';
import { HttpServerDependences } from './interfaces/Core';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/SwaggerConfig';

export class HttpServer {
  #port: number;
  #router: Router;
  #app: Application;
  constructor({ port, router }: HttpServerDependences) {
    this.#port = port;
    this.#router = router;
    this.#app = express();
  }

  init = () => {
    this.#app.use('/api/v1', this.#router);
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(cors());
    this.#app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    this.#app.listen(this.#port, () => {
      //TODO: ADD LOGGER INSTANCE
      console.log('APP LISTENING IN PORT: ', this.#port);
    });
  }
}