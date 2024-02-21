const BankAccount = class {
    customerName;
    accountNumber = Date.now();
    #balance = 0; //private properties
  
    constructor(customerName, balance = 0) {
      this.customerName = customerName;
      this.#balance = balance;
    }
    
    deposit(amount) {
      this.#balance += amount;
      this.#depositMessage();
    }
  
    withdraw(amount) {
      this.#balance -= amount;
    }

    //private functions
    #depositMessage(){
        console.log("Deposit Successful");
    }    

    setBalance(amount){
        if(isNaN(amount)) throw new Error("Amount is not a valid number");
        this.#balance=amount;
    }
    getBalance(){
        return this.#balance;
    }
  };

//private properties of parent class can't be accessed from child class
class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takePersonalLoan(amount){
        console.log("Loan approved of Rs"+amount);
    }
} 

const rajCurrentAcc= new CurrentAccount("Raj Sharma",5000);
console.log(rajCurrentAcc.getBalance());

rajCurrentAcc.deposit(5000);
console.log(rajCurrentAcc.getBalance());