import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../../model/room.model';
import { Router } from '@angular/router';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit{

  @Input() rooms :Room[]=[];

  selectedRoom: Room | null = null;

  constructor(private cart: Cart,
    private router: Router){}

  ngOnInit() {
    
  }

  addRoomToCart(room: Room){
    this.cart.addItem(room);
    this.router.navigateByUrl('/cart');

}

displayDetails(room:Room){
  this.selectedRoom =room;
}

hideDetails(){
  this.selectedRoom= null;
}

}
