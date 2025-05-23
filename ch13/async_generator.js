function elapsedTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) {
        await elapsedTime(interval);
        yield count;
    }
}

