import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Occasion } from '../occasion';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {  }

  events:any;

  getEvent(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(`http://localhost:8000/api/events/${id}`, {headers:headers});
  }

  getUserEvents(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get(`http://localhost:8000/api/events`, {headers:headers});
  }

  storeEvent(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post(`http://localhost:8000/api/events`,data, { headers:headers});
  }

  updateEvent(id:any, data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put(`http://localhost:8000/api/events/${id}`,data, { headers:headers});
  }

  deleteEvent(id:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete(`http://localhost:8000/api/events/${id}`, { headers:headers});
  }
}
