import { MaybeMonoidal } from "../../algebra/monoid/monoid.defs";

export interface MonoidalListoid<T> extends MaybeMonoidal<T> {
  cons: (t: T) => MonoidalListoid<T>;
}

export interface ProtoListoid<T> extends MonoidalListoid<T> {
  arr: Map<string, T> | Set<T> | Array<T>;
}

export interface SnocListoid<T> extends ProtoListoid<T> {
  snoc: (t: T) => SnocListoid<T>;
}

export interface Listoid<T> extends SnocListoid<T> {
  head: () => MaybeMonoidal<T>;
  tail: () => MaybeMonoidal<T>;
}

export interface NonEmptyListoid<T> extends Listoid<T> {
  safeHead: () => T;
  safeTail: () => T;
}

export interface UnsafeListoid<T> extends Listoid<T> {
  unsafeHead: () => T | null;
  unsafeTail: () => T | null;
}