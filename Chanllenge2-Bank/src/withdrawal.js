export default class Withdrawal {
    #ammount;
    #date
    #withdrawal;
    constructor(ammount) {
        this.#ammount = -ammount;
        this.#date = this.#formattedDate();
        this.#withdrawal = [this.#date, this.#ammount];
    }

    getWithdrawal() {
        return this.#withdrawal;
    }

    #formattedDate() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month
        let day = date.getDate();
        day = day < 10 ? `0${day}` : day
        return `${day}/${month}/${year}`
    }
}
