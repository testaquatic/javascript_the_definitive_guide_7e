function html ( strings, ...values ) {
    const escaped = values.map(
        v => String( v )
            .replace( "&", "&amp;" )
            .replace( "<", "&lt;" )
            .replace( ">", "&gt;" )
            .replace( '"', "&quot;" )
            .replace( "'", "&#39;" )
    );

    let result = strings[ 0 ];
    for ( let i = 0; i < escaped.length; i++ ) {
        result += escaped[ i ] + strings[ i + 1 ];
    }

    return result;
}

const operator = "<";
console.log( html`<b>x ${ operator } y</b>` );
const kind = "game";
const name = "D&D";
console.log( html`<div class="${ kind }>${ name }</div>` );