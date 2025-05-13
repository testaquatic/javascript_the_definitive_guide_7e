class Complex {
    #r = 0;
    #i = 0;

    constructor(real, imaginary) {
        this.#r = real;
        this.#i = imaginary;
    }

    plus(that) {
        return new Complex(
            this.real + that.real,
            this.imaginary + that.imaginary
        );
    }

    times(that) {
        return new Complex(
            this.real * that.real - this.imaginary * that.imaginary,
            this.real * that.imaginary + this.imaginary * that.real
        );
    }

    static sum(c, d) {
        return c.plus(d);
    }

    static product(c, d) {
        return c.times(d);
    }

    get real() {
        return this.#r;
    }

    get imaginary() {
        return this.#i;
    }

    get magnitude() {
        return Math.hypot(this.real, this.imaginary);
    }

    toString() {
        return `{${this.real},${this.imaginary}}`;
    }

    equals(that) {
        return (
            that instanceof Complex &&
            this.real === that.real &&
            this.imaginary === that.imaginary
        );
    }

    static ZERO = new Complex(0, 0);
    static ONE = new Complex(1, 0);
    static I = new Complex(0, 1);
}

Complex.prototype.conj = function () {
    return new Complex(this.real, -this.imaginary);
};
