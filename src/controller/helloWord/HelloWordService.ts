import { HelloWordRepository } from "../../model"

export interface HelloWordServiceDependences {
  repository: HelloWordRepository;
}
export class HelloWordService {
  #repository: HelloWordRepository;
  constructor({ repository }: HelloWordServiceDependences) {
    this.#repository = repository;
  }
  getAll = () => {
    return this.#repository.getAll();
  }
}
