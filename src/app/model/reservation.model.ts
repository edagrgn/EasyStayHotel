export class Reservation {
    constructor(
        public id?: number,
        public checkInDate?: number,
        public checkOutDate?: number,
        public totalPrice?: number,
    ){}
}