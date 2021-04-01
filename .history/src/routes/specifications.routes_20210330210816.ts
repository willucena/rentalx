import { response, Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { createSpecificationsController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationRepository.list();
  return response.status(200).json({specifications});
 })

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response)
})

export { specificationsRoutes }