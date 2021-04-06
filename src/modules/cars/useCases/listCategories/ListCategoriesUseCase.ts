import { Category } from "../../entities/Category";
import { inject, injectable } from 'tsyringe';
import { ICategoriesReposistory } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesReposistory
    ){};

 async execute(): Promise<Category[]>{
    return await this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase}
