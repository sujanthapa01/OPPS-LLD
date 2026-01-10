import { IRestaurant } from '../types/restaurant.interface'
import { TManager } from '../types/manager.type'
import { TMenu, TMenuItem, TSize, TVariant } from '../types/menu.type'
import { IBank } from '../types/bank.interface'

export class Restaurant implements IRestaurant {


    constructor(
        public restaurant_name: string,
        public owner: string,
        public restaurant_bio: string,
        public still_serving: boolean,
        public menu: TMenu,
        public manager: TManager,
        private bank: IBank

    ) { }

    static open(params: {
        restaurant_name: string,
        owner: string,
        restaurant_bio: string,
        still_serving: boolean,
        menu: TMenu,
        manager: TManager,
        bank: IBank
    }): Restaurant {
        return new Restaurant(
            params.restaurant_name,
            params.owner,
            params.restaurant_bio,
            params.still_serving,
            params.menu,
            params.manager,
            params.bank
        )
    }

    Menu(): void {
        console.log(`\n📋 MENU - ${this.restaurant_name}\n`);

        this.menu.menu.forEach((item: TMenuItem, index: number) => {
            console.log(`
${index + 1}. ${item.title}
   Description: ${item.description}
   Base Price: ₹${item.price}
   Sizes: ${item.size?.map(s => s.size).join(", ") ?? "Standard"}
   Variants: ${item.variant?.map(v => v.title).join(", ") ?? "None"}
`);
        });
    }


    PlaceOrder(iteam: TMenuItem, selectedSize: TSize["size"], variant?: TVariant[]): number {

        const menuItem = this.menu.menu.find(m => m.title === iteam.title)
        if (!menuItem) {
            throw new Error(`Iteam ${iteam} is not available!`)
        }

        let totalPrice: number = menuItem.price;


        if (selectedSize && menuItem.size) {

            const sizeObj = menuItem.size.find(s => s.size === selectedSize)
            if (!sizeObj) {
                throw new Error(`Invalid size selected`)
            }

            if (sizeObj.priceMutiplier === undefined) {
                throw new Error(`price is undefined for size ${sizeObj.size}`)
            }
            totalPrice += sizeObj.priceMutiplier

        }


        if (variant && menuItem.variant) {
            variant.forEach(v => {
                const variantObj = menuItem.variant?.find(mv => mv.title === v.title)
                if (!variantObj) {
                    throw new Error(`Invalid variant: ${v.title}`);
                }


                if (variantObj?.extraPrice === undefined) {
                    throw new Error(`price is undefined for size ${variantObj?.title}`)
                }

                totalPrice += variantObj.extraPrice
            })
        }

        this.bank.credit(totalPrice)

        return totalPrice
    }



}