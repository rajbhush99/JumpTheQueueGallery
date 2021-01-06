import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QueueDetail } from '../model/entities/QueueDetail.entity';
import { QueueDTO } from '../model/dto/queue.dto';
import { Event } from '../../event/model/entities/event.entity';
import { subtract } from 'lodash';


@Injectable()
export class QueueService{
   
   constructor(@InjectRepository(QueueDetail) private readonly queueRepository: Repository<QueueDetail>,
   @InjectRepository(Event) private readonly eventRepository: Repository<Event> ) {}

      async joinQueue(queue1: QueueDTO): Promise<QueueDetail>{
      const eId = queue1.eventId;
      const visitorId = queue1.visitorId;
         console.log(eId);
       const eventDetail:Event|undefined = await this.getEventDetailById(eId);
       const queue:QueueDetail = new QueueDetail();
       queue.queueNumber ="Q035";
       queue.startTime = eventDetail!.startDate;
       queue.endTime = eventDetail!.endDate;
       queue.minEstimatedTime= await this.getMinimumEstimatedTime(eventDetail!.currentNumber,queue.queueNumber );
       queue.idVisitor = visitorId;
       queue.Idevent = eId;

      const result  = await this.queueRepository.save(queue);
      console.log(result);
      return result;
      }

      async getEventDetailById(eId:any):Promise<Event|undefined>{
           console.log('3')
         const eventDetail =  this.eventRepository.findOne(eId);
         console.log(eventDetail)
         return eventDetail;
     }

     async getMinimumEstimatedTime(currentNumber:String ,queueNumber:String):Promise<any>{
           
          const currently = parseInt(currentNumber.substr(1));
          const queue1 = parseInt(queueNumber.substr(1));
          const currentTime  = new Date().getTime();
          const queueTime =currentTime + subtract(queue1,currently)*12000;
          return queueTime;
     }

     async leaveQueue(id:number):Promise<any>{
       return this.queueRepository.delete(id);
     }
}