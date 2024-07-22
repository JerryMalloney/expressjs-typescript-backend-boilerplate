import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { User } from "../entities/user.entity";

export abstract class UserDatasource {
  abstract getUsers(): Promise<User[]>;
  abstract getUserById(id: number): Promise<User | null>;
  abstract getUserByEmail(email: string): Promise<User | null>;
  abstract saveUser(user: RegisterUserDto): Promise<boolean>;
  abstract updateUser(user: User): Promise<User>;
  abstract deleteUser(user: User): Promise<User>;
}
