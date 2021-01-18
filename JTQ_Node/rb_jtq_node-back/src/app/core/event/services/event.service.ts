import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../model/entities/event.entity';
@Injectable()
export class EventService{
 constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async getAllEvents():Promise<Event[]>{
        const eventList = await this.eventRepository.find();
        return eventList;
    }
    async increaseVisitorCount(eventId:number):Promise<void>{
        const result:Event|any = await this.eventRepository.findOne(eventId);
        result.customers = result.customers+1;
        await this.eventRepository.save(result);
    }
    
     async decreaseVisitorCount(eventId:number):Promise<void>{
       console.log(eventId)
        const result:Event|any = await this.eventRepository.findOne();
        result.customers = result.customers-1;
        await this.eventRepository.save(result);
    }
   
}