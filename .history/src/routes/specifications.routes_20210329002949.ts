import { response, Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationsRepository();

specificationsRoutes.get("/", (request, response) => {
  const specifications = specificationRepository.list();
  return response.status(200).json({specifications});
 })

specificationsRoutes.post("/", (request, response) => {
  
  const {name , description } =  request.body;
  const createSpecificationService = new CreateSpecificationService(specificationRepository);

  createSpecificationService.execute({
    name,
    description
  });

  return response.status(201).send();
})

export { specificationsRoutes }