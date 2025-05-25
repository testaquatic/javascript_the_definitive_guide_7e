const o = { x: 1 };
const p = { y: 2 };
Object.setPrototypeOf( o, p );
console.log( o.y );
const a = [ 1, 2, 3 ];
Object.setPrototypeOf( a, p );
console.log( a.join );
