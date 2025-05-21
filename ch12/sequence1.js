import { sequence } from "./sequence.js";
import { oneDigitPrimes } from "./yield.js";

console.log([...sequence("abc", oneDigitPrimes())]);