import User from "../../entities/User";
import { ICreateUsersDTO, IUsersRepository } from "../IUsersRepository";

class UsersReposistoryInMemory implements IUsersRepository {
  users : User[] = [];

  async create({driver_license, email, name, password}: ICreateUsersDTO): Promise<void> {
    const user = new User()

    Object.assign(user, {
       driver_license,
       email, 
       name, 
       password
    })

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User | undefined> {
   const user = this.users.find(user => user.email === email);
   return user;
  }

  async findById(id: string): Promise<User | undefined> {
    return  this.users.find(user => user.id === id);
    
  }
}

export { UsersReposistoryInMemory }