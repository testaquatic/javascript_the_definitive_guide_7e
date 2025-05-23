import clock from "./async_generator.js";

async function test() {
    for await (let tick of clock(300, 100)) {
        console.log(tick);
    }
}

test();