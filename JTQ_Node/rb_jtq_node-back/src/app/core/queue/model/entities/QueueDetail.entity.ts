
import { Column, Entity} from 'typeorm';
import { BaseEntity } from '../../../../shared/model/entities/base-entity.entity';

@Entity()
export class QueueDetail extends BaseEntity {

  id!: number;
  @Column('varchar', { length: 255, nullable: false })
  queueNumber!: string;
  @Column('varchar', { length: 255, nullable: false })
  startTime!: string;
  @Column('varchar', { length: 255, nullable: false })
  endTime!: string;
  //@Column('', { length: 255, nullable: false })
  minEstimatedTime!:any;

  idVisitor!: number;
  
  Idevent!: number
}