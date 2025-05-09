function arraycopy({from, to=from, n=from.length, fromIndex=0, toIndex=0}) {
    let valuesToCopy = from.slice(fromIndex, toIndex + n)
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
}