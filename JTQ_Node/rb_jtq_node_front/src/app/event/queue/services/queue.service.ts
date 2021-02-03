import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../../core/model/event';
import { Observable } from 'rxjs';
import { FilterEvent, Pageable, QueueDetail } from '../../../core/model/shared';
import { environment } from 'src/environments/environment';
import { delay, map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
private allEvents: Event[];
private baseUrl = environment.baseUrlRestServices;
   constructor( private http: HttpClient, private authService: AuthService){}

   // this method will Fetch all the events detail
   async getAllEvents(){
    const r = await this.http.get<any>(`${this.baseUrl}` + '/event/allEvent').toPromise()
    return r;
   }

   async leaveQueue(queuedetailId: number) {
     console.log(queuedetailId)
   const leave=await this.http.delete<QueueDetail>(`${this.baseUrl}` + '/queue/leavequeue/' + queuedetailId).toPromise();
    console.log(leave)
   return leave;
  }

     async joinQueue(eventId: number , visitorId: number ) {
     const queuedetail: QueueDetail = new QueueDetail();
     queuedetail.eventId = eventId;
     queuedetail.visitorId = visitorId;
     const result = await this.http.post<QueueDetail>(`${this.baseUrl}` + '/queue/joinqueue/', queuedetail).toPromise()
     return result;
  }
}
