import { Injectable } from "@angular/core";
import { Room } from "./room.model";

@Injectable()
export class Cart{

    public items: CartItem[] = [];
    public itemCount :number=0;
    public total : number =0;

    addItem(room: Room, quantity : number = 1){
        let item = this.items.find(i=>i.room.id == room.id);
        if(item!=undefined){
            item.quantity+=quantity;
        }
        else{
            this.items .push(new CartItem(room,quantity));
        }
        this.calculate();
    }

    updateQuantity (room : Room, quantity: number){
        let item = this.items.find(i=>i.room.id == room.id);
        if(item!=undefined){
            item.quantity=quantity;
        }
        this.calculate();

    }
    calculate(){
        this.itemCount =0;
        this.total =0;

        this.items.forEach(item => {
            this.itemCount+=item.quantity;
            this.total +=(item.quantity * (item.room?.price ?? 0));
        });
    }

    removeItem(id:number|undefined){

        let index = this.items.findIndex(i=>i.room.id ==id);
        this.items.splice(index,1);
        this.calculate();
    }
    clear(){
        this.items =[];
        this.itemCount =0;
        this.total =0;
    }
}
class CartItem{
 constructor(
    public room: Room,
    public quantity :number){ }
}