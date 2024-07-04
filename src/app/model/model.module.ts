import { NgModule } from "@angular/core";
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestService } from "./rest.service";
import { RoomRepository } from "./room.repository";
import { ReservationRepository } from "./reservation.repository";



@NgModule ({

    imports: [],
    providers: [
        RestService,
        RoomRepository,
        ReservationRepository,
        provideHttpClient(
          withInterceptorsFromDi()
        ),
       
    ]
})

export class ModelModule{}