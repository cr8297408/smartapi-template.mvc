import { SystemError } from './SystemError';

export class DatabaseError extends SystemError {
  constructor(name: string) {
    super(`Cant connect to database [${name}]`);
    this.code = 'connection/connect-database-error';
    this.name = 'DatabaseError';
    this.kind = 'system';
  }
}