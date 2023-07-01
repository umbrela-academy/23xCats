import { Mon, UnaryFunc } from './type-defs.models';
import { Monad } from './type-defs.models';

export type Just<T> = T;
export type Nothing = null;

export class Maybe<T> implements Mon<T> {
  readonly opt: Just<T> | Nothing;

  private constructor(t?: T) {
    this.opt = t ? t : null;
  }

  static pure<T>(t?: T): Maybe<T> {
    return new Maybe(t);
  }

  static flat<T>(mmt: Maybe<Maybe<T>>): Maybe<T> {
    return mmt.opt ?? Maybe.pure();
  }

  static bind: <T, S>(mt: Maybe<T>) => (mts: (t: T) => Maybe<S>) => Maybe<S> =
    (mt) => (mts) =>
      mt.opt ? mts(mt.opt) : Maybe.pure();

  static appl: <T, S>(fts: Maybe<(t: T) => S>) => (ft: Maybe<T>) => Maybe<S> =
    (fts) => (ft) =>
      fts.opt && ft.opt ? Maybe.fmap(fts.opt)(ft) : Maybe.pure();

  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: Maybe<T>) => Maybe<S> =
    (f) => (ft) =>
      ft.opt ? Maybe.pure(f(ft.opt)) : Maybe.pure();
}
