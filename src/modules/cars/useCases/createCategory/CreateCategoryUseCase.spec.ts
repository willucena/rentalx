import { AppError } from "@shared/errors/AppError";
import { CategoriesReposistoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesReposistoryInMemory";
import { CreatecategoryUseCase } from "./CreateCategoryUseCase";


let createCategoryUseCase: CreatecategoryUseCase;
let categoriesRepositoryInMemory: CategoriesReposistoryInMemory

describe("Create category", () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesReposistoryInMemory();
    createCategoryUseCase = new CreatecategoryUseCase(categoriesRepositoryInMemory)
  })

  /** Teste de cadastro  uma categoria */
  it("should be able to create a new category", async() => {
    const category = {
      name: "SUV",
      description: "Descrição da minha categoria"
    };

    await createCategoryUseCase.execute(category);
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

    expect(categoryCreated).toHaveProperty("id")
  })

  /** Não pode existir categorias com mesmo nome */
  it("should not be able a new category with bame exists", async() => {
    expect(async() => {
      const category = {
        name: "SUV",
        description: "Descrição da minha categoria"
      };
      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError)
  })

})