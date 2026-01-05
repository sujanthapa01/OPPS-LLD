import { IUser } from '../../types/offline_wallet_types/user.interface'
import { Wallet } from "./wallet"

export class User implements IUser {

    public readonly id: string;
    public name: string;
    public email: string;
    public wallet


    constructor(id: string, name: string, email: string) {
        this.id = id,
        this.name = name,
        this.email = email
        this.wallet = new Wallet(this.id)
    }


}

