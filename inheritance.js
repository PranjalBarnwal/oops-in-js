// // DRY - DO NOT REPEAT YOURSELF>>

//Prototype Syntax(Old way)

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = Number(balance);
// }
// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };
// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// const rajAccount = new BankAccount("Raj K", 1000);

// console.log(rajAccount);

// console.log(BankAccount.prototype);


// function SavingAccount(customerName,balance=0){
//     BankAccount.call(this,customerName,balance); //This process is known as constructor chaining or calling the parent constructor.
//     this.transactionLimit=10000;
// }


// //Prototype chaining is a fundamental concept in JavaScript's object-oriented programming model. It allows objects to inherit properties and methods from their prototypes, which can be linked together in a chain.
// SavingAccount.prototype=Object.create(BankAccount.prototype);  

// SavingAccount.prototype.takePersonalLoan=function(amount){
//     console.log("Loan approved of Rs:"+amount);
// }

// const rajSavingAcc= new SavingAccount("Raj Kumar Sharma",5000);

// rajSavingAcc.deposit(4000);
// console.log(rajSavingAcc);

// ---------------------------------------


//Class Syntax (Modern way)

const BankAccount = class {
    customerName;
    accountNumber = Date.now();
    balance = 0;
  
    constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      this.balance -= amount;
    }
  };


class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takePersonalLoan(amount){
        console.log("Loan approved of Rs"+amount);
    }
}
  
const rajCurrentAcc= new CurrentAccount("Raj Roy",5000);
console.log(rajCurrentAcc);