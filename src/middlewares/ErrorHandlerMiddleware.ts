import { NextFunction, Request, Response } from "express";
import { GeneralInternalError, SystemError } from "../errors";

class ErrorHandlerMiddleware {
  handlingGeneralError = (err: Error, _: Request, __: Response, next: NextFunction) => {
    if(err instanceof SystemError) {
      next(err);
    }
    // parse internal error and pass to error handler
    const error = new GeneralInternalError()
    next(error)
  }
  handling = (err: SystemError, _: Request, res: Response, __: NextFunction) => {
    res.status(err.statusCode).send({
      success: false,
      message: err.message,
      name: err.name,
      code: err.code
    });
  }
}

export const ErrorHandlerMiddlewareInstance = new ErrorHandlerMiddleware();