import BankAccount from "./bankAccount.js";
var myAccount = new BankAccount("John Smith", 89433139, 30);
document.getElementById("accountHolder").textContent = myAccount.accountHolder;
document.getElementById("accountNumber").textContent = myAccount.accountNumber;
console.log(myAccount);
myAccount.check_balance();
myAccount.deposit(20);
myAccount.withdraw(60);
myAccount.withdraw(30);

//Button Click Handlers

//deposit
document.getElementById("buttonDeposit0").onclick = function () {myAccount.deposit(1)};
document.getElementById("buttonDeposit1").onclick = function () {myAccount.deposit(5)};
document.getElementById("buttonDeposit2").onclick = function () {myAccount.deposit(10)};
document.getElementById("buttonDeposit3").onclick = function () {myAccount.deposit(20)};
document.getElementById("buttonDeposit4").onclick = function () {myAccount.deposit(50)};
document.getElementById("buttonDeposit5").onclick = function () {myAccount.deposit(100)};

//withdraw
document.getElementById("buttonWithdraw0").onclick = function () {myAccount.withdraw(1)};
document.getElementById("buttonWithdraw1").onclick = function () {myAccount.withdraw(5)};
document.getElementById("buttonWithdraw2").onclick = function () {myAccount.withdraw(10)};
document.getElementById("buttonWithdraw3").onclick = function () {myAccount.withdraw(20)};
document.getElementById("buttonWithdraw4").onclick = function () {myAccount.withdraw(50)};
document.getElementById("buttonWithdraw5").onclick = function () {myAccount.withdraw(100)};
