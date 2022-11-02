// const Balance = require("./Balance");

class Wallet {
    // Wallet responsibility just: manage sth
    #cashBalance;
    #cards;

    constructor(initialBalance, cards = []){
        // this.#cashBalance = new Balance(initialBalance); this is tightly coupling
        // make this class more useble
        this.#cashBalance = initialBalance;
        this.#cards = cards;
    }

    getCashBalance(){
        // need to call getBalance
        // it is still coupled, but loosely
        return this.#cashBalance.getBalance();
    }
}

module.exports = Wallet;