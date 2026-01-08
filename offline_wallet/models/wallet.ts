import { IWallet } from "../types/wallet.interface"
import { Transitions } from "../types/transitions.type"

export class Wallet implements IWallet {

    private balance = 0
    private transitions: Transitions[] = []
    public readonly userId

    constructor(userId: string) {
        this.userId = userId
    }


    credit(amount: number): void {

        if(amount <= 0){
            console.log(`amount must be Positive`)
            return
        }
        this.balance += amount
        return 
        
    }

    debit(amount: number): void {
        if(this.balance < amount){
            console.log(`insufficient balance`)
        }

        this.balance -= amount
    }

    getBalance(): number {
        return this.balance
    }

    getUserId(): string {

        return this.userId
        }

     addTransition(txn: Transitions): void {
        this.transitions.push(txn)
        
    }

    getTransitions(): Transitions[] {
        return [...this.transitions]
    }
    


}