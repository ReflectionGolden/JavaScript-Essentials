import BankAccount from "./bankAccount.js";
var myAccount = new BankAccount("John Smith", 89433139, 30);
var otherAccount = new BankAccount("Jane Doe", 17099983, 610);
document.getElementById("accountHolder").textContent = myAccount.accountHolder;
document.getElementById("accountNumber").textContent = myAccount.accountNumber;
document.getElementById("accountHolder2").textContent = otherAccount.accountHolder;
document.getElementById("accountNumber2").textContent = otherAccount.accountNumber;
console.log(myAccount);
myAccount.check_balance("balanceValue");
otherAccount.check_balance("balanceValue2");
myAccount.deposit(20, "balanceValue");
myAccount.withdraw(60, "balanceValue");
myAccount.withdraw(30, "balanceValue");

//Button Click Handlers

//deposit - John
document.getElementById("buttonDeposit0").onclick = function () {myAccount.deposit(1, "balanceValue")};
document.getElementById("buttonDeposit1").onclick = function () {myAccount.deposit(5, "balanceValue")};
document.getElementById("buttonDeposit2").onclick = function () {myAccount.deposit(10, "balanceValue")};
document.getElementById("buttonDeposit3").onclick = function () {myAccount.deposit(20, "balanceValue")};
document.getElementById("buttonDeposit4").onclick = function () {myAccount.deposit(50, "balanceValue")};
document.getElementById("buttonDeposit5").onclick = function () {myAccount.deposit(100, "balanceValue")};

//withdraw - John
document.getElementById("buttonWithdraw0").onclick = function () {myAccount.withdraw(1, "balanceValue")};
document.getElementById("buttonWithdraw1").onclick = function () {myAccount.withdraw(5, "balanceValue")};
document.getElementById("buttonWithdraw2").onclick = function () {myAccount.withdraw(10, "balanceValue")};
document.getElementById("buttonWithdraw3").onclick = function () {myAccount.withdraw(20, "balanceValue")};
document.getElementById("buttonWithdraw4").onclick = function () {myAccount.withdraw(50, "balanceValue")};
document.getElementById("buttonWithdraw5").onclick = function () {myAccount.withdraw(100, "balanceValue")};

//deposit - Jane
document.getElementById("buttonDeposit6").onclick  = function () {otherAccount.deposit(1, "balanceValue2")};
document.getElementById("buttonDeposit7").onclick  = function () {otherAccount.deposit(5, "balanceValue2")};
document.getElementById("buttonDeposit8").onclick  = function () {otherAccount.deposit(10, "balanceValue2")};
document.getElementById("buttonDeposit9").onclick  = function () {otherAccount.deposit(20, "balanceValue2")};
document.getElementById("buttonDeposit10").onclick = function () {otherAccount.deposit(50, "balanceValue2")};
document.getElementById("buttonDeposit11").onclick = function () {otherAccount.deposit(100, "balanceValue2")};

//withdraw - Jane
document.getElementById("buttonWithdraw6").onclick  = function () {otherAccount.withdraw(1, "balanceValue2")};
document.getElementById("buttonWithdraw7").onclick  = function () {otherAccount.withdraw(5, "balanceValue2")};
document.getElementById("buttonWithdraw8").onclick  = function () {otherAccount.withdraw(10, "balanceValue2")};
document.getElementById("buttonWithdraw9").onclick  = function () {otherAccount.withdraw(20, "balanceValue2")};
document.getElementById("buttonWithdraw10").onclick = function () {otherAccount.withdraw(50, "balanceValue2")};
document.getElementById("buttonWithdraw11").onclick = function () {otherAccount.withdraw(100, "balanceValue2")};