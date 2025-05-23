class AsyncQueue {
    #values = []
    #resolvers = []
    #closed = false

    static EOS = Symbol("end-of-stream");

    enqueue(value) {
        if (this.#closed) {
            throw new Error("AsyncQueue closed");
        }
        if (this.#resolvers.length > 0) {
            const resolve = this.#resolvers.shift();
            resolve(value);
        } else {
            this.#values.push(value);
        }
    }

    // 오 이런 방법도 있었구나
    dequeue() {
        if (this.#values.length > 0) {
            const value = this.#values.shift();
            return Promise.resolve(value);
        } else if (this.#closed) {
            return Promise.resolve(AsyncQueue.EOS);
        } else {
            return new Promise((resolve) => {
                this.#resolvers.push(resolve);
            });
        }
    }

    close() {
        while (this.#resolvers.length > 0) {
            this.#resolvers.shift()(AsyncQueue.EOS);
        }
        this.#closed = true;
    }

    [Symbol.asyncIterator]() {
        return this;
    }

    next() {
        return this.dequeue().then(value => (value === AsyncQueue.EOS ? { done: true, value: undefined } : { done: false, value }));
    }
}