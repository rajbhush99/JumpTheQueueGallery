import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../../../core/model/event';
import { Observable } from 'rxjs';
import { FilterEvent, Pageable, QueueDetail } from '../../../core/model/shared';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
private allEvents: Event[];
private baseUrl = environment.baseUrlRestServices;
   constructor( private http: HttpClient, private authService: AuthService){}

   // this method will Fetch all the events detail
   getAllEvents(): Observable<any> {
    const filters: FilterEvent = new FilterEvent();
    const pageable: Pageable = new Pageable();
    pageable.sort = [];
    pageable.pageNumber = 0;
    pageable.pageSize = 1000;
    filters.pageable = pageable;
    return this.http.post<Event>(`${this.baseUrl}` + '/eventmanagement/v1/event/search', filters)
    .pipe(

         // tslint:disable-next-line: no-string-literal
         map(events => events['content']),
     );
   }

  leaveQueue(queuedetailId: number): Observable<any> {
   return this.http.delete<QueueDetail>(`${this.baseUrl}` + '/queuedetailmanagement/v1/queuedetail/leavequeue/' + queuedetailId + '/');
  }
  joinQueue(eventId: number , visitorId: number ): Observable<any> {
     const queuedetail: QueueDetail = new QueueDetail();
     queuedetail.eventId = eventId;
     queuedetail.visitorId = visitorId;
     return this.http.post<QueueDetail>(`${this.baseUrl}` + '/queuedetailmanagement/v1/queuedetail/joinqueue/', queuedetail);
  }
}
