function addPrivateProperty<T>(
    o: { [key: string]: unknown },
    name: String,
    predicate: (v: T) => unknown,
) {
    let value: T | undefined;

    o[`get${name}`] = function () {
        return value;
    };

    o[`set${name}`] = function (v: T) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}

const o: { [key: string]: (v?: unknown) => unknown } = {};

addPrivateProperty(o, "Name", (x) => typeof x === "string");
o.setName?.("Frank");
o.getName?.(); // "Frank"
o.setName?.(0); // TypeError
