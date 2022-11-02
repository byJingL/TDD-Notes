// Sigle Responsibility: balance is a responsibility, so be a new class

class Balance{

    #balance;

    constructor(initialBalabce = 0){
        this.#balance = initialBalabce;
    }

    getBalance(){
        return this.#balance;
    }

    setBalance(amount){
        this.#balance += amount;
    }
    
}
module.exports = Balance;