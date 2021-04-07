import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import User from "../../entities/User";
import { ICreateUsersDTO, IUsersRepository } from "../IUsersRepository";

@injectable()
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor(){
    this.repository = getRepository(User)
  }

  async create({name,  email, driver_license, password}: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create({
      name, 
      email, 
      driver_license, 
      password
    })

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({email});
    return user;
  }
  
}

export { UsersRepository }