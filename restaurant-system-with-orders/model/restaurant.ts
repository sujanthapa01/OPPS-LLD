import { IRestaurant } from '../types/restaurant.interface'
import { TManager } from '../types/manager.type'
import { TMenu, TMenuIteam, TSize,TVarient } from '../types/menu.type'
import { IBank } from '../types/bank.interface'

export class Restraunt implements IRestaurant {


    constructor(
        public restraunt_name: string,
        public owner: string,
        public restraunt_bio: string,
        public available_seats: number,
        public still_serving: boolean,
        public menu: TMenu,
        public timing: string,
        public manager: TManager,
        private bank: IBank

    ) {}

    Menu(): void {

        this.menu.menu?.forEach((iteam: TMenuIteam, i:number) => {
            console.log(`iteam ${i}`)
            console.log(`name: ${iteam.tittle} - about: ${iteam.discription} - price: ${iteam.price}\n ${iteam.varients ?? `${iteam.varients} : "`} - ${iteam.sizes ?? `${iteam.sizes} : ""`} \n\n `)
        })
    }

    PlaceOrder(iteam:TMenuIteam, size: TSize["size"],varient?: TVarient[]): number {
        return 90
    }

    

}