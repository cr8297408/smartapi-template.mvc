import { Router } from "express";

export interface HttpServerDependences {
  port: number;
  router: Router;
}