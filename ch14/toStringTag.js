class Range {
    constructor ( start, end ) {
        this.start = start;
        this.end = end;
    }
    get [ Symbol.toStringTag ] () { return "Range"; }
}

function classof ( o ) {
    return Object.prototype.toString.call( o ).slice( 8, -1 );
}

let r = new Range( 1, 10 );

console.log( Object.prototype.toString.call( r ) );
console.log( classof( r ) );

