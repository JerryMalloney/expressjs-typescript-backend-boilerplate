import { Router } from "express";
import { AuthRoutes } from "./auth/auth.route";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //here we define the routes

    router.use("/api/auth", AuthRoutes.routes);

    return router;
  }
}
