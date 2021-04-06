import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{

  private repository : Repository<Specification>;

  constructor(){
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = await this.repository.create({
      name, 
      description
    })

    this.repository.save(specification);
  }


  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({name});
    return specification || undefined;
  }

  async list(): Promise<Specification[] >{
    const specifications = await this.repository.find();
    return specifications;
  }

}

export { SpecificationsRepository }