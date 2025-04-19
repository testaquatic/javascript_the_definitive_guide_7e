// @ts-check

// 맵을 확장한다.
class DefaultMap extends Map {
    /**
     * @param {number} defaultValue
     */
    constructor(defaultValue) {
        super();
        /**
         * @type {number}
         */
        this.defaultValue = defaultValue;
    }

    /**
     *
     * @param {*} key
     * @returns {number}
     */
    get(key) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
    }
}

// 글자 빈도 히스토그램을 표시한다.
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    /**
     *
     * @param {string} text
     */
    add(text) {
        text = text.replace(/\s/g, "").toUpperCase();
        for (let character of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count + 1);
            this.totalLetters++;
        }
    }

    /**
     * 히스토그램을 ASCII 그래프로 표현한다.
     */
    toString() {
        /**
         * @type {[string, number][]}
         */
        let entries = [...this.letterCounts];

        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            } else {
                return b[1] - a[1];
            }
        });

        for (let entry of entries) {
            entry[1] = (entry[1] / this.totalLetters) * 100;
        }

        entries = entries.filter((entry) => entry[1] >= 1);

        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );

        return lines.join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (const chunk of process.stdin) {
        histogram.add(chunk);
    }

    return histogram;
}

histogramFromStdin().then((histogram) => {
    console.log(histogram.toString());
});
