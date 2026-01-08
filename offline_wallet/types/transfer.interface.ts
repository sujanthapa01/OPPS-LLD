import { IWallet } from "./wallet.interface"

export interface ITransferService {
    sendMoney(fromWallet: IWallet, toWallet: IWallet, amount: number): void
}