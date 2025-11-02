function add(x: number, y: number) {
    return x + y;
}

function subtract(x: number, y: number) {
    return x - y;
}

function multiply(x: number, y: number) {
    return x * y;
}

function divide(x: number, y: number) {
    return x / y;
}

function operate(
    operator: (x: number, y: number) => number,
    operand1: number,
    operand2: number,
) {
    return operator(operand1, operand2);
}

const i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));
console.log(i);

const operators = {
    add: (x: number | string, y: number | string): number | string => {
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        } else {
            return x.toString() + y.toString();
        }
    },
    subtract: (x: number, y: number) => x - y,
    multiply: (x: number, y: number) => x * y,
    divide: (x: number, y: number) => x / y,
    pow: Math.pow,
};

function operate2(
    operation: string,
    operand1: number | string,
    operand2: number | string,
) {
    if (operation == "add") {
        return operators.add(operand1, operand2);
    } else if (
        operation == "subtract" ||
        operation == "multiply" ||
        operation == "divide" ||
        operation == "pow"
    ) {
        if (typeof operand1 === "number" && typeof operand2 === "number") {
            return operators.subtract(operand1, operand2);
        }
    }

    throw new Error("Invalid operation");
}

operate2("add", "hello", operate2("add", " ", "world"));
