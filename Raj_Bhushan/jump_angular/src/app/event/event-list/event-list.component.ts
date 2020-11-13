import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue/services/queue.service';
import {Event} from '../../core/model/event';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

   selectedEventId : any;
 // id: any;
  allEvents: Event[] = [];
  constructor(private queueService: QueueService) {

  }
  ngOnInit() {
    this.queueService.getAllEvents().subscribe(data=>{
      this.allEvents =  data['events'];
    });
  }
  selectEvent(id: Event)
  {
    this.selectedEventId = id;
    return true;
  }
}
