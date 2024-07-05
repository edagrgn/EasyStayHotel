import { Cart } from "./cart.model";

export class Order{
   
        public id?: number;
        public name?: string;
        public address?: string;
        public email?: string;

        

        
    
    public isSent : boolean =false;
    constructor(public cart:Cart){
        
    }
}