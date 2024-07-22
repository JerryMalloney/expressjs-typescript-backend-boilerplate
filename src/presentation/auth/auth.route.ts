import { Router } from "express";
import { PostgresUserDatasource } from "../../infrastructure/datasources/postgres-user.datasource";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();
    const userRepository = new UserRepositoryImpl(new PostgresUserDatasource());
    const authMiddleware = new AuthMiddleware(userRepository);
    const authService = new AuthService(userRepository);
    const authController = new AuthController(authService);

    //here we define the routes

    router.post("/login", authController.loginUser);
    router.post(
      "/logintest",
      [authMiddleware.validateJWT],
      authController.loginUser
    );
    // router.post("/logout", authController.loginUser);
    router.post("/register", authController.registerUser);

    // router.post("/validate-email");

    return router;
  }
}
