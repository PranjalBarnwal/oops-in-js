
function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = Number(balance);
  
  
  //   this.deposit = (amount) => {
//     this.balance += Number(amount);
//   };
//   this.withdraw = (amount) => {
//     this.balance -= Number(amount);
//   }; 
}
BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
};
BankAccount.prototype.withdraw=function(amount){
    this.balance-=amount;
};

// const johnAccount=new BankAccount("John Doe");
const rajAccount=new BankAccount("Raj K",1000);

rajAccount.deposit(3000);
rajAccount.withdraw(1000);
console.log(rajAccount);

console.log(BankAccount.prototype);