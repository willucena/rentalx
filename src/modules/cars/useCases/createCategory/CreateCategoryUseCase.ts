import { inject , injectable} from 'tsyringe'
import { ICategoriesReposistory } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string
}
@injectable()
class CreatecategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesReposistory
  ){}

  async execute({ name , description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      throw new Error("Category already exists!")
    }
  
    this.categoriesRepository.create({ name, description })
  } 
}

export { CreatecategoryUseCase }