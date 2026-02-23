import { CreateUserDTO, User } from './user.types';
import Boom from '@hapi/boom';

export class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getUsers = (): User[] => {
    return this.users;
  };

  createUsers = (user: CreateUserDTO): User => {
    const newUser: User = {
      id: new Date().getTime().toString(),
      name: user.name,
      email: user.email,
    };
    this.users.push(newUser);

    return newUser;
  };

  /*Tipo de operación*/
  deleteUsers = (userId: string): void => {
    const userFound = this.users.find((user) => user.id === userId);

    if (!userFound) {
      throw Boom.notFound('404 Error User not Found');
    }

    this.users = this.users.filter((user) => user.id !== userId);
  };
}
