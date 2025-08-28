import BankAccount from "./bankAccount.js";
var myAccount = new BankAccount("John Smith", 89433139, 30);
myAccount.check_balance();
myAccount.deposit(20);
myAccount.withdraw(60);
myAccount.withdraw(30);