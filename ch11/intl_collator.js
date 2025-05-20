const collator = new Intl.Collator().compare;
console.log(["a", "z", "A", "Z"].sort(collator));

const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
console.log(["page10", "page9"].sort(filenameOrder));

const fuzzyMatcher = new Intl.Collator(undefined, { sensitivity: "base", ignorePunctuation: true }).compare;
let strings = ["food", "fool", "Foo Bar"];
console.log(strings.findIndex(s => fuzzyMatcher(s, "foobar") === 0));
