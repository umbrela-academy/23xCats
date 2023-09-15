export type UnaryFunc<T, S> = (t: T) => S;
export type BinaryFunc<T, S> = UnaryFunc<T, UnaryFunc<T, S>>; 
export type TernaryFunc<T, S> = UnaryFunc<T, BinaryFunc<T,  S>>;
export type QuarternaryFunc<T, S> = UnaryFunc<T, TernaryFunc<T,  S>>;
export type MAryFunc<T, S> = UnaryFunc<T, NAryFunc<S>>;

export type OneAryFunc<T, S> = UnaryFunc<T , S>;
export type TwoAryFunc<T, S, U> = (t: T, s: S) => U;
export type ThreeAryFunc<T, S, U, V> = (t1: T, t2: S, t3: U) => V;
export type NAryFunc<S> = (...t: any[]) => S;  

export type Church1<T> = (u: T) => T
export type Church2<T> = Church1<Church1<T>>;
export type Church3<T> = Church1<Church2<T>>;
export type ChurchN<T> = NAryFunc<T>;