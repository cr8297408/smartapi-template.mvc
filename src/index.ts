import { HttpServer } from "./app";
import AppRouter from "./views";

const app = new HttpServer({
  port: 3000,
  router: AppRouter
});

try {
  app.init();
} catch (error) {
  console.error(error)
}