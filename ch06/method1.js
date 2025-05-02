const METHOD_NAME = "m";
const symbol = Symbol();
let weiredMethods = {
    "method With Spaces"(x) {
        return x + 1;
    },
    [METHOD_NAME](x) {
        return x + 2;
    },
    [symbol](x) {
        return x + 3;
    },
};

console.log(weiredMethods["method With Spaces"](1));
console.log(weiredMethods[METHOD_NAME](1));
console.log(weiredMethods[symbol](1));


