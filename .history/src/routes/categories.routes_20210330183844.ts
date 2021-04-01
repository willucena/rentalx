import { Router  } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreatecategoryService } from '../modules/cars/services/CreateCategoryService';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request, response) => {
 const categories = categoriesRepository.list()
  return response.status(200).json({categories});
})

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
})

export { categoriesRoutes };