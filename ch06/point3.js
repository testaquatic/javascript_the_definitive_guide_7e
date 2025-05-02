/**
 * @type {object}
 */
let point = {
    x: 3,
    y: 4,
    valueOf: function () {
        return Math.hypot(this.x, this.y);
    },
};

console.log(Number(point));
console.log(point > 4);
console.log(point > 5);
console.log(point < 6);
