import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QueueDetail } from '../model/entities/QueueDetail.entity';
import { QueueDTO } from '../model/dto/queue.dto';
import { Event } from '../../event/model/entities/event.entity';
import { subtract } from 'lodash';
import { EventService } from '../../event/services/event.service';

@Injectable()
export class QueueService{
   
   constructor(@InjectRepository(QueueDetail) private readonly queueRepository: Repository<QueueDetail>,
   @InjectRepository(Event) private readonly eventRepository: Repository<Event> ,
   private readonly eventService :EventService) {}

      async joinQueue(queue1: QueueDTO): Promise<QueueDetail>{
      const eId = queue1.eventId;
       const visitorId = queue1.visitorId;
       const eventDetail:Event|any = await this.getEventDetailById(eId);
       const queue:QueueDetail = new QueueDetail();  
       queue.idVisitor = visitorId;
       queue.idEvent = eId;
       const queueList:QueueDetail[]= await this.getQueueListByEventId(queue.idEvent);
    
       if(queueList!.length==0){
         queue.queueNumber="Q001"
       } else{
         const lastNumber:any = queueList!.length-1;
         const queueFind:QueueDetail = queueList![lastNumber];
         const lastQueueDigit = parseInt(queueFind!.queueNumber.substr(1));
         queue.queueNumber = await this.generateQueueNumber(lastQueueDigit);
       } 
       queue.startTime = eventDetail.startDate;
       queue.endTime = eventDetail.endDate;
       queue.minEstimatedTime= await this.getMinimumEstimatedTime(eventDetail!.currentNumber,queue.queueNumber );
     
      const result  = await this.queueRepository.save(queue);
      await this.eventService.increaseVisitorCount(result.idEvent);
      // const finalResult = await this.queueRepository.findOne({ where: { id: result.id } });
      return result;
      }

      async generateQueueNumber(lastQueueDigit:any):Promise<string>{
        const newQueueDigit = lastQueueDigit + 1;
         let newQueueCode:string='';
        if(newQueueDigit==1000){
          newQueueCode="Q000";
        }else{
          let value =  new String();
          value=value.concat(newQueueDigit)
          while(value.length<3){
            value='0'+value
          }
         value='Q'+value;
          newQueueCode = value.toString();
         
       }
       return newQueueCode;
      }
      async getEventDetailById(eId:any):Promise<Event|undefined>{
         const eventDetail = await this.eventRepository.findOne(eId);
         return eventDetail;
     }
     
     async getMinimumEstimatedTime(currentNumber:String ,queueNumber:String):Promise<Date>{
           
          const currently = parseInt(currentNumber.substr(1));
          const queue1 = parseInt(queueNumber.substr(1));
          const currentTime  = new Date().getTime();
          const queueTime =new Date(currentTime + subtract(queue1,currently)*180000);
          return queueTime;
     }

     async getQueueListByEventId(eId:number):Promise<QueueDetail[]>{
       const list = await this.queueRepository.find({ where: { idEvent:eId } });
       return list;
     }

     async leaveQueue(id:number):Promise<any>{
       const result = await this.queueRepository.findOne(id)
       await this.eventService.decreaseVisitorCount(result!.idEvent);
       const leave =await this.queueRepository.delete(id); 
       return leave;
     }
}