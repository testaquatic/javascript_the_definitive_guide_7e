console.log( Object.getPrototypeOf( {} ) );
console.log( Object.getPrototypeOf( [] ) );
console.log( Object.getPrototypeOf( () => { } ) );

const p = { x: 1 };
const o = Object.create( p );
console.log( p.isPrototypeOf( o ) );
console.log( Object.prototype.isPrototypeOf( p ) );
console.log( Object.prototype.isPrototypeOf( o ) );
