import { ICategoriesReposistory } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string
}

class CreatecategoryService {
  constructor(private categoriesRepository: ICategoriesReposistory){}

  execute({ name , description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists!")
    }
  
    this.categoriesRepository.create({ name, description })
  } 
}

export { CreatecategoryService }