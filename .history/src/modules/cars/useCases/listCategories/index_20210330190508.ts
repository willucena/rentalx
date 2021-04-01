import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";

const categoriesRepository = new CategoriesRepository();

const listCategoriesController = new ListCategoriesController(categoriesRepository);

export { listCategoriesController }