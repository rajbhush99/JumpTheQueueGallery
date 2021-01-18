import { Controller, Get, NotFoundException} from '@nestjs/common';
import { EventService } from '../../event/services/event.service';
import { Event } from '../../event/model/entities/event.entity';
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('allEvent')
  async getAllevents(): Promise<Event[]>{
    try{
    const eventList = await this.eventService.getAllEvents();
    return eventList; }
    catch(e){
       throw new NotFoundException(e.message);
    }
  }

}