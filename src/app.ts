import express, { Application, Router } from 'express';
import { HttpServerDependences } from './domain/Core';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/SwaggerConfig';
import { NotFoundMiddlewareRoutesInstance } from './middlewares';
import { ErrorHandlerMiddlewareInstance } from './middlewares/ErrorHandlerMiddleware';

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
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(cors());
    this.#app.use('/api/v1', this.#router);
    this.#app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.#app.use('*', NotFoundMiddlewareRoutesInstance.handling);
    this.#app.use('*', ErrorHandlerMiddlewareInstance.handlingGeneralError);
    this.#app.use('*', ErrorHandlerMiddlewareInstance.handling);

    this.#app.listen(this.#port, () => {
      //TODO: ADD LOGGER INSTANCE
      console.log('APP LISTENING IN PORT: ', this.#port);
    });

    process.on("uncaughtException", (err: Error) => {
      console.log(err.name, err.message);
      console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");  
      process.exit(1);
    });
    process.on("unhandledRejection", (reason: Error) => {
      console.log(reason.name, reason.message);
      console.log("UNHANDLED REJECTION! 💥 Shutting down...");
      process.exit(1);
      // throw reason;
    });
  }
}