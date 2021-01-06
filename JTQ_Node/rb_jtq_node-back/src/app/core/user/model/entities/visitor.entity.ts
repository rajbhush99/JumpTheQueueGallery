//import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../../shared/model/entities/base-entity.entity';
//import { roles } from '../../../auth/model/roles.enum';

@Entity()
export class Visitor extends BaseEntity {
  // @Column('varchar', { length: 255, nullable: false })
  // username!: string;

  // @Column('varchar', { length: 255, nullable: false })
  // @Exclude({ toPlainOnly: true })
  // password!: string;

  // @Column('int', { nullable: false, default: roles.USER })
  // role!: number;
  id!: number;
  @Column('varchar', { length: 255, nullable: false })
  username!: string;
  @Column('varchar', { length: 255, nullable: false })
  name!: string;
  @Column('varchar', { length: 255, nullable: false })
  phoneNumber!: string;
  @Column('varchar', { length: 255, nullable: false })
  acceptedCommercial!: boolean;
  @Column('varchar', { length: 255, nullable: false })
  acceptedTerms!: boolean;
  @Column('varchar', { length: 255, nullable: false })
  userType!: boolean;
  @Column('varchar', { length: 255, nullable: false })
  password!: string;
}
