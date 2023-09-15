import { UnaryFunc } from './algebra/function/function.defs';
import { Mon } from './algebra/monad/monad.defs';

export type Just<T> = T & { __type: 'Just' };
export const mkJust = <T>(t: T) => t as Just<T>;

export type Nothing = null & { __type: 'Nothing' };
export const mkNothing = () => null as Nothing;

export class Maybe<T> implements Mon<T> {
    
  readonly opt?: Just<T> | Nothing;

  private constructor(t?: T) {
    this.opt = t ? mkJust(t) : mkNothing();
  }

  static from<T>(arg?: T): Maybe<T> {
    return arg ? new Maybe(arg) : new Maybe();
  }

  static pure<T>(t?: T): Maybe<T> {
    return new Maybe(t);
  }

  static flat<T>(mmt: Maybe<Maybe<T>>): Maybe<T> {
    return mmt.opt ? mkJust(mmt.opt) : Maybe.pure();
  }

  static bind: <T, S>(mt: Maybe<T>) => (mts: (t: T) => Maybe<S>) => Maybe<S> =
    (mt) => (mts) =>
      mt.opt ? mts(mkJust(mt.opt)) : Maybe.pure();

  static appl: <T, S>(fts: Maybe<(t: T) => S>) => (ft: Maybe<T>) => Maybe<S> =
    (fts) => (ft) =>
      ft.opt ? Maybe.fmap(mkJust(fts.opt))(ft) : Maybe.pure();

  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: Maybe<T>) => Maybe<S> =
    (f) => (ft) =>
      ft.opt ? Maybe.pure(f(mkJust(ft.opt))) : Maybe.pure();
}
