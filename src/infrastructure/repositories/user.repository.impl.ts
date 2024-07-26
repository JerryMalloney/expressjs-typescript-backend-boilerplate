import {
  RegisterUserDto,
  UpdateUserDto,
  User,
  UserDatasource,
  UserRepository,
} from "../../domain";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}
  async getUsers(): Promise<User[]> {
    return this.userDatasource.getUsers();
  }
  async getUserById(id: number): Promise<User | null> {
    return this.userDatasource.getUserById(id);
  }
  async getUserByEmail(email: string): Promise<User | null> {
    return this.userDatasource.getUserByEmail(email);
  }
  saveUser(user: RegisterUserDto): Promise<boolean> {
    return this.userDatasource.saveUser(user);
  }
  updateUser(user: UpdateUserDto): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
