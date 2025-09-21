class DefaultMap<K, V> extends Map<K, V> {
    // 키가 존재하지 않을 때 반환할 기본값이다.
    defaultValue: undefined | V;

    constructor(defaultValue?: V) {
        super();
        this.defaultValue = defaultValue;
    }

    override get(key: K) {
        if (this.has(key)) {
            return super.get(key);
        } else {
            return this.defaultValue;
        }
    }
}

class Histogram {
    #lettersCounts = new DefaultMap<string, number>(0);
    #totalLetters = 0;

    add(text: string) {
        // 텍스트에서 공백을 제거하고 대문자로 변환한다.
        text = text.replace(/\s/g, "").toUpperCase();
        for (const character of text) {
            const count = this.#lettersCounts.get(character);
            this.#lettersCounts.set(character, (count ?? 0) + 1);
            this.#totalLetters++;
        }
    }

    toString() {
        let entries = [...this.#lettersCounts];
        // console.log(entries);

        // 정렬은 횟수, 알파벳 순이다.
        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0].localeCompare(b[0]);
            } else {
                return b[1] - a[1];
            }
        });

        // 횟수를 퍼센트로 변환한다.
        for (const entry of entries) {
            entry[1] = (entry[1] / this.#totalLetters) * 100;
        }
        // console.log(entries);

        // 1% 미만인 글자는 버린다.
        entries = entries.filter((entry) => entry[1] >= 1);

        // 각 항목을 글자의 나열로 변환한다.
        const lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`,
        );

        return lines.join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf8");
    const histogram = new Histogram();
    for await (const chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}

histogramFromStdin().then((histogram) => console.log(histogram.toString()));
