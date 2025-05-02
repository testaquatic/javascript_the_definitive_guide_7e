let point = {
    x: 1,
    y: 2,
    toString: function () {
        return `(${this.x}, ${this.y})`;
    },
};

console.log(String(point));
