import { Router } from 'express';
import ClienteController from '../controlers/ClienteController';
import CategoriaController from '../controlers/CategoriaController';


const routes = new Router();

//Cliente CRUD:


routes.get('/cliente/:cpf', ClienteController.index); //Buscar cliente especifico

routes.post('/cliente', ClienteController.store); // Criar cliente

routes.put('/cliente', ClienteController.update); // Atualizar cliente

routes.delete('/cliente/:cpf', ClienteController.delete); // Exlcuir cliente


//Categoria CRUD:


routes.get('/categoria', CategoriaController.index); //Buscar categorias

routes.get('/categoria/:id', CategoriaController.index); //Buscar categorias

routes.post('/categoria', CategoriaController.store); //Criar categoria especifica

routes.put('/categoria/', CategoriaController.update); //Atualizar categoria especifica

routes.delete('/categoria/:id', CategoriaController.delete); //Excluir categoria especifica

export default routes;