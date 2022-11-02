import Account from "./account.js";
import Bank from "./bank.js";
import Deposit from "./deposit.js";
import Withdrawal from "./withdrawal.js";

const myBank = new Bank();
const myNewAccount = new Account(`Account1`);
myBank.addAccount(myNewAccount);

console.log('------Account Info------')
console.log(`My bank have ${myBank.getAccounts().length} account.`);
console.log(`The balance of my ${myNewAccount.getID()} is ${myNewAccount.getBalabce()}.`);

console.log('-------Do Deposit-------')
myNewAccount.doDeposit(new Deposit(3000));
myNewAccount.doDeposit(new Deposit(2000));
for (let i = 0; i < myNewAccount.getTransaction().length; i++) {
    console.log(myNewAccount.getTransaction()[i])
}

console.log('------Do Withdrawal------')
myNewAccount.doWithdrawal(new Withdrawal(1000));
myNewAccount.doWithdrawal(new Withdrawal(500));
for (let i = 0; i < myNewAccount.getTransaction().length; i++) {
    console.log(myNewAccount.getTransaction()[i])
}

