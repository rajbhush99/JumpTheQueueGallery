import { Controller, Get} from '@nestjs/common';
import { EventService } from '../../event/services/event.service';
import { Event } from '../../event/model/entities/event.entity';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}


  @Get('allEvent')
  async getAllevents(): Promise<Event[]>{
    const eventList = await this.eventService.getAllEvents();
    //console.log(eventList);
    return eventList;
  }

}