import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRouter {
  public router: Router;
  private userController: UserController;

  constructor(userController: UserController) {
    this.userController = userController;

    this.router = Router();

    this.router.get('/users', this.userController.getUsers);

    this.router.post('/users', this.userController.getUsers);

    this.router.delete('/users/:id', this.userController.getUsers);
  }
}
