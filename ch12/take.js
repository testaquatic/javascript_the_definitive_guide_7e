export function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while (n-- > 0) {
        let next = it.next();
        if (next.done) {
            return;
        } else {
            yield next.value;
        }
    }
}
