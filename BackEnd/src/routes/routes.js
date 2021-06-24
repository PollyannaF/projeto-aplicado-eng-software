import { Router } from 'express';
import routeController from '../controlers/RoutesController';

const routes = new Router();

routes.get('/', routeController.index)

export default routes;