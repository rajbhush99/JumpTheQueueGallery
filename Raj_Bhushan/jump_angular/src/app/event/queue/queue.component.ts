import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueueService } from './services/queue.service';
import { Event, QueueDetail } from '../../core/model/shared';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/security/auth.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css'],
})
export class QueueComponent implements OnInit, OnChanges {
  public visitorId: any;
  event: Event = null;
  queueDetail: QueueDetail = null;
  queueId1 = 0;
  @Input() id: any;
  constructor(
    private queueService: QueueService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private authService: AuthService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getEventDetails();
  }
  ngOnInit(): void {
  }

 // method will return the current user
 getCurrentUser() {
  return localStorage.getItem('LoggedInUser');
}
  getEventDetails() {
    this.queueService.getAllEvents().subscribe((data) => {
      for (const event of data) {
        if (event.id === this.id) {
          this.event = event;
        }
      }
    });
  }
  onJoinQueue(eventId) {
    this.queueService.joinQueue(eventId, this.authService.getVisitorId()).subscribe((data) => {
      this.queueDetail = data;
      const user = this.getCurrentUser();
      const temp =  { queueNumber : this.queueDetail.queueNumber,
                   queueId: this.queueDetail.id ,
                  minEstimatedTime: this.queueDetail.minEstimatedTime};
      localStorage.setItem(user + '#' + this.event.id, JSON.stringify(temp)) ;
      this.snackbar.open(
        'Succefully joined the queue ', '',
        {
          duration: 2000,
          panelClass: ['success'],
        }
      );
     });
  }
  getEstimatedTime() {
    // const current = parseInt(this.event.currentNumber.substring(1));
    // const queue1 = this.getMyNumberFromLocal();
    // const queue = parseInt(queue1.substring(1));
    // const difference = (queue - current) * 120;
    // return difference;
    // const time  = parseInt(this.queueDetail.minEstimatedTime);
    // return time;
    const user = this.getCurrentUser();
    const temp = localStorage.getItem(user + '#' + this.event.id);
    if (temp == null) {
     return '';
   }
    const temp1 = JSON.parse(localStorage.getItem(user + '#'  + this.event.id));
    return temp1.minEstimatedTime;
  }


  onLeaveQueue(id) {
    this.queueService.leaveQueue(id).subscribe((data) => {
        const user = this.getCurrentUser();
        localStorage.removeItem(user + '#' + this.event.id);
        this.snackbar.open('Leave the event', '', {
          duration: 2000,
          panelClass: ['leave'],
        });   });
  }

  getMyNumberFromLocal() {
    const user = this.getCurrentUser();
    const temp = localStorage.getItem(user + '#' + this.event.id);
    if (temp == null) {
     return '';
   }
    const temp1 = JSON.parse(localStorage.getItem(user + '#'  + this.event.id));
    return temp1.queueNumber;
  }


  getQueueIdFromLocal() {
    const user = this.getCurrentUser();
    const a = localStorage.getItem(user + '#' + this.event.id);
    if ( a == null) {
     return '';
   }
    const abc = JSON.parse(localStorage.getItem(user + '#' + this.event.id));
    return abc.queueId;
  }
}
