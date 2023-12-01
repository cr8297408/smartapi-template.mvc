import { SystemError } from ".";

export class GeneralInternalError extends SystemError {
  constructor() {
    super();
    this.message = "general/internal-server-error";
    this.name = "GeneralInternalError";
    this.kind = "system";
    this.code = "ServerError",
    this.statusCode = 500
  }
}