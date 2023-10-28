import { Request, Response } from "express";
import { HelloWordService } from ".";
import { HelloWordRepositoryInstance } from "../../model";

export class HelloWordController {
  #service: HelloWordService;

  constructor() {
    this.#service = new HelloWordService({
      repository: HelloWordRepositoryInstance
    });
  }

  getAll = (_: Request, res: Response) => {
    try {
      const serviceResponse = this.#service.getAll();
      console.log("🚀 ~ file: HelloWordController.ts:18 ~ HelloWordController ~ serviceResponse:", serviceResponse);
      res.json(serviceResponse)
    } catch (error) {
      console.log("🚀 ~ file: HelloWordController.ts:21 ~ HelloWordController ~ error:", error);
      res.json(error)
    }
  }
}
