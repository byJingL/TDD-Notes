class Account{
    /* All these properties have PUBLIC access - we don't generally want that
    id;
    balance;
    name;
    contactNumber;
    transactions; */

    // Solution: Make all properties PRIVATE access
    // In JS we use # before the name to denote PRIVATE class property
    // In other languages, the `private` keyword is used
    // just clare
    #id;
    #balance;
    #name;
    #contactNumber;
    #transactions;
    randomFiled;
    // Default value put to the end
    /* Why construct again? 
    1, it is good to declare what properties account have at start
    2, what propertis have and what propertied shouold be are two differ things
    */
    constructor(id, name, contactNumber, balance = 0){
        // this.id = id;
        // this.name = name;
        // this.contactNumber = contactNumber;
        // this.balance = balance;
        // this.transactions = [];

        this.#id = id;
        this.#name = name;
        this.#contactNumber = contactNumber;
        this.#balance = balance;
        this.#transactions = [];
    }

    // Provide GETTER methods for all values to expose outside of the class
    getBalance() {
        return this.#balance;
    }

    // JavaScript-only get keyword method
    get name() {
        return this.#name;
    }

    get transactions() {
        return this.#transactions;
    }

    // Provide SETTER methods for all values to allow changes from outside the class
    // This method can change #balance, because it is in the class, can access to the properties
    // 
    setBalance(newBalance) {
        if (isNaN(newBalance)) return;
        if (isNaN(newBalance)) return;
        if (newBalance <= 10000) {
            this.#transaction = newBalance;
            this.#balance = newBalance;
        } else {
            console.log(`You cannot deposit more than 10000 in a single transaction.`);
        }
    }

    // JavaScript-only set keyword method
    set #transaction(transaction) {
        this.#balance += transaction;
        this.#transactions.push(transaction);
    }

}

module.exports = Account;