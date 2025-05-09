function compose(f, g) {
    return function (...args) {
        return f.call(this, g.apply(this, args));
    }
}

function partial(f, ...outerArgs) {
    return function (...innerArgs) {
        let args = [...outerArgs];
        let innerIndex = 0;
        for (let i = 0; i < args.length; i++) {
            if (args[i] === undefined) {
                args[i] = innerArgs[innerIndex++];
            }
        }
        args.push(...innerArgs.slice(innerIndex));

        return f.apply(this, args);
    }
}

const sum = (x, y) => x + y;
const map = function (a, ...args) {
    return a.map(...args);
}
const reduce = function (a, ...args) {
    return a.reduce(...args);
}
const product = (x, y) => x * y;
const square = x => product(x, x);
let neg = partial(product, -1);
let sqrt = partial(Math.pow, undefined, .5);
let reciprocal = partial(Math.pow, undefined, neg(1))

let data = [1, 1, 3, 5, 5];
let mean = product(reduce(data, sum), reciprocal(data.length));
let stddev = sqrt(product(reduce(map(data, compose(square, partial(sum, neg(mean)))), sum), reciprocal(sum(data.length, neg(1)))));
console.log(mean, stddev);
