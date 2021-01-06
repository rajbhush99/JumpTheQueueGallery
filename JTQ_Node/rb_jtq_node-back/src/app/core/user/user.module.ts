import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visitor } from './model/entities/visitor.entity';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Visitor])],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
