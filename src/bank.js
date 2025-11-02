class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  addAccount(account) {
    // accounts.push(account);
    this.accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    for (let account of this.accounts) {
      // total += account.balance;
      total += account.getBalance();
    }
    return total;
  }

  findAccount(accountNumber) {
    // return accounts.find((account) => account.accountNumber = accountNumber);
    return this.accounts.find((account) => account.accountNumber = accountNumber);
  }
}

class BankAccount {
  #balance = 0;
  static #totalAccounts = 0;
  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalAccounts++;
  }

  deposit(amount) {
    // this.balance += amount;
    this.#balance += amount;
    // console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
  }

  withdraw(amount) {
    // this.balance -= amount;
    this.#balance -= amount;
    // console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);

  }

  getBalance() {
    // return balance;
    return this.#balance;
  }

  static getTotalAccounts() {
    return BankAccount.#totalAccounts;
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

const account3 = new BankAccount("003", "Charlie");
console.log("Total accounts:", BankAccount.getTotalAccounts()); // Should be 3