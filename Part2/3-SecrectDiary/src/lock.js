// FULLY decoupling
// single unit
// just one can put in the top
export default class Lock { 
    #lockStatus;

    constructor(lockstatus = true) { 
        this.#lockStatus = lockstatus;
    }

    isLocked() { 
        return this.#lockStatus;
    }

    unlock() { 
        this.#lockStatus = false;
    }

    lock() { 
        this.#lockStatus = true;
    }

};
