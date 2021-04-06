import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreatecategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
/**
 * Repository
 */
  const categoriesRepository = new CategoriesRepository();

 /**
  * Service
  */
  const createCategoryUseCase = new CreatecategoryUseCase(categoriesRepository);
 
 /**
  * Controller
  */
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
 
}

