export type Sngl<T> = T; //1
export type Pair<T, U> = [Sngl<T>, Sngl<U>];
export type Trpl<T, U, V> = Pair<Sngl<T>, Pair<U, V>>;
export type Quad<T, U, V, W> = Trpl<Sngl<T>, Pair< U, V>, Sngl<W>>;
export type PenT<T, U, V, W, X> = Quad<Sngl<T>, Pair<U, V>, Sngl<W>, Sngl<X>>; //5
export type SexT<T, U, V, W, X, Y> = PenT<Sngl<T>, Pair<U, V>, Sngl<W>, Sngl<X>, Sngl<Y>>; //6
export type SepT<T, U, V, W, X, Y, Z> = SexT<Sngl<T>, Pair<U, V>, Sngl<W>, Sngl<X>, Sngl<Y>, Sngl<Z>>; //7s
export type OctT<T, U, V, W, X, Y, Z, A> = SepT<Sngl<T>, Pair<U, V>, Sngl<W>, Sngl<X>, Sngl<Y>, Sngl<Z>, Sngl<A>>; //7s
export type NonT<T, U, V, W, X, Y, Z, A, B> = OctT<Sngl<T>, Pair<U, V>, Sngl<W>, Sngl<X>, Sngl<Y>, Sngl<Z>, Sngl<A>, Sngl<B>>; //9
export type T2NaryFunc<T, U> = (tt: Pair<T, T>) => U;
export type T3NaryFunc<T,U> = (ttt:Trpl<T,T,T>)=> U;