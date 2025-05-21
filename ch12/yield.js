export function* fibonacciSequence() {
    let x = 0;
    let y = 1;
    for (; ;) {
        yield y;
        [x, y] = [y, x + y];
    }
}

export function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}
