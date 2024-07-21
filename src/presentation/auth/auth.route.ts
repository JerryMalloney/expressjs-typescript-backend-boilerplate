import { Router } from "express";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const authService = new AuthService();
    const authController = new AuthController(authService);

    //here we define the routes

    router.post("/login", authController.loginUser);
    // router.post("/register", authController.registerUser);

    return router;
  }
}
