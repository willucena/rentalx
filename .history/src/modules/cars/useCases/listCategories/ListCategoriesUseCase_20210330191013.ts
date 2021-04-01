import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class ListCategoriesUseCase {

  constructor(private categoriesRepository: CategoriesRepository){};
  
  execute(): void{
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase}
