import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '../event/model/entities/event.entity';
import { Visitor } from '../user/model/entities/visitor.entity';
import { QueueController } from './controller/queue.controller';
import { QueueDetail } from './model/entities/QueueDetail.entity';
import { QueueService } from './services/queue.service';


@Module({
  imports: [TypeOrmModule.forFeature([QueueDetail, Event, Visitor])],
  controllers: [QueueController],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}