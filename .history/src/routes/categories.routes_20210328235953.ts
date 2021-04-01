import { Router  } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreatecategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
 const categories = categoriesRepository.list()
  return response.status(200).json({categories});
})

categoriesRoutes.post("/", (request, response) => {
  const { name , description } = request.body;
  const createCategoryService = new CreatecategoryService(categoriesRepository);
  createCategoryService.execute({name, description});
 
  return response.status(201).send();
})

export { categoriesRoutes };