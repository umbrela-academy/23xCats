export class ImmutableMap<K, V> {
    private jsMap: Map<K, V>;
    constructor(kvPairs: [K, V][]) {
        this.jsMap = new Map(kvPairs);
    }

    get(key: K): V | undefined {
        return this.jsMap.get(key);
    }

    get size(): number {
        return this.jsMap.size;
    }

    has(key: K): boolean {
        return this.jsMap.has(key);
    }

    keys(): IterableIterator<K> {
        return this.jsMap.keys();
    }

    values(): IterableIterator<V> {
        return this.jsMap.values();
    }

    entries(): IterableIterator<[K, V]> {
        return this.jsMap.entries()
    }

    forEach(callbackFn: (value?: V, key?: K, map?: Map<K, V>) => void, thisArg?: unknown): void {
        return this.jsMap.forEach(callbackFn, thisArg);
    }
}