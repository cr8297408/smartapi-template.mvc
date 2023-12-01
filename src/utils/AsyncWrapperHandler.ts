import { Request, Response, NextFunction } from "express";

export const AsyncWrapperHandling = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};