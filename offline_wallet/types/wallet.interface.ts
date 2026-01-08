
import { Transitions } from "./transitions.type"


export interface IWallet {
    credit(amount: number): void
    debit(amout: number): void
    getBalance(): number
    getUserId(): string
    addTransition(txn: Transitions): void
    getTransitions(): Transitions[]



}