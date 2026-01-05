import { User } from "./models/User"
import { TransferService } from "./services/transfer_service"


const transfer = new TransferService()

// Sujan's Bank Account
const sujan = new User('@sujan123', 'Sujan Thapa', "sujanthapast0@gmail.com")
// Mohan's Back Account
const mohan = new User('@mohan324', 'Mohan Thakur', 'mohan90"gmail.com')



// Added 5000Rs To Sujan's Bank Account Wallet
sujan.wallet.credit(5000)

// Debit 500Rs From Sujan's Bank Account Wallet
sujan.wallet.debit(500)


// Transfer 1000Rs Money from Sujan's Wallet To Mohan's Wallet
transfer.sendMoney(sujan.wallet, mohan.wallet, 1000)

// Check The mohan's Wallet Which Was 0Rs Before Transfer
const mohanBalance = mohan.wallet.getBalance()
console.log(`mohan's Balance ${mohanBalance}\n\n`) // Now Balance is 1000Rs Sent By @sujan123


// Check Mohan's Transition History  
const mohan324_Tnx_History = mohan.wallet.getTransitions()
console.log('Mohan Thakur Transition History: \n',mohan324_Tnx_History)

// Check Sujan's Transition History 
const sujan123_Tnx_History = sujan.wallet.getTransitions()
console.log('\n\n Sujan Thapa Transition History: \n',sujan123_Tnx_History)

