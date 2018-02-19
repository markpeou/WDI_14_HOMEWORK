console.log('atm');


class BankAccount {
  constructor(type) {
    this.type = type;
    this.savings = 0
    this.transaction = []
    }

  balance() {
    return this.savings;
    }

  widthdraw(money) {
    this.transaction.push(money)
    return this.savings -= money;
  }
  deposit(money) {
    this.transaction.push(money)
    return this.savings += money;
    }

  history() {
    console.log(this.transaction)
   }
  }



  const account = new BankAccount(0);

  console.log(account);
