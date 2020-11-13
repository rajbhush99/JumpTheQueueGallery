import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueueService } from './services/queue.service';
import {Event} from '../../core/model/event';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit ,OnChanges{

  constructor(private queueService: QueueService, private route: ActivatedRoute, private snackbar: MatSnackBar ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getEventDetails(); }
   
   @Input() id: any;
  // id: any;
  event: Event = null;
    ngOnInit(): void {
      // this.route.params.subscribe(
      //   params => {
      //     this.id = params['id'];

      //     this.getEventDetails();
      //    }  
      // );
       
      console.log(this.event);
    }
    
    getEventDetails(){
     this.queueService.getAllEvents().subscribe(data=> {
      for (let event of data['events'])
      {
        if(event.id === this.id)
        {
         this.event =  event;
        }
      }
    })
    }
    onJoinQueue(eventId){
      this.queueService.joinQueue(eventId).subscribe(data => {
        this.event.joined = true ; 
        this.snackbar.open('Succefully joined the queue ' + this.event.myNumber, '',{
          duration: 3000,
          panelClass: ['success']
        });
      });
    }
    onLeaveQueue(eventId){
      this.queueService.leaveQueue(eventId).subscribe(data => {
        this.event.joined = false ;
        this.snackbar.open('Leave the event', '', {
          duration: 3000,
          panelClass: ['leave']
        });
      });
    }
  
}
