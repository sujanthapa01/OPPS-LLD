import {TMenu} from './menu.type'
import {TManager} from './manager.type'
import {IBank} from './bank.interface'
import {TMenuItem,TSize,TVariant} from "./menu.type"



export interface IRestaurant {
    restaurant_name: string
    owner: string
    restaurantBio : string
    still_serving: boolean
    menu: TMenu
    manager: TManager
    bank: IBank
      
    Menu() : void
    PlaceOrder(iteam: TMenuItem, selectedSize: TSize["size"], variant?: TVariant[]): number



}