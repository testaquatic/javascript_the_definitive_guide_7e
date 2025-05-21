export class Range {
    #from;
    #to;

    constructor(from, to) {
        this.#from = from;
        this.#to = to;
    }

    has(x) {
        return typeof x === "number" && this.#from <= x && x <= this.#to;
    }

    toString() {
        return `{ x | ${this.#from} <= x <= ${this.#to} }`
    }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.#from); x <= this.#to; x++) {
            yield x;
        }
    }
}

