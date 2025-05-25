class EZArray extends Array {
    static get [ Symbol.species ] () {
        return Array;
    }

    get first () {
        return this[ 0 ];
    }

    get last () {
        return this[ this.length - 1 ];
    }
}

const e = new EZArray( 1, 2, 3 );
const f = e.map( x => x * x );
console.log( e.last );
console.log( f.last );