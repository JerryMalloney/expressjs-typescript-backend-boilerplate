import { CustomError } from "../errors/custom.error";

export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public emailValidated: boolean,
    public password: string,
    public role: string[],
    public img?: string
  ) {}

  static fromObject(object: { [key: string]: any }): User {
    const {
      id,
      firstName,
      lastName,
      emailValidated = false,
      password,
      role,
    } = object;

    if (!id) throw CustomError.badRequest("no id provided");
    if (!firstName) throw CustomError.badRequest("no first name provided");
    if (!lastName) throw CustomError.badRequest("no last name provided");
    if (!password) throw CustomError.badRequest("no password provided");

    return new User(id, firstName, lastName, emailValidated, password, role);
  }
}
