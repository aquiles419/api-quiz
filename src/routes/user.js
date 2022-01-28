import { Router } from 'express';
import * as RoutePaths from '../app/helpers/RoutePaths';
import authMiddleware from '../app/middlewares/auth';

import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';

const usersRoutes = new Router();

// Public routes
usersRoutes
    .get('/', UserController.list)
    .post('/', UserController.store)
    .post('/login', UserController.login)
    .post(RoutePaths.SESSIONS, SessionController.store);

// Apply Authentication Middleware
usersRoutes.use(authMiddleware);

// Private routes
usersRoutes.put('/', UserController.update);

export default {
    path: RoutePaths.USERS,
    routes: usersRoutes,
};
