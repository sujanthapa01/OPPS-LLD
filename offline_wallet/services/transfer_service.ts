import { ITransferService } from "../../types/offline_wallet_types/transfer.interface"
import { IWallet } from "../../types/offline_wallet_types/wallet.interface"
import { Transitions,TransitionsStatus } from "../../types/offline_wallet_types/transitions.type"
import { Wallet } from "../models/wallet"
import {getCurrentDateTime} from "../functions/getCurrentDateTime"


export class TransferService implements ITransferService {
    sendMoney(fromWallet: IWallet, toWallet: IWallet, amount: number): void {
        try {



            fromWallet.debit(amount)
            toWallet.credit(amount)

            const txn: Transitions = {
                fromUserid : fromWallet.getUserId(),
                toUserId : toWallet.getUserId(),
                amount,
                status : TransitionsStatus.SUCESS,
                createdAt : getCurrentDateTime()
            };

            (fromWallet as Wallet).addTransition(txn);
            (toWallet as Wallet).addTransition(txn);

            console.log(`amount ${amount} is sended Sucessfully \n from: ${fromWallet.getUserId()} to: ${toWallet.getUserId()}`)

        } catch {

             const txn: Transitions = {
                fromUserid : fromWallet.getUserId(),
                toUserId : toWallet.getUserId(),
                amount,
                status : TransitionsStatus.FAILED,
                createdAt : getCurrentDateTime()
            };

            (fromWallet as Wallet).addTransition(txn)

            console.log(`transition failled`)

        }
    }
}