import { SystemError } from './SystemError';

export class ValidationPayloadError extends SystemError {
  constructor(value: string, cause: unknown) {
    super(`Validation payload error [${value}]`);
    this.code = 'validation/payload-unprocessable-error';
    this.name = 'ValidationError';
    this.cause = cause;
    this.kind = 'validation';
  }
}