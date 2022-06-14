class List {
    #list = [];

    constructor() {
        this.size = 0;
    }

    add(element) {
        this.#list.push(element);
        this.#list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.#list.length) {
            this.#list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.#list.length) {
            return this.#list[index];
        }
    }

    // get size() {
    //     return this.#list.length;
    // }
}
