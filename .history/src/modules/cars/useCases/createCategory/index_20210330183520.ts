import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreatecategoryUseCase } from "./CreateCategoryUseCase";

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

export { createCategoryController }
