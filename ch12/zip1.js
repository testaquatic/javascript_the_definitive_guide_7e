import { zip } from "./zip.js";
import { oneDigitPrimes } from "./yield.js";

console.log([...zip(oneDigitPrimes(), "ab", [0])]);