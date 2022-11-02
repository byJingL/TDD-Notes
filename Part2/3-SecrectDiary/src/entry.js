export default class Entry{ 
    #content;
    constructor(content) {
        this.#content = content;
    }

    getContent() { 
        return this.#content;
    }
}
