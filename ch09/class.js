function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    constructor: Range,

    includes(x) {
        return this.from <= x && x <= this.to;
    },

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },

    toString() {
        return `Range(${this.from}, ${this.to})`;
    },
};

function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.from = start + span;
        this.to = start;
    }
}

Span.prototype = Object.create(Range.prototype);
Span.prototype.constructor = Span;

Span.prototype.toString = function () {
    return `Span(${this.from}... +${this.to - this.from})`;
};
