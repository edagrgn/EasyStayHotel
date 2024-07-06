import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookingComponent } from "./booking.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";
import { RoomListComponent } from './room-list/room-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
@NgModule ({

    imports: [ModelModule,BrowserModule,FormsModule,RouterModule],
    providers: [ModelModule],
    declarations: [BookingComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, RoomListComponent, CategoryListComponent],
    exports: [BookingComponent, CartDetailComponent, CheckoutComponent]
})

export class BookingModule{}
