export interface Complex {
  r: number;
  i: number;
}

export type Quarternion = Complex & {
  j: number;
  k: number;
};

export interface Qnion<I, J, K> {
  ternion: Quarternion | number;
  i: I;
  j: J;
  k: K;
}

export type Qua<I, J, K> = Omit<Qnion<I, J, K>, 'ternion'>; // triple

/**
 *  Functors allow a uniform action over a parameterised type.
    interface Functor (f : Type -> Type) where
        map : (func : a -> b) -> f a -> f b

    Apply a function across everything of type 'a' in a
     parameterised type
     @ f the parameterised type
     @ func the function to apply
 *
     First there was only T. And a function func from T to S emerged.
*/
export type UnaryFunc<T, S> = (t: T) => S;

/**
 * T -> S jaane baato bhayo
 * Functor bhanne bhado ma bhako sabai T haru lai, S samma lagne
*/
export interface Functor<T> {
  fmap: <S>(f: UnaryFunc<T, S>) => (ft: Functor<T>) => Functor<S>;
}

/**
 * interface Functor f => Applicative (f : Type -> Type) where
    pure  : a -> f a
    (<*>) : f (a -> b) -> f a -> f b
 *
    Then there are applicatives. It could take T, take it to Functor<T>
*/
export interface Applicative<T> extends Functor<T> {
  pure: (t: T) => Functor<T>;
  appl: <S>(fts: Functor<(t: T) => S>) => (ft: Functor<T>) => Functor<S>;
}

/**
 * interface Applicative m => Monad (m : Type -> Type) where
    ||| Also called `bind`.
    (>>=)  : m a -> ((result : a) -> m b) -> m b

    ||| Also called `flatten` or mu
    join : m (m a) -> m a

    -- default implementations
    (>>=) x f = join (f <$> x)
    join x = x >>= id
 *
*/
export interface Monad<T> extends Applicative<T> {
  bind: <S>(mt: Monad<T>) => (mts: (t: T) => Monad<S>) => Monad<S>;
  flat: (mmt: Monad<Monad<T>>) => Monad<T>;
}

/**
 *  Sets equipped with a single binary operation that is associative. Must
 satisfy the following laws:

 + Associativity of `<+>`:
     forall a b c, a <+> (b <+> c) == (a <+> b) <+> c
interface Semigroup ty where
  (<+>) : ty -> ty -> ty
 *
*/
export interface Semigroup<T> {
  addr: (t1: T) => (t2: T) => T;
}
// eg.
// const sgs: Semigroup<string> = {
//     addr: (t1: string) => (t2: string) => t1 + t2
// };
// console.log(sgs.addr('nis')('chal'));

// const sgs: Semigroup<Complex> = {
//     addr: (t1: Complex) => (t2: Complex) => ({
//         i: t1.i + t2.i,
//         r: t1.r + t2.r
//     })
// };
// console.log(sgs.addr({ r: 1, i: 0 })({ r: 2, i: 3 }));

/**
 *  Sets equipped with a single binary operation that is associative, along with
 a neutral element for that binary operation.  Must satisfy the following
 laws:
 + Associativity of `<+>`:
     forall a b c, a <+> (b <+> c) == (a <+> b) <+> c
 + Neutral for `<+>`:
     forall a,     a <+> neutral   == a
     forall a,     neutral <+> a   == a

     For example, a neutral element for 'adder' [addr] function would be an additive identity [addi]

interface Semigroup ty => Monoid ty where
  neutral : ty
 *
*/
export interface Monoid<T> extends Semigroup<T> {
  addi: T;
}

/**
 * The Eq interface defines inequality and equality.
interface Eq ty where
    (==) : ty -> ty -> Bool
    (/=) : ty -> ty -> Bool
 *
*/
export interface Eq<T> {
  eq: (t1: T) => (t2: T) => boolean;
}

// These are different. Go figure.
// const boolEq: Eq<boolean> = {
//   eq: (t1) => (t2) => (t1 && t2) || (!t1 && !t2)
// }
// const boolEq = {
//   eq: (t1) => (t2) => (t1 === true && t2 === true) || (t1 === false && t2 === false)
// }
