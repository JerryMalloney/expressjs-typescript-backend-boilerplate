import { UpdateUserDto, UserRepository } from "../../domain";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers = async (id: number) => {
    return await this.userRepository.getUsers();
  };
  getUserById = async (id: number) => {
    return await this.userRepository.getUserById(id);
  };
  updateUser = async (updateUserDto: UpdateUserDto) => {
    return await this.userRepository.updateUser(updateUserDto);
  };

  deleteUser = async (id: number) => {
    return await this.userRepository.deleteUser(id);
  };
}
