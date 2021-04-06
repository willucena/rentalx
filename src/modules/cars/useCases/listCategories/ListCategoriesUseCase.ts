import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {

  constructor(private categoriesRepository: CategoriesRepository){};

 async execute(): Promise<Category[]>{
    return await this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase}
