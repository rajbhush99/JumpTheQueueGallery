import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FilterVisitor, LoginVisitor, Pageable, Visitor } from '../model/shared';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrlRestServices;
  private visitorId =0;
  constructor(private route: Router, private http: HttpClient) { }
  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.route.navigate(['login']);
  }
  setVisitorId(visitorId: number): void {
    this.visitorId = visitorId;
  }
  getVisitorId(): number {
    return this.visitorId;
  }
   registerVisitor(visitor: Visitor): Observable<any>{
     return this.http.post<Visitor>(`${this.baseUrl}` + '/visitormanagement/v1/visitor', visitor);
   }


   loginVisitor(username: string): Observable<Visitor>{
    const filters: FilterVisitor = new FilterVisitor();
    const pageable: Pageable = new Pageable();
    pageable.sort = [];
    pageable.pageNumber = 0;
    pageable.pageSize = 1000;
    filters.username = username;
    filters.pageable = pageable;
    return this.http.post<Visitor>(`${this.baseUrl}` + '/visitormanagement/v1/visitor/search', filters)
    .pipe(

         // tslint:disable-next-line: no-string-literal
         map(visitors => visitors['content'][0]),
     );
   }
}
