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
  getOne = (req: Request, res: Response) => {
    const { uuid } = req.params;
    const serviceResponse = this.#service.getOne({
      uuid,
    });
    res.json(serviceResponse)
  }
  create = (req: Request, res: Response) => {
    const { saludo } = req.body;
    const serviceResponse = this.#service.create({
      saludo
    });
    res.json(serviceResponse)
  }
  update = (req: Request, res: Response) => {
    const { uuid } = req.params;
    const { saludo } = req.body;
    const serviceResponse = this.#service.update({
      saludo,
      uuid
    });
    res.json(serviceResponse)
  }
  delete = (req: Request, res: Response) => {
    const { uuid } = req.params;
    const serviceResponse = this.#service.delete({
      uuid
    });
    res.json(serviceResponse)
  }
}
