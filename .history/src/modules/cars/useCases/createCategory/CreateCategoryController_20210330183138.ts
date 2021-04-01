import { Request, Response } from 'express';
import { CreatecategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  handle(request: Request, response: Response) {
    const { name , description } = request.body;

    const createCategoryService = new CreatecategoryUseCase(categoriesRepository);

    createCategoryService.execute({name, description});
   
    return response.status(201).send();
  }
  
}

export { CreateCategoryController }