import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string
}

class CreateSpecificationsUseCase {

  constructor(private specificationRespository: SpecificationsRepository){}

  execute({ name , description}: IRequest): void {
    const specificationAlreadyExists = this.specificationRespository.findByName(name);

    if(specificationAlreadyExists){
      throw new Error("Specification already exists!")
    }

    this.specificationRespository.create({
      name, 
      description
    })
  }
}

export { CreateSpecificationsUseCase }