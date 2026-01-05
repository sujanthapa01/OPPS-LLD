import { IUser } from '../types/offline_wallet_types/Interface/user_Interface'

 class User implements IUser {

    public readonly id: number;
    public name: string;
    public email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id,
            this.name = name,
            this.email = email
    }


}

