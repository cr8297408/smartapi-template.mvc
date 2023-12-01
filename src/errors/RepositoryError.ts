import { SystemError } from './SystemError';

export class RepositoryError extends SystemError {
  constructor(name: string, method: string) {
    super(`Error in repository [${name}] in method [${method}]`);
    this.code = 'repository/repository-error';
    this.name = 'RepositoryError';
    this.kind = 'system';
    this.statusCode = 400
  }
}