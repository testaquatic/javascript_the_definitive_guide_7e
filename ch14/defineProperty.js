Object.defineProperty( Object, "assignDescriptors", {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function ( target, ...sources ) {
        for ( const source of sources ) {
            for ( const name of Object.getOwnPropertyNames( source ) ) {
                let desc = Object.getOwnPropertyDescriptor( source, name );
                Object.defineProperty( target, name, desc );
            }

            for ( const symbol of Object.getOwnPropertySymbols( source ) ) {
                let desc = Object.getOwnPropertyDescriptor( source, symbol );
                Object.defineProperty( target, symbol, desc );
            }
        }

        return target;
    }
} );

const o = {
    c: 1,
    get count () {
        return this.c++;
    }
};

const p = Object.assign( {}, o );
const q = Object.assignDescriptors( {}, o );
console.log( p.count );
console.log( p.count );
console.log( q.count );
console.log( q.count );

