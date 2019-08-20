import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Luiz Casemiro',
    email: 'casimirofelisaki@gmail.com',
    password_hash: '125676564263',
  });

  return res.json(user);
});

export default routes;
