import { Range } from "./range.js";
import { map, filter } from "./map_filter.js";

console.log([...map(new Range(1, 4), x => x * x)]);
console.log([...filter(new Range(1, 10), x => x % 2 == 0)]);