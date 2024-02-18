// hoisting doesn't work with classes
// const rajAcc=new BankAccount("Raj K",4000); //ReferenceError: Cannot access 'BankAccount' before initialization

//we can make class by class BankAccount{} or by const BankAccount= class{}

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
const rajAcc = new BankAccount("Raj K", 4000);
rajAcc.deposit(5000);
console.log(rajAcc);
