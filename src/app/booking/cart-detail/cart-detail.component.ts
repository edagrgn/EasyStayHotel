import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';


@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.scss'
})

export class CartDetailComponent implements OnInit{


  constructor(public cart: Cart){}

  
  

  ngOnInit() {
    
  }

}
