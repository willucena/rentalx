import {Request, Response } from 'express'
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

class ListCategoriesController {
  constructor(private categoriesRepository: CategoriesRepository){};

  handle(request: Request, response: Response): Response {
    
    const categories = this.categoriesRepository.list()

    return response.status(200).json({categories});
  }
}

export { ListCategoriesController }