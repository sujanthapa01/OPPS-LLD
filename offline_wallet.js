// user = name, id, acount_no, email
// wallet = wallet_id, accountno, balance, credit = [{from:name, time, amount,accountno:sender}], debit = [reciver:name, time, amount, accountno:reciver], all_tansitions= credit + debit
// transitions = []




class user {
    name
    id
    account_no
    email

    constructor(name, email) {
        this.name = name,
        this.email = email
        this.account_no = Math.floor(Math.random()* 1000000)
    }
}

const n = Math.random()
console.log(n)