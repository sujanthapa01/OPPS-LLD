import {TMenu} from './menu.type'
import {TManager} from './manager.type'
import {IBank} from './bank.interface'



export interface IRestaurant {
    restaurant_name: string
    owner: string
    restaurantBio : string
    available_seats: number
    still_serving: boolean
    menu: TMenu
    timing : string
    manager: TManager
    bank: IBank
      
    Menu() : void
    AvailableSeats(): number
    RestaurantBio() : string
    PlaceOrder(): void



}