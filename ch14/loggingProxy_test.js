import loggingProxy from "./loggingProxy.js";

const data = [10, 20];
const methods = { square: x => x * x };

const proxyData = loggingProxy(data, "data");
const proxyMethods = loggingProxy(methods, "methods");

console.log(data.map(methods.square));
proxyData.map(methods.square);

data.map(proxyMethods.square);

for (let x of proxyData) {
    console.log("Datum", x);
}