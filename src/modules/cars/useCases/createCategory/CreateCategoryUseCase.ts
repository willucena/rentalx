import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
  name: string;
  description: string
}

class CreatecategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository){}

  async execute({ name , description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists!")
    }
  
    this.categoriesRepository.create({ name, description })
  } 
}

export { CreatecategoryUseCase }