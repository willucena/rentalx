import { inject, injectable } from 'tsyringe';
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string
}
@injectable()
class CreateSpecificationsUseCase {
  
constructor(
  @inject("SpecificationsRepository")
  private specificationRespository: ISpecificationsRepository
  ){}

 async execute({ name , description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRespository.findByName(name);

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