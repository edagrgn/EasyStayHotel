import { Component } from "@angular/core";
import { ReservationRepository } from "../model/reservation.repository";
import { RoomRepository } from "../model/room.repository";
import { Room } from "../model/room.model";
import { Reservation } from "../model/reservation.model";

@Component({
    selector: 'booking',
    templateUrl:'booking.component.html',
    styles: [`
        .pt-100 {padding-top:100px;}
    `]

})

export class BookingComponent{
    constructor(private roomRepository: RoomRepository,
        private reservationRepository: ReservationRepository
    ){}

    get rooms(): Room[]{
        return this.roomRepository.getRooms();
    }

    get reservation(): Reservation[]{
        return this.reservationRepository.getReservations();
    }
}