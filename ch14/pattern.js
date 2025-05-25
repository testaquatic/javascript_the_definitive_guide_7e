"use strict";

class Glob {
    #glob = undefined;
    #regexp = undefined;

    constructor ( glob ) {
        this.#glob = glob;

        let regexpText = glob.replace( "?", "([^/])" ).replace( "*", "([^/]*)" );

        this.#regexp = new RegExp( `^${ regexpText }$`, "u" );
    }

    toString () {
        return this.#glob;
    }


    [ Symbol.search ] ( s ) {
        return s.search( this.#regexp );
    }

    [ Symbol.match ] ( s ) {
        return s.match( this.#regexp );
    }

    [ Symbol.replace ] ( s, replacement ) {
        return s.replace( this.#regexp, replacement );
    }
}

const pattern = new Glob( "docs/*.txt" );
console.log( "docs/js.txt".search( pattern ) );
console.log( "docs/js.htm".search( pattern ) );
const match = "docs/js.txt".match( pattern );
console.log( match[ 0 ] );
console.log( match[ 1 ] );
console.log( match.index );
console.log( "docs/js.txt".replace( pattern, "web/$1.htm" ) );

function glob ( strings, ...values ) {
    let s = strings[ 0 ];

    for ( let i = 0; i < values.length; i++ ) {
        s += values[ i ] + strings[ i + 1 ];
    }

    return new Glob( s );
}

let root = "/tmp";
let filePattern = glob`${ root }/*.html`;
console.log( "/tmp/test.html".match( filePattern ) );