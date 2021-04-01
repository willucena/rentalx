import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreatecategoryUseCase } from "./CreateCategoryUseCase";

/**
 * Repository
 */
const categoriesRepository = CategoriesRepository.getInstance();

/**
 * Service
 */
const createCategoryUseCase = new CreatecategoryUseCase(categoriesRepository);

/**
 * Controller
 */
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController }
