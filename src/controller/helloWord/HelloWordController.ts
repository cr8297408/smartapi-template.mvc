import { Request, Response } from "express";
import { HelloWordService } from ".";
import { HelloWordRepositoryInstance } from "../../repositories";

export class HelloWordController {
  #service: HelloWordService;

  constructor() {
    this.#service = new HelloWordService({
      repository: HelloWordRepositoryInstance
    });
  }

  getAll = (_: Request, res: Response) => {
    const serviceResponse = this.#service.getAll();
    res.json(serviceResponse)
  }
}
