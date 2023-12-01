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
     *  /api/v1/hello/list:
     *    get:
     *      security: [] # No Security
     *      summary: hello word getAll endpoint for test template
     *      tags: ['Hello World']
     *      responses:
     *        200:
     *          description: hello world
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     *        500:
     *          description: Internal error
     */
    this.router.get(
      '/list',
      // 💡💡💡💡💡💡 this avoids having to use try catch on all of our controllers and is responsible for sending our errors to the ErrorHandler middleware
      AsyncWrapperHandling(this.#controller.getAll),
    );

    /**
     * @swagger
     *  /api/v1/hello/detail/{uuid}:
     *    get:
     *      security: [] # No Security
     *      summary: hello word getOne endpoint for test template
     *      tags: ['Hello World']
     *      responses:
     *        200:
     *          description: hello world
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     *        500:
     *          description: Internal error
     *      parameters: [
     *       {
     *         name: uuid,
     *         in: path,
     *         description: Id of the hello,
     *         required: true,
     *         schema: {
     *           type: string
     *         }
     *       },
     *      ]
     */
    this.router.get(
      '/detail/:uuid',
      // 💡💡💡💡💡💡 this avoids having to use try catch on all of our controllers and is responsible for sending our errors to the ErrorHandler middleware
      AsyncWrapperHandling(this.#controller.getOne),
    );

    /**
     * @swagger
     *  /api/v1/hello/create:
     *    post:
     *      security: [] # No Security
     *      summary: hello word create endpoint for test template
     *      tags: ['Hello World']
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/helloWorld'
     *      responses:
     *        200:
     *          description: hello world
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     *        500:
     *          description: Internal error
     */
    this.router.post(
      '/create',
      // 💡💡💡💡💡💡 this avoids having to use try catch on all of our controllers and is responsible for sending our errors to the ErrorHandler middleware
      AsyncWrapperHandling(this.#controller.create),
    );

    /**
     * @swagger
     *  /api/v1/hello/update/{uuid}:
     *    put:
     *      security: [] # No Security
     *      summary: hello word update endpoint for test template
     *      tags: ['Hello World']
     *      requestBody:
     *        required: true
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/helloWorld'
     *      responses:
     *        200:
     *          description: hello world
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     *        500:
     *          description: Internal error
     *      parameters: [
     *       {
     *         name: uuid,
     *         in: path,
     *         description: Id of the hello,
     *         required: true,
     *         schema: {
     *           type: string
     *         }
     *       },
     *      ]
     */
    this.router.put(
      '/update/:uuid',
      // 💡💡💡💡💡💡 this avoids having to use try catch on all of our controllers and is responsible for sending our errors to the ErrorHandler middleware
      AsyncWrapperHandling(this.#controller.update),
    );

    /**
     * @swagger
     *  /api/v1/hello/delete/{uuid}:
     *    delete:
     *      security: [] # No Security
     *      summary: hello word delete endpoint for test template
     *      tags: ['Hello World']
     *      responses:
     *        200:
     *          description: hello world
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     *        500:
     *          description: Internal error
     *      parameters: [
     *       {
     *         name: uuid,
     *         in: path,
     *         description: Id of the hello,
     *         required: true,
     *         schema: {
     *           type: string
     *         }
     *       },
     *      ]
     */
    this.router.delete(
      '/delete/:uuid',
      // 💡💡💡💡💡💡 this avoids having to use try catch on all of our controllers and is responsible for sending our errors to the ErrorHandler middleware
      AsyncWrapperHandling(this.#controller.delete),
    );

    /**
     * @swagger
     * tags:
     *  name: Hello World
     * components:
     *  schemas:
     *    helloWorld:
     *      type: object
     *      require:
     *        -saludo
     *      properties:
     *        saludo:
     *          type: string
     *      example:
     *        saludo: Hello world in Crud
     *    Error:
     *      type: object
     *      required:
     *        -success
     *        -message
     *        -name
     *        -code
     *      properties:
     *        success:
     *          type: boolean
     *          description: Generic propertie in error
     *          example: false
     *        message:
     *          type: string
     *          description: Error description
     *          example: Error in repository HelloWordRepository in method CreateMethod
     *        name:
     *          type: string
     *          description: Name of the error
     *          example: RepositoryError
     *        code:
     *          type: string
     *          description: Error custom code
     *          example: repository/repository-error
     */
  }
}

export const HelloWordRouterInstance = new HelloWordRouter();
