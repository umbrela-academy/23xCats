export type UnaryFunc<T, S> = (t: T) => S;
export type BinaryFunc<T, S> = (t1: T) => (t2: T) => S;
export type TernaryFunc<T, S> = (t1: T) => (t2: T) => (t3: T) => S;
export type NAryFunc<T, S> = (...t: T[]) => S;
