export default class Bank {
    #accounts;

    constructor(accounts = []) {
        this.#accounts= accounts;
    }

    addAccount(newAccount) {
        this.#accounts.push(newAccount);
    }

    getAccounts() {
        return this.#accounts;
    }

}