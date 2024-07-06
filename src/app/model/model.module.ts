import { NgModule } from "@angular/core";
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestService } from "./rest.service";
import { RoomRepository } from "./room.repository";
import { ReservationRepository } from "./reservation.repository";
import { CategoryRepository } from "./category.repository";
import { Cart } from "./cart.model";
import { OrderRepository } from "./order.repository";
import { Order } from "./order.model";




@NgModule ({

    imports: [],
    providers: [
        RestService,
        RoomRepository,
        ReservationRepository,
        CategoryRepository,
        Cart,
        Order,
        OrderRepository,
        provideHttpClient(
          withInterceptorsFromDi()
        ),
       
    ]
})

export class ModelModule{}