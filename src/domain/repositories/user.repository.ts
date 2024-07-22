import { User } from "../entities/user.entity";

export abstract class UserRepository {
  abstract getUsers(): Promise<User[]>;
  abstract getUserById(id: number): Promise<User | null>;
  abstract getUserByEmail(email: string): Promise<User | null>;
  abstract saveUser(user: User): Promise<boolean>;
  abstract updateUser(user: User): Promise<User>;
  abstract deleteUser(user: User): Promise<User>;
}
