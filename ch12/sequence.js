export function* sequence(...iterables) {
    for (let iterable of iterables) {
        yield* iterable
    }
}