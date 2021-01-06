import { QueueDetail } from "../entities/QueueDetail.entity";

export class QueueDTO extends QueueDetail{
    eventId!:number ;
    visitorId!: number;
}