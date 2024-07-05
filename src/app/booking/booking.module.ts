import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookingComponent } from "./booking.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
@NgModule ({

    imports: [ModelModule,BrowserModule,FormsModule],
    providers: [ModelModule],
    declarations: [BookingComponent, NavbarComponent, CartSummaryComponent],
    exports: [BookingComponent]
})

export class BookingModule{}
