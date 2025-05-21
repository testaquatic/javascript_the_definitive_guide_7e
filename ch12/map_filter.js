export function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return {
                    value: f(v.value),
                };
            }
        }
    }
};


export const filter = (iterable, predicate) => {
    let iterator = iterable[Symbol.iterator]();

    return {
        [Symbol.iterator]() {
            return this;
        },

        next() {
            for (; ;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        }
    };
}

