import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Visitor } from '../model/entities/visitor.entity';
//import { genSalt, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
//import { roles } from '../../auth/model/roles.enum';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(@InjectRepository(Visitor) private readonly userRepository: Repository<Visitor>) {}

  async findOne(username: string): Promise<Visitor | undefined> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async registerUser(user: Visitor): Promise<Visitor> {
    const actualUser = await this.findOne(user.username!);

    if (actualUser) {
      throw new Error('User already exists');
    }

   // const salt = await genSalt(12);
   // const hashPass = await hash(user.password, salt);

    return plainToClass(
      Visitor,
      await this.userRepository.save(user)
    );
  }
}
