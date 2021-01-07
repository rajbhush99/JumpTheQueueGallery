import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../../shared/model/entities/base-entity.entity';


@Entity()
export class Event extends BaseEntity {
 
  id!: number;
  @Column('varchar', { length: 255, nullable: false })
  eventname!: string;
  @Column('varchar', { length: 255, nullable: false })
  logo!: string;
  @Column('varchar', { length: 255, nullable: false })
  currentNumber!: string;
  @Column('varchar', { length: 255, nullable: false })
  startDate!: string;
  @Column('varchar', { length: 255, nullable: false })
  endDate!: string;
  @Column('varchar', { length: 255, nullable: false })
  minAttentionTime!: string;
  @Column('int', {  nullable: false })
  customers!: number;

}