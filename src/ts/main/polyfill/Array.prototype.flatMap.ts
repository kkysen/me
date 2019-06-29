export function flatMap<T, U, This = undefined>(
    this: T[],
    flatMap: (this: This, value: T, index: number, array: T[]) => U | readonly U[],
    thisArg?: This
): U[] {
    if (thisArg) {
        flatMap = flatMap.bind(thisArg as ThisParameterType<typeof flatMap>);
    }
    // TODO speed up, remove unnecessary copies w/ manual for...of loop
    return ([] as U[]).concat(...this.map(flatMap));
}

if (!Array.prototype.flatMap) {
    Array.prototype.flatMap = flatMap;
}
