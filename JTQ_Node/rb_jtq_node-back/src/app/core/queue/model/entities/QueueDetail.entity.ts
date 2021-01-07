
import { Event } from 'src/app/core/event/model/entities/event.entity';
import { Visitor } from 'src/app/core/user/model/entities/visitor.entity';
// import { Event } from 'src/app/core/event/model/entities/event.entity';
// import { Visitor } from 'src/app/core/user/model/entities/visitor.entity';
import { Column, Entity, JoinColumn, ManyToOne} from 'typeorm';
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
  @Column('datetime', { nullable: true })
  minEstimatedTime!:any;

  @ManyToOne(() => Visitor)
  @JoinColumn({ name: 'idVisitor', referencedColumnName: 'id' })
  visitor!:Visitor;
  
  @ManyToOne(() => Event)
  @JoinColumn({ name: 'idEvent', referencedColumnName: 'id' })
  event!:Event;
 

}