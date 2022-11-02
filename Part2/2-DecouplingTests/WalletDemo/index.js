const Balance = require("./Balance");
const SecretBalance = require("./SecretBalance");
const Wallet = require("./Wallet");

// const myWallet = new Wallet(0, [`card`, `credit`]);
// console.log(myWallet)
// console.log(myWallet.getCashBalance());

// Decoupling above
const myWallet = new Wallet(new Balance(100), [`card`, `credit`]);
console.log(myWallet)
console.log(myWallet.getCashBalance());

// The advantages of decoupling
// Make class Wallet() more useble
console.log(`======================`)
const mySecretWallet = new Wallet(new SecretBalance(2000), []);
console.log(mySecretWallet)
console.log(mySecretWallet.getCashBalance());
