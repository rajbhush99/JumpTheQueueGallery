import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Visitor } from '../model/entities/visitor.entity';
import { InjectRepository } from '@nestjs/typeorm';
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
    return plainToClass(
      Visitor,
      await this.userRepository.save(user)
    );
  }
}
