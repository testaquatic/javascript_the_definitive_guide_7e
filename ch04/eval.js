const geval = eval;
let x = "global";
let y = "global";

function f() {
    let x = "local";
    eval("x+='changed';");
    return x;
}

function g() {
    let y = "local";
    geval("y+='changed';");
    return y;
}

console.log(f(), x);
console.log(g(), y);
