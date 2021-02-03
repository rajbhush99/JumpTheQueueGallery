import { Injectable, UnauthorizedException } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { UserService } from '../../user/services/user.service';
import { Visitor } from '../../user/model/entities/visitor.entity';
import { LoginDTO } from '../model/login.dto';
import { compare } from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<Visitor |undefined> {
    const user = await this.usersService.findOne(username);
    if(user!.username===username && await compare(pass ,user!.password)){ 
      return classToPlain(user) as Visitor;
    }
    return undefined;
  }

  async login(user: LoginDTO): Promise<Visitor> {
    const payload = await this.validateUser(user.username!, user.password!);

    if (!payload) {
      throw new UnauthorizedException('Wrong username or password');
    }
     return payload;
  }

  async register(user: Visitor): Promise<Visitor> {
    return await this.usersService.registerUser(user);
  }
}
