import { Router } from "express";
import { HelloWordRouterInstance } from "./HelloWordRouter";

const AppRouter = Router();

AppRouter.use('/hello', HelloWordRouterInstance.router)

export default AppRouter