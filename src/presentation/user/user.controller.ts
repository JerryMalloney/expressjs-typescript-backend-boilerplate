import { Request, Response } from "express";
import { UpdateUserDto } from "../../domain";
import { ErrorHandler } from "../shared/errorHandler";
import { UserService } from "./user.service";

export class UserController {
  constructor(private userService: UserService) {}

  getUsers = async (req: Request, res: Response) => {
    this.userService
      .getUsers(req.body.user.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => ErrorHandler.handle(err, res));
  };

  getUserById = async (req: Request, res: Response) => {
    this.userService
      .getUserById(req.body.user.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => ErrorHandler.handle(err, res));
  };

  updateUser = async (req: Request, res: Response) => {
    const id = +req.body.user.id;
    const [err, updateUserDto] = UpdateUserDto.create({ ...req.body, id });
    if (err) return res.status(400).json({ error: err });

    this.userService
      .updateUser(updateUserDto!)
      .then((result) => res.status(200).json(result))
      .catch((err) => ErrorHandler.handle(err, res));
  };
}
