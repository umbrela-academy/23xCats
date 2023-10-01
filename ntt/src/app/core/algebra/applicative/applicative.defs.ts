import { IFunctor } from '../functor/functor.defs';

/**
 * interface Functor f => Applicative (f : Type -> Type) where
    pure  : a -> f a
    (<*>) : f (a -> b) -> f a -> f b
 *
    Then there are applicatives. It could take T, take it to Functor<T>
*/
export interface IApplicative<T> extends IFunctor<T> {
  pure: <U extends IApplicative<T>>(t: T) => U;
  appl: <
  S, 
  UF extends IApplicative<(t: T) => S>,
  US extends IApplicative<S>
  >(fts: UF) => US;
}
