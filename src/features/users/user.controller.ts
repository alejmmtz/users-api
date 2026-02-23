import { Request, Response } from 'express';
import Boom from '@hapi/boom';
import { User } from './user.types';

export class UserController {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getUsers = (req: Request, res: Response) => {
    return res.json(this.users);
  };

  createUsers = (req: Request, res: Response) => {
    const { name, email } = req.body;

    if (name === undefined) {
      throw Boom.badRequest('Name is required');
    }
    if (email === undefined) {
      throw Boom.badRequest('Email is required');
    }

    const newUser: User = {
      id: new Date().getTime().toString(),
      name,
      email,
    };

    this.users.push(newUser);

    return res.json(newUser);
  };

  deleteUsers = (req: Request, res: Response) => {
    return res.send('Delete users');
  };
}
