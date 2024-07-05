import { Injectable, OnInit } from "@angular/core";
import { Room } from "./room.model";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()

export class RoomRepository implements OnInit{
    private rooms: Room[] = [];

    constructor(private restService: RestService){ 
        this.restService
        .getRooms()
        .subscribe(rooms => this.rooms =rooms);
    }

    ngOnInit() {
       

    }


    getRoom(id: number):Room|undefined {
        return this.rooms.find(i => i.id === id);
    }

    getRooms(categories:Category | null = null): Room[]{
        if(categories)
        return this.rooms.filter(r => r.categories == categories.name);
    else
    return this.rooms;
    }
    

}