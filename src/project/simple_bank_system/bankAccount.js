class BankAccount {
    constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
    }
    check_balance() {
        let balanceElement = document.getElementById("balanceValue");
        balanceElement.textContent = "£"+toString(this.balance);
        console.log("The current balance for ${this.accountHolder} is £"+toString(this.balance));
    }
    deposit(x) {
        this.balance += x;
        this.check_balance();
    }
    withdraw(x) {
        if (x>this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= x;
            this.check_balance();
        }
    }
}

export default BankAccount;