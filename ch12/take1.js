import { fibonacciSequence } from "./yield.js";
import { take } from "./take.js";

console.log([...take(5, fibonacciSequence())]);