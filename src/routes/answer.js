import { Router } from 'express';
import * as RoutePaths from '../app/helpers/RoutePaths';
import Controller from '../app/controllers/AnswerController';

const routes = new Router();

routes
    .get('/', Controller.list)
    .post('/', Controller.create)
    .get('/:id', Controller.getOne)
    .put('/:id', Controller.update)
    .delete('/:id', Controller.remove);

export default {
    path: RoutePaths.ANSWER,
    routes,
};
