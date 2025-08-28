class BankAccount {
    constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
    }
    check_balance(id) {
        let balanceElement = document.getElementById(id);
        balanceElement.textContent = "£"+this.balance;
        console.log('The current balance for '+this.accountHolder+' is £'+this.balance);
    }
    deposit(x, id) {
        this.balance += x;
        this.check_balance(id);
    }
    withdraw(x, id) {
        if (x>this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= x;
            this.check_balance(id);
        }
    }
}

export default BankAccount;