import { NextFunction, Request, Response } from "express";
import { NotFoundRouteError } from "../errors";

class NotFoundMiddlewareRoutes {
  handling = (req: Request, _: Response, next: NextFunction) => {
    const err = new NotFoundRouteError(String(req.path));
    next(err);
  }
}

export const NotFoundMiddlewareRoutesInstance = new NotFoundMiddlewareRoutes();