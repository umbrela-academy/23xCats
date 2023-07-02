import { Appl, IApplicative } from '../applicative/applicative.defs';

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
export abstract class Mon<T> extends Appl<T> {
  static bind: <T, S>(mt: Mon<T>) => (mts: (t: T) => Mon<S>) => Mon<S>;
  static flat: <T>(mmt: Mon<Mon<T>>) => Mon<T>;
}
export interface IMonad<T> extends IApplicative<T> {
  bind: <S>(mts: (t: T) => IMonad<S>) => IMonad<S>;
  flat: (mmt: IMonad<IMonad<T>>) => IMonad<T>;
}
