import { Injectable, OnInit } from "@angular/core";
import { Reservation } from "./reservation.model";
import { RestService } from "./rest.service";

@Injectable()

export class ReservationRepository implements OnInit{
    private reservations: Reservation[] = [];

    constructor(private restService: RestService){ 
        this.restService
        .getReservations()
        .subscribe(reservations => this.reservations =reservations);
    }

    ngOnInit() {


    }


    getReservation(id: number):Reservation|undefined {
        return this.reservations.find(i => i.id === id);
    }
    

    getReservations(): Reservation[]{
        return this.reservations;
    }
}