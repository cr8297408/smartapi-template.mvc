import { HttpServer } from "./app";
import { LocalEnvironmentInstance } from "./enviroment/LocalEnviroment";
import AppRouter from "./routes";

const enviroment = LocalEnvironmentInstance.setup();
const app = new HttpServer({
  port: Number(enviroment.PORT),
  router: AppRouter
});

try {
  app.init();
} catch (error) {
  console.error(error)
}