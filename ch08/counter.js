function counter(n) {
    return {
        get count() {
            return n++;
        },
        set count(m) {
            if (m > n) {
                n = m;
            }
        },
    };
}

let c = counter(1000);
console.log(c.count);
console.log(c.count);
c.count = 2000;
console.log(c.count);
c.count = 2000;
console.log(c.count);
