
import {Transitions} from "./transitions.type"

export interface IWallet {
    credit(amount: number): void
    debit(amout: number): void
    getBalance(): void
    getUserId(): void


    getTransitions(): Transitions[]



}