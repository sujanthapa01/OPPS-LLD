import { IBank } from "../types/bank.interface"

export class Bank implements IBank {

    balance = 0
    constructor(public bank_name: "SBI" | "PNB" | "HDFC") { }

    debit(amount: number): void {

        if (this.balance < amount) {
            console.log("insufficent bank balance")
        }
        this.balance -= amount
    }

    credit(amount: number): void {
        this.balance += amount
    }
}