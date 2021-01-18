import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../../shared/model/entities/base-entity.entity';
@Entity()
export class Visitor extends BaseEntity {

  @Column('varchar', { length: 255, nullable: false })
  username!: string;
  @Column('varchar', { length: 255, nullable: false })
  name!: string;
  @Column('varchar', { length: 255, nullable: false })
  phoneNumber!: string;
  @Column('varchar', { length: 255, nullable: false })
  acceptedCommercial!: boolean;
  @Column('boolean',{nullable: false })
  acceptedTerms!: boolean;
  @Column('boolean', {nullable: false })
  userType!: boolean;
  @Column('varchar', { length: 255, nullable: false })
  password!: string;
}
