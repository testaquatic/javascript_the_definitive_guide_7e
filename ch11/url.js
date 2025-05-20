const url = /(\w+):\/\/([\w.]+)\/(\S*)/;
const text = "Visit my blog at http://www.example.com/~david";
const match = text.match(url);
let fullurl, protocol, host, path;

if (match !== null) {
    fullurl = match[0];
    protocol = match[1];
    host = match[2];
    path = match[3];
}

console.log(fullurl);
console.log(protocol);
console.log(host);
console.log(path);