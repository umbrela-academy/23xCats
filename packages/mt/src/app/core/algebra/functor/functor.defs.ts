import { UnaryFunc } from '../function/function.defs';

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

 * T -> S jaane baato bhayo
 * Functor bhanne bhado ma bhako sabai T haru lai, S samma lagne
 */
export abstract class Func<T> {
  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: Func<T>) => Func<S>;
}

export interface IFunctor<T> {
  fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S>;
}
