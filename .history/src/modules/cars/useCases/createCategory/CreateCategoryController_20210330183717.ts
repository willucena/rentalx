import { Request, Response } from 'express';
import { CreatecategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  
  constructor(private createCAtegoryUseCase: CreatecategoryUseCase){}

  handle(request: Request, response: Response) {
    const { name , description } = request.body;

    const createCategoryService = new CreatecategoryUseCase(this.createCAtegoryUseCase);

    createCategoryService.execute({name, description});
   
    return response.status(201).send();
  }

}

export { CreateCategoryController }