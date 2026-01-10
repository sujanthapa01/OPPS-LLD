import { ICustomer, TOrder, TOrderItems } from "../types/customer.interface";
import { Restaurant } from "./restaurant";
import { TMenuItem, TSize, TVariant } from "../types/menu.type";

export class Customer implements ICustomer {
  private orderCounter = 1;
  private orderHistory: TOrder[] = [];

  constructor(
    public name: string,
    public age: number,
    public address: string,
    public pincode: number,
    public email: string

  ) { }


  static set(params: {
    name: string,
    age: number,
    address: string,
    pincode: number,
    email: string

  }): Customer {
    return new Customer(
      params.name,
      params.age,
      params.address,
      params.pincode,
      params.email
    )
  }


  placeOrder(
    restaurant: Restaurant,
    item: TMenuItem,
    size?: TSize,
    variants?: TVariant[]
  ): void {
    const totalPrice = restaurant.PlaceOrder(
      item,
      size?.size,
      variants
    );

    const orderItem: TOrderItems = {
      item_no: 1,
      title: item.title,
      description: item.description,
      size: size?.size,
      variants: variants?.map(v => v.title) ?? [],
      price: totalPrice,
    };

    const order: TOrder = {
      order_no: this.orderCounter++,
      restaurant: restaurant.restaurant_name,
      ordered_items: [orderItem],
      time: new Date(),
    };

    this.orderHistory.push(order);
    console.log(`✅ Order placed: ${item.title} - ₹${totalPrice}`);
  }

  cancelOrder(orderNo: number): void {
    this.orderHistory = this.orderHistory.filter(
      order => order.order_no !== orderNo
    );
    console.log(`❌ Order ${orderNo} cancelled`);
  }

  showOrderHistory(): void {
    if (this.orderHistory.length === 0) {
      console.log("No orders found.");
      return;
    }

    this.orderHistory.forEach(order => {
      console.log(`
Order No: ${order.order_no}
Restaurant: ${order.restaurant}
Time: ${order.time.toLocaleString()}
Items:
${order.ordered_items.map(i =>
        `- ${i.title} (${i.size ?? "Regular"}) ₹${i.price}`
      ).join("\n")}
      `);
    });
  }

  about(): string {
    return `${this.name}, Age: ${this.age}`;
  }
}
