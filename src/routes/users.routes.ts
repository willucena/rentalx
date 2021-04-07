import { Router  } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUsers/CreateUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);

export { userRoutes }

