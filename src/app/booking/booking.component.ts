import { Component } from "@angular/core";
import { ReservationRepository } from "../model/reservation.repository";
import { RoomRepository } from "../model/room.repository";
import { Room } from "../model/room.model";
import { Reservation } from "../model/reservation.model";
import { CategoryRepository } from "../model/category.repository";
import { Category } from "../model/category.model";
import { Cart } from "../model/cart.model";

@Component({
    selector: 'booking',
    templateUrl:'booking.component.html',
    styles: [`
        .pt-100 {padding-top:100px;}
    `]

})



export class BookingComponent{
    public selectedCategory: Category | null | undefined= null;
   
    public roomsPerPage =2;
    public selectedPage=1;
    public seletedRooms : Room[] =[];

    


    constructor(private roomRepository: RoomRepository,
        private reservationRepository: ReservationRepository,
        private categoryRepository: CategoryRepository,
        private cart: Cart ){}
   

    get rooms(): Room[]{
        let index =(this.selectedPage-1)*this.roomsPerPage;
        this.seletedRooms =this.roomRepository
                         .getRooms(this.selectedCategory)
        return this.seletedRooms
        .slice(index,index + this.roomsPerPage);
    }

    get reservation(): Reservation[]{
        return this.reservationRepository.getReservations();

    }
    get pageNumber():number[]{
      return  Array(Math.ceil(this.roomRepository
        .getRooms(this.selectedCategory).length/this.roomsPerPage))
        .fill(0)
        .map((a, i)=>i+1)

    }

    public changePage(r:number){
        this.selectedPage=r;
    }
 
    get category(): Category[]{
        return this.categoryRepository.getCategories();
    }
    changeCategory(newCategory? : Category ){
        this.selectedCategory= newCategory;
    }

    addRoomToCart(room: Room){
        this.cart.addItem(room);

    }
   
}