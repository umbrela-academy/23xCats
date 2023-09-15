import { IApplicative } from './algebra/applicative/applicative.defs';
import { UnaryFunc } from './algebra/function/function.defs';
import { IFunctor } from './algebra/functor/functor.defs';
import { IMonad } from './algebra/monad/monad.defs';

export type Just<T> = T & { __type: 'Just' };
const mkJust = <T>(t: T) => t as Just<T>;

export type Nothing = null & { __type: 'Nothing' };
const mkNothing = () => null as Nothing;

// export class Maybe<T> implements IMonad<T> {
    
//   readonly opt?: Just<T> | Nothing;

//   private constructor(t?: T) {
//     this.opt = t ? mkJust(t) : mkNothing();
//   }
//     bind: <S, US extends IMonad<S>>(mts: (t: T) => US) => US;
//     flat: <UT extends IMonad<T>, UTI extends IMonad<UT>>(mmt: UTI) => UT;
//     pure: <U extends IApplicative<T>>(t: T) => U;
//     appl: <S, UF extends IApplicative<(t: T) => S>, US extends IApplicative<S>>(fts: UF) => US;
//     fmap: <S, U extends IFunctor<T>>(f: UnaryFunc<T, S>) => U;

// }
