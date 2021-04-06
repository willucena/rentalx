import { Request, Response } from 'express';
import { container } from 'tsyringe'
import { CreatecategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { name , description } = request.body;

    //Faz a injeção de dependencia da classe CreatecategoryUseCase
    // Porque ela foi declarada injetavel (injectable)
    const createCategoryUseCase = container.resolve(CreatecategoryUseCase);
    
    await createCategoryUseCase.execute({name, description});
   
    return response.status(201).send();
  }

}

export { CreateCategoryController }