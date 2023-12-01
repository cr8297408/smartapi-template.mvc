import { SystemError } from ".";

export class NotFoundRouteError extends SystemError {
  constructor(pathName: string) {
    super();
    this.message = `Requested path [${pathName}] not found`;
    this.name = "NotFoundRouteError";
    this.kind = "system";
    this.code = "routes/notfound-path",
    this.statusCode = 404
  }
}