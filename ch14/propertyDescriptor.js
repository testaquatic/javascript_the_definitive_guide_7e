"use strict";

console.log( ( Object.getOwnPropertyDescriptor( { x: 1 }, "x" ) ) );

const random = {
    get octet () { return Math.floor( Math.random() * 256 ); }
};

console.log( Object.getOwnPropertyDescriptor( random, "octet" ) );
console.log( Object.getOwnPropertyDescriptor( random, "x" ) );
console.log( Object.getOwnPropertyDescriptor( random, "toString" ) );

let o = {};
Object.defineProperty( o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true,
} );

console.log( o.x );
console.log( Object.keys( o ) );

Object.defineProperty( o, "x", { writable: false } );
Object.defineProperty( o, "x", { get: function () { return 0; } } );
console.log( o.x );

let p = Object.defineProperties( {},
    {
        x: { value: 1, writable: true, enumerable: true, configurable: true },
        y: { value: 1, writable: true, enumerable: true, configurable: true },
        r: {
            get () { return Math.sqrt( this.x * this.x + this.y * this.y ); }, enumerable: true, configurable: true,
        }
    }
);

console.log( p.r );