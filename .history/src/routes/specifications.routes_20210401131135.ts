import { response, Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { createSpecificationsController } from '../modules/cars/useCases/createSpecification';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const specificationsRoutes = Router();

specificationsRoutes.get("/", (request, response) => {
  return  listCategoriesController.handle(request, response)
 })

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response)
})

export { specificationsRoutes }