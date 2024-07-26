import { Router } from "express";
import { PostgresUserDatasource } from "../../infrastructure/datasources/postgres-user.datasource";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();
    const userDatasource = new PostgresUserDatasource();

    const userRepository = new UserRepositoryImpl(userDatasource);
    const authMiddleware = new AuthMiddleware(userRepository);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    // get all users
    router.get("/", [authMiddleware.validateJWT], userController.getUsers);
    // get user
    router.get(
      "/:id",
      [authMiddleware.validateJWT],
      userController.getUserById
    );
    // update user
    router.patch(
      "/:id",
      [authMiddleware.validateJWT],
      userController.updateUser
    );
    // delete user
    router.delete(":id");

    return router;
  }
}
