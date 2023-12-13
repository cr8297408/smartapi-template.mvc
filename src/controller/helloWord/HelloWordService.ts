import { CreateHelloWordPayload, DeleteHelloWordPayload, GetOneHelloWordPayload, UpdateHelloWordPayload } from "../../domain";
import { HelloWordRepository } from "../../repositories"

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
  getOne = ({ uuid }: GetOneHelloWordPayload) => {
    // Bussiness Logic
    return this.#repository.getOne({
      uuid
    });
  }
  create = (data: CreateHelloWordPayload) => {
    // Bussiness Logic
    return this.#repository.create(data);
  }
  update = (data: UpdateHelloWordPayload) => {
    // Bussiness Logic
    return this.#repository.update(data);
  }
  delete = (data: DeleteHelloWordPayload) => {
    // Bussiness Logic
    return this.#repository.delete(data);
  }
}
