import { TSize } from "./menu.type"; 

export type TOrderItems = {
    item_no: number;
    title: string;
    description?: string;
    size?: TSize["size"];
    variants?: string[];
    price: number;
}

export type TOrder = {
    order_no: number;
    ordered_items: TOrderItems[]; 
    restaurant: string;
    time: Date;
}


export interface ICustomer {
    name: string
    age: string
    address: string
    pincode: number
    email:string
    orderHistory: TOrder[]

    PlaceOrder(): void
    CancelOrder(): void
    OrderHistory(): void
    About(): string

}