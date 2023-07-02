import { Func, IFunctor } from '../functor/functor.defs';

/**
 * interface Functor f => Applicative (f : Type -> Type) where
    pure  : a -> f a
    (<*>) : f (a -> b) -> f a -> f b
 *
    Then there are applicatives. It could take T, take it to Functor<T>
*/
export abstract class Appl<T> extends Func<T> {
  static pure: <T>(t: T) => Appl<T>;
  static appl: <T, S>(fts: Appl<(t: T) => S>) => (ft: Appl<T>) => Func<S>;
}

export interface IApplicative<T> extends IFunctor<T> {
  pure: (t: T) => IApplicative<T>;
  appl: <S>(fts: IApplicative<(t: T) => S>) => IApplicative<S>;
}
