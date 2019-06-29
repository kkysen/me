export function fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k in PropertyKey]: T } {
    const o: { [k in PropertyKey]: T } = {};
    for (const [k, v] of entries) {
        // for some reason symbols aren't allowed as an indexable property
        // even though they're part of PropertyKey
        o[k as string | number] = v;
    }
    return o;
}

if (!Object.fromEntries) {
    Object.fromEntries = fromEntries;
}
