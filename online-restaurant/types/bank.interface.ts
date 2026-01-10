export interface IBank {
    
    bank_name: "SBI" | "PNB" | "HDFC"
    balance: number
    credit(amount: number) :  void
    debit(amount:number) : void
} 