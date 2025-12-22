class Account {
    name: string
    accountNumber: number

    constructor (name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Você depositou');
    }
    withDraw = () => {
        console.log(`${this.name} Você sacou`);
    }
}

const newAccount: Account = new Account('Daniel', 121);
console.log(newAccount);

const newAccount2: Account = new Account('Polliana', 122)
newAccount2.deposit()
newAccount2.withDraw()
