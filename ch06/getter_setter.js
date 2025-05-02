let p = {
    x: 1.0,
    y: 1.0,

    get r() {
        return Math.hypot(this.x, this.y);
    },
    set r(newValue) {
        let oldValue = Math.hypot(this.x, this.y);
        let ratio = newValue / oldValue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() {
        return Math.atan2(this.y, this.x);
    },
};

console.log(p.r);
console.log(p.theta);

let q = Object.create(p);
q.x = 3;
q.y = 4;

console.log(q.r);
console.log(q.theta);

const serialnum = {
    _n: 0,
    get next() {
        return this._n++;
    },
    set next(n) {
        if (n > this._n) {
            this._n = n;
        } else {
            throw new Error("serial number can only be set to a larger value");        
        }
    }
    
};

serialnum = 10;
console.log(serialnum.next);
console.log(serialnum.next);