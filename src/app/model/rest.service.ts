import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room.model';
import { Reservation } from './reservation.model';

@Injectable()
export class RestService {

  baseUrl : string = "http://localhost:4500/";
  constructor(private http: HttpClient) { }


  getRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.baseUrl+'rooms');
  }

  getReservations() : Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.baseUrl+'reservations');
  }
}
//getRooms().subcribe()