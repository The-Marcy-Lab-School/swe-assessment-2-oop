class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account) {
    accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    for (let account of this.accounts) {
      total += account.balance;
    }
    return total;
  }

  findAccount(accountNumber) {
    return accounts.find((account) => account.accountNumber = accountNumber);
  }
}

class BankAccount {
  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    balance = 0;
    totalAccounts++;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${balance}`);
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);

  }

  getBalance() {
    return balance;
  }
}

// Test code - this should work after you fix the bugs
const myBank = new Bank("First National");
const account1 = new BankAccount("001", "Alice");
const account2 = new BankAccount("002", "Bob");

myBank.addAccount(account1);
myBank.addAccount(account2);

account1.deposit(100);
account2.deposit(250);

console.log("Total bank balance:", myBank.getTotalBalance()); // Should be 350
console.log("Found account:", myBank.findAccount("001").ownerName); // Should be "Alice"