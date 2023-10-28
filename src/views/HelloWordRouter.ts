import { Router } from "express";
import { HelloWordController } from "../controller/helloWord";

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
     *  /v1/users:
     *    get:
     *      //summary: get all users of the Bd
     *      tags: ['Manage Users']
     *      responses:
     *        200:
     *          description: Got all users successfully
     *        401:
     *          description: Not authorized
     *        400:
     *          description: Bad request
     *      parameters: [
     *        {
     *           name: page,
     *           in: query,
     *           description: Number of page in pagination,
     *             schema: {
     *               type: number,
     *             }
     *         },
     *        {
     *           name: size,
     *           in: query,
     *           description: Number of registers in pagination,
     *             schema: {
     *               type: number,
     *             }
     *         },
     *        {
     *           name: status,
     *           in: query,
     *           description: Filter by active = 1 inactive = 0 users,
     *             schema: {
     *               type: number,
     *             }
     *         },
     *        {
     *           name: deleted,
     *           in: query,
     *           description: Filter by deleted,
     *             schema: {
     *               type: boolean,
     *             }
     *         },
     *      ]
     */
    this.router.get(
      '/',
      this.#controller.getAll,
    );
  }
}

export const HelloWordRouterInstance = new HelloWordRouter();
