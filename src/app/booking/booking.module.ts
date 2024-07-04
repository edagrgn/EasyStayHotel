import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookingComponent } from "./booking.component";
import { NavbarComponent } from './navbar/navbar.component';
@NgModule ({

    imports: [ModelModule,BrowserModule,FormsModule],
    providers: [ModelModule],
    declarations: [BookingComponent, NavbarComponent],
    exports: [BookingComponent]
})

export class BookingModule{}
