import { Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
interface ICategoriesReposistory {
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesReposistory , ICreateCategoryDTO}