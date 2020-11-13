import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../../core/model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
private allEvents: Event[];
//   constructor(private http: HttpClient) { this.fetchEvents(); }
// fetchEvents(){{
//   this.http.get('./assets/event.json').subscribe(data => this.allEvents = data['events']);
// }}
//   getAllEvents(): Event[]{
//     return Observable.create(observer =>
//       observer.next(this.allEvents);
//       observer.complete();
//       );
//   }

   constructor( private http: HttpClient){}
   getAllEvents(): Observable<any> {
    return this.http.get('./assets/event.json'); 
   }
  leaveQueue(eventId: any): Observable<any> {
    return this.http.get('./assets/event.json'); //change link when connected to backend
  }
  joinQueue(eventId: any): Observable<any> {
    return this.http.get('./assets/event.json'); //change link when connected to backend
  }
}
