import { Extends } from './../../utils/proof/extended';
import { UnaryFunc } from '../function/function.defs';

/**
 *  Functors allow a uniform action over a parameterized type.
    interface Functor (f : Type -> Type) where
        map : (func : a -> b) -> f a -> f b

    Apply a function across everything of type 'a' in a
     parameterized type
     @ f the parameterized type
     @ func the function to apply
 *
     First there was only T. And a function func from T to S emerged.

 * T -> S jaane baato bhayo
 * Functor bhanne bhado ma bhako sabai T haru lai, S samma lagne
 */
export interface IFunctor<A> {
  fa: <T>() => Extends<T, IFunctor<A>>;
  fmap: <B, T>(f: UnaryFunc<A, B>) => Extends<T, IFunctor<B>>;
}
