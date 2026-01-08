import { ICustomer, TOrder, TOrderIteams } from "../types/customer.interface";
import { Restraunt } from "./restaurant";
import { TMenuIteam, TSize, TVarient } from "../types/menu.type";

class Customer implements ICustomer {
  order_no = 1;
  orderHistory: TOrder[] = [];

  constructor(
    public name: string,
    public age: string,
    public address: string,
    public pincode: number
  ) {}

  Order(
    restaurant: Restraunt,
    iteam: TMenuIteam,
    selectedSize?: TSize,
    variant?: TVarient[]
  ): void {

    
    const total = restaurant.PlaceOrder(iteam, selectedSize?.size, variant?.map(v => v));

    const orderItem: TOrderIteams = {
      iteam_no: 1,
      tittle: iteam.tittle,
      discription: iteam.discription,
      size: selectedSize?.size,
      varient: variant?.map(v => v.tittle),
      price: total
    };

    const order: TOrder = {
      Od_no: this.order_no++,
      restaurant: restaurant.restraunt_name,
      orderd_iteams: [orderItem],
      time: new Date()
    };

    this.orderHistory.push(order);

    console.log(`Order placed: ${iteam.tittle} - ₹${total}`);
  }

  CancelOrder(): void {}
  OrderHistory(): void {}
  About(): string {
    return `${this.name}, ${this.age}`;
  }
}
