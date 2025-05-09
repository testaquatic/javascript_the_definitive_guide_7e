// 지금 버전에서는 실행이 되지 않는다.
let scope = "global";
function constructFunction() {
    let scope = "local";
    return new Function( "return scope;");
}

let result = constructFunction();
console.log(result());