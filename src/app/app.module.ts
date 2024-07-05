import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';
import { RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CartDetailComponent } from './booking/cart-detail/cart-detail.component';
import { CheckoutComponent } from './booking/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingModule,
    RouterModule.forRoot([
      {path: 'booking', component :BookingComponent},
      {path: 'cart', component :CartDetailComponent},
      {path: 'checkout', component :CheckoutComponent},
      {path: '**', redirectTo :"/booking"},


    ])
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
