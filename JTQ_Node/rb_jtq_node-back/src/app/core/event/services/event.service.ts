import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../model/entities/event.entity';
//import { plainToClass } from 'class-transformer';

@Injectable()
export class EventService{
  
    constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

    async getAllEvents():Promise<Event[]>{
        const eventList = await this.eventRepository.find();
       // console.log(eventList);
        return eventList;
    }
}