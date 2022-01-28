import { Router } from 'express';
import * as RoutePaths from '../app/helpers/RoutePaths';
import Controller from '../app/controllers/QuizController';

const routes = new Router();

routes
    .get('/', Controller.list)
    .post('/', Controller.create)
    .get('/:id', Controller.getOne)
    .put('/:id', Controller.update)
    .delete('/:id', Controller.remove);

export default {
    path: RoutePaths.QUIZ,
    routes,
};
