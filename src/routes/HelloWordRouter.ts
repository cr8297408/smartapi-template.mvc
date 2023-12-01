import { Router } from "express";
import { HelloWordController } from "../controller/helloWord";
import { AsyncWrapperHandling } from "../utils";

export class HelloWordRouter {
  router = Router();
  #controller: HelloWordController;

  constructor() {
    this.#controller = new HelloWordController();
    this.config();
  }
  
  public async config() {
    /**
     * @swagger
     *  /api/v1/hello:
     *    get:
     *      security: [] # No Security
     *      summary: ednpoint for test template
     *      tags: ['Hello World']
     *      responses:
     *        200:
     *          description: hello world
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     */
    this.router.get(
      '/',
      // 💡💡💡💡💡💡 this avoids having to use try catch on all of our controllers and is responsible for sending our errors to the ErrorHandler middleware
      AsyncWrapperHandling(this.#controller.getAll),
    );
  }
}

export const HelloWordRouterInstance = new HelloWordRouter();
