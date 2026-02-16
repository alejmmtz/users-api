import { Router } from 'express';

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.router.get('/users', (req, res) => {
      return res.send('Get Users');
    });

    this.router.post('/users', (req, res) => {
      return res.send('Post Users');
    });

    this.router.delete('/users/:id', (req, res) => {
      console.log(req.params);
      return res.send('Delete Users');
    });
  }
}
