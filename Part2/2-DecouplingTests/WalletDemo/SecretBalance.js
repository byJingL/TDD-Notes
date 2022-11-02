class SecretBalance{
    #balance;

    constructor(initialBalabce = 0){
        this.#balance = initialBalabce;
    }

    getBalance(){
        return `${this.#balance} this balance is secret`;
    }
}

module.exports = SecretBalance;
