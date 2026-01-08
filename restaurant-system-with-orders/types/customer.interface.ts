import { TSize } from "./menu.type"; 

export type TOrderIteams = {
    iteam_no: number;
    tittle: string;
    discription?: string;
    size?: TSize["size"];
    varient?: string[];
    price: number;
}

export type TOrder = {
    Od_no: number;
    orderd_iteams: TOrderIteams[]; 
    restaurant: string;
    time: Date;
}


export interface ICustomer {
    name: string
    age: string
    address: string
    pincode: number
    orderHistory: TOrder[]

    PlaceOrder(): void
    CancelOrder(): void
    OrderHistory(): void
    About(): string

}