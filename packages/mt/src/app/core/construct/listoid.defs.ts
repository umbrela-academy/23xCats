import { Monoid } from "../algebra/monoid/monoid.defs";
import { Maybe } from "../maybe.monad";

export interface MonoidalListoid<T> extends Monoid<T> {
    cons: (t: T) => Listoid<T>;
}

export interface ProtoListoid<T> extends MonoidalListoid<T> {
    arr: Map<string, T> | Set<T> | Array<T>;
}

export interface SnocListoid<T> extends ProtoListoid<T> {
    snoc: (t: T) => Listoid<T>;
}

export interface Listoid<T> extends SnocListoid<T> {
    head: () => Maybe<T>;
    tail: () => Maybe<T>;
}

export interface NonEmptyListoid<T> extends Listoid<T> {
    safeHead: () => T;
    safeTail: () => T;
}

export interface UnsafeListoid<T> extends Listoid<T> {
    unsafeHead: () => T | null;
    unsafeTail: () => T | null;
}