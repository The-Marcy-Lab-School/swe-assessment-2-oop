class BankAccount {
  #balance = 0;
  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);

  }

  getBalance() {
    return balance;
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];
  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    accounts.push(account);
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      total += account.balance;
    });
    return total;
  }

  findAccount(accountNumber) {
    return accounts.find((account) => account.accountNumber = accountNumber);
  }
}
