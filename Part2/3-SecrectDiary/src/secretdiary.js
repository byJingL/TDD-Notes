export default class SecretDiary { 
    #lock;
    #entries;

    constructor(lock) { 
        // lock should be an instance of Lock class
        // check the properties of lock
        if (!lock.unlock && !lock.lock && !lock.isLocked) {
            throw new Error(`This Secret Diary is not illegal,you should have Lock surpport`)
        };
        this.#lock = lock;
        this.#entries = [];
    }
    
    getLockStatus() { 
        return this.#lock.isLocked();
    }

    getEntries() {
        if (this.getLockStatus()) {
            throw new Error(`Diary is locked`);
        } else { 
            return this.#entries;
        }
    }

    addEntry(newEntry) {
        if (this.getLockStatus()) {
            throw new Error(`Diary is locked`);
        } else { 
            this.#entries.push(newEntry);
        }

    }

    unlock() { 
        this.#lock.unlock();
    }

    lock() { 
        this.#lock.lock();
    }
}

