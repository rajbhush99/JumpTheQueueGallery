import { Body, Controller, Delete,  Get,  Param, Post} from '@nestjs/common';
import { QueueDTO } from '../model/dto/queue.dto';
import { QueueDetail } from '../model/entities/QueueDetail.entity';
import { QueueService } from '../services/queue.service';
@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('joinQueue')
  async joinQueue(@Body() queue1: QueueDTO): Promise<QueueDetail>{
    const queueResult = await this.queueService.joinQueue(queue1);
    return queueResult;
  }

  @Delete('leavequeue/:id')
  async leaveQueue(@Param('id') id:number):Promise<any>{
    return await this.queueService.leaveQueue(id);
  }

   @Get('fetch/:id')
   async fetch(@Param('id') id :number):Promise<QueueDetail[]>{
      return await this.queueService.getQueueListByEventId(id);
    }
  

}