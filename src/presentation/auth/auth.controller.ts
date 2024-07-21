import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  constructor(public readonly authService: AuthService) {}

  loginUser = (req: Request, res: Response) => {
    this.authService
      .loginUser("test")
      .then((result) => res.json(result))
      .catch((error) => console.log(error));
  };

  registerUser = (req: Request, res: Response) => {
    res.json("Auth Register");
  };
}
