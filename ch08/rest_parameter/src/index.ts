type Timedfunction<T> = (...args: T[]) => unknown;

function timed<T>(f: Timedfunction<T>) {
    return function (...args: T[]) {
        console.log(`Entering function ${f.name}`);
        // 시작시간
        const startTime = Date.now();
        try {
            return f(...args);
        } finally {
            //소요 시간
            console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
        }
    };
}

function benchmark(n: number) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

timed(benchmark)(1_000_000);
