//to run link this file with html in script src

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = Number(balance);
  this.deposit = (amount) => {
    this.balance += Number(amount);
  };
  this.withdraw = (amount) => {
    this.balance -= Number(amount);
  };
}

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#accountHolderName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const depositAmt = document.querySelector("#depositAmt");
const depositAcc = document.querySelector("#accNumberDeposit");

const accountHoldersList = document.querySelector("#accHolderList");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, balance.value);
  accounts.push(account);
  console.log(accounts);
  updateAccountHoldersList();
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accNumberDeposit.value
  );
  account.deposit(+depositAmt.value);
  console.log(accounts);
  updateAccountHoldersList();
});

withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accNumberWithdraw.value
  );
  account.withdraw(+withdrawAmt.value);
  console.log(accounts);
  updateAccountHoldersList();
});


function updateAccountHoldersList() {
    accountHoldersList.innerHTML = ""; 

    accounts.forEach((account) => {
        const listItem = document.createElement("p");
        listItem.textContent = `Name: ${account.customerName} - Account Number: ${account.accountNumber}, Balance: ${account.balance}`;
        accountHoldersList.appendChild(listItem);
    });
}