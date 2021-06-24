import { Router } from 'express';
import routeController from '../controlers/RoutesController';
import ClienteController from '../controlers/ClienteController';
import Cliente from '../models/Cliente';

const routes = new Router();

//Cliente Controler:


routes.get('/cliente', ClienteController.index); //Buscar todos cliente especifico

routes.post('/cliente', ClienteController.store); // Criar cliente

routes.put('/cliente', ClienteController.update); // Atualizar cliente

routes.delete('/cliente/:cpf', ClienteController.delete); // Exlcuir cliente

routes.get('/', routeController.index)

export default routes;