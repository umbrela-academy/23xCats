import { IApplicative } from '../applicative/applicative.defs';

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
export interface IMonad<T> extends IApplicative<T> {
  bind: <
    S, 
    US extends IMonad<S>
  >(mts: (t: T) => US) => US;
  flat: <
    UT extends IMonad<T>, 
    UTI extends IMonad<UT>
    >(mmt: UTI) => UT;
}
