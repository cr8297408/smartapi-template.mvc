import { NextFunction, Request, Response } from "express";
import { ZodError, ZodObject } from "zod";
import { ValidationPayloadError } from "../errors";

class ZodValidateMiddleware {
  validate = (schema: ZodObject<any>) => (req: Request, _: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (err) {
      if(err instanceof ZodError) {
        throw new ValidationPayloadError(err.message, err.cause)
      }
      next(err)
    }
  }
}

export const ZodValidateMiddlewareInstance = new ZodValidateMiddleware()