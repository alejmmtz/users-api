import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { UserService } from './user.service';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getUsers = (req: Request, res: Response) => {
    const users = this.userService.getUsers();
    return res.json(users);
  };

  createUsers = (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (name === undefined) {
      throw Boom.badRequest('Name is required');
    }
    if (email === undefined) {
      throw Boom.badRequest('Email is required');
    }

    const users = this.userService.createUsers({ name, email });
    return res.json(users);
  };

  deleteUsers = (req: Request, res: Response) => {
    const { id } = req.params;
    //const id = req.params.id;
    this.userService.deleteUsers(String(id));
    return res.send('User Deleted');
  };
}
