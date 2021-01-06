import { Body, Controller, Delete, Param, Post} from '@nestjs/common';
import { QueueDTO } from '../model/dto/queue.dto';
import { QueueDetail } from '../model/entities/QueueDetail.entity';
import { QueueService } from '../services/queue.service';


@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}


  @Post('joinQueue')
  async joinQueue(@Body() queue1: QueueDTO): Promise<QueueDetail>{
    const queue2 = await this.queueService.joinQueue(queue1);
    console.log(queue2)
    return queue2;
  }

  @Delete('leavequeue/:id')
  async leaveQueue(@Param('id') id:number):Promise<any>{
    console.log(id);
    return await this.queueService.leaveQueue(id);
    
  }

}