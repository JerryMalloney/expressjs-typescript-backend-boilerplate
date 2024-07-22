import { PrismaClient } from "@prisma/client";
import { RegisterUserDto, User, UserDatasource } from "../../domain";

const prisma = new PrismaClient();

export class PostgresUserDatasource implements UserDatasource {
  async getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users.map((user) => User.fromObject(user));
  }
  async getUserById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user ? User.fromObject(user) : null;
  }
  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user ? User.fromObject(user) : null;
  }
  async saveUser(user: RegisterUserDto): Promise<boolean> {
    const result = await prisma.user.create({
      data: user,
    });
    return true;
  }
  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
