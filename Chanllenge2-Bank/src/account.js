export default class Account { 
    #id;
    #balance;
    #transaction;

    constructor(id, balance = 0) { 
        this.#id = id;
        this.#balance = balance;
        this.#transaction = [];
    }

    getID() { 
        return this.#id;
    }

    getBalabce() { 
        return this.#balance;
    }

    getTransaction() { 
        return this.#transaction;
    }
    
    doDeposit(newDeposite) { 
        this.#transaction.push(newDeposite.getDeposit());
    }
    
    doWithdrawal(newWithdrawal) {
        this.#transaction.push(newWithdrawal.getWithdrawal());
    }
}