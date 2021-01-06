import { Visitor } from '../../user/model/entities/visitor.entity';
import { IsDefined, IsString } from 'class-validator';

export class LoginDTO implements Pick<Visitor, 'username' | 'password'> {
  @IsDefined()
  @IsString()
  username!: string;
  @IsDefined()
  @IsString()
  password!: string;
}
