import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order{
   
        public id?: number;
        public name?: string;
        public address?: string;
        public email?: string;

        

        
    
    public isSent : boolean =false;
    constructor(public cart:Cart){

    }

    clearOrder(){
        this.id = undefined;
        this.name= this.address=this.email=" ";
        this.isSent=false;
        this.cart.clear();
    }
}