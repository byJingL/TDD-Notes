export default class Deposit {
    #ammount;
    #date
    #deposit;
    constructor(ammount) {
        this.#ammount = ammount;
        this.#date = this.#formattedDate();
        this.#deposit = [this.#date, this.#ammount];
    }

    getDeposit() {
        return this.#deposit;
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
