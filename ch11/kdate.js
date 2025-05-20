class KDate {
    constructor(date) {
        this.Date = new Date(
            (date ? new Date(date) : new Date()).valueOf() + 9 * 60 * 60 * 1000
        );
    }

    exit() {
        return this.Date;
    }

    raw() {
        return [
            this.Date.toISOString().split('T')[0].split('-'),
            this.Date.toISOString().split('T')[1].substring(0, 8).split(':'),
            ['일', '월', '화', '수', '목', '금', '토'][this.Date.getDay()]
        ].flat();
    }

    date(sep) {
        const raw = this.raw()
        if (sep === '년월일') {
            let [y, m, d, h, mm, s] = raw.map(string => Number(string));
            return `${y}년 ${m}월 ${d}일 ${h}시 ${mm}분 ${s}초`;
        }

        let [y, m, d, h, mm, s] = raw;

        sep = sep || '-';
        return `${y}${sep}${m}${sep}${d} ${h}:${mm}:${s}`;
    }

    add(y, m, d) {
        const raise = () => {
            throw new Error(`KDate.add(y, m, d): y, m, d는 숫자여야 합니다.`)
        }

        if (y && typeof y !== 'number') {
            raise();
        }

        if (m && typeof m !== 'number') {
            raise();
        }

        if (d && typeof d !== 'number') {
            raise();
        }

        this.Date.setFullYear(this.Date.getFullYear() + y, this.Date.getMonth() + (m || 0), this.Date.getDate() + (d || 0));

        return this;
    }
}

[
    new KDate('2021-01-01 10:00:00').date("년월일"),
    new KDate('2021-01-01 10:00:00').date("."),
    new KDate('2021-01-01 10:00:00').add(0, 0, -3).raw(),
    new KDate('2021-01-01 10:00:00').add(3, 2, -1).date('.'),
].forEach(date => console.log(date));