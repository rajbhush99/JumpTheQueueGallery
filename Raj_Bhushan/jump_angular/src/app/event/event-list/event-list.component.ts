import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue/services/queue.service';
// import {Event} from '../../core/model/event';
import { Router } from '@angular/router';
import { Event } from 'src/app/core/model/shared';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

   selectedEventId: any;
  allEvents: Event[] = [];
  constructor(private queueService: QueueService , private route: Router) {

  }
  ngOnInit() {
        this.queueService.getAllEvents().subscribe(data => {
        this.allEvents =  data;
    });
    }
    selectEvent(id: Event) {
    this.selectedEventId = id;
    return true;
    }

    getCurrentUser() {
      return localStorage.getItem('LoggedInUser');
    }
    isJoined(eventId) {
      const user = this.getCurrentUser();
      const returnvalue =  localStorage.getItem( user + '#' + eventId);
      if (returnvalue !== null) {
        return true; } else {
          return false;
        }
    }

}
