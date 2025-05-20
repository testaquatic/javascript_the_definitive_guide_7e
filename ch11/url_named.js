const url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
const text = "Visit my blog at http://www.example.com/~david";
const match = text.match(url);
console.log(match[0]);
console.log(match.input);
console.log(match.index);
console.log(match.groups.protocol);
console.log(match.groups.host);
console.log(match.groups.path);
