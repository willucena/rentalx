import { compare  } from 'bcrypt';
import { inject, injectable } from "tsyringe";
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { AppError } from '../../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string
}
@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

 async execute({ email, password }: IRequest) : Promise<IResponse>{
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError("Email or password incorrect", 401)
    }
    //comparando a senha passada pelo usuário com a senha cadastrada no banco
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Email or password incorrect",401)
    }

    // Gerando o token com jsonwebtoken
    const token = sign({}, "17bbe754d6d696c802d05c6f121e64a0", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }