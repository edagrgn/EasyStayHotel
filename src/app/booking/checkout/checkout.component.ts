import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit{

  orderSent:boolean=false;
  submitted : boolean =false;
  constructor(public order: Order,  private orderRepository:OrderRepository){}

  ngOnInit() {
    
  }

  submitOrder(form: NgForm){
    this.submitted =true;
    if(form.valid){
      this.orderRepository.saveOrder(this.order)
      .subscribe(order => {
        this.order.clearOrder();
        this.orderSent=true;
        this.submitted=false;
      })
    }
  }
}
