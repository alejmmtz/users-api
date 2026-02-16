import express, { Router } from 'express';
import { NODE_ENV, PORT } from './config';
import { UserRouter } from './features/users/users.router';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!!');
});

const apiRouter = Router();
app.use('/api', apiRouter);

const userRouter = new UserRouter();
apiRouter.use(userRouter.router);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:` + PORT);
  });
}

export default app;
