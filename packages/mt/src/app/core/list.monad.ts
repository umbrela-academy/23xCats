import { IMonad, Mon, Monad, UnaryFunc } from './type-defs.models';

/**
 *  Generic list monad implementation. It uses array underneath. Arrays are also already monadic btw.
data List : (elem : Type) -> Type where
   Empty list
  Nil : List elem
   A non-empty list, consisting of a head element and the rest of
   the list.
  (::) : (x : elem) -> (xs : List elem) -> List elem
 *
*/
export class List<T> implements Mon<T> {
  readonly arr: Array<T>;

  private constructor (ta: T[]) {
    this.arr = ta;
  }

  static from<T>(ta: T[]): List<T> {
    return new List(ta);
  }

  static cons: <T>(t: T) => (ts: List<T>) => List<T> =
    t => ts => List.from(ts.arr.concat([t]));

  static pure<T>(t: T): List<T> {
    return new List([t]);
  }


  static flat<T>(mmt: List<List<T>>): List<T> {
    return [...mmt.arr.flat()].reduce((a, b) => List.from(a.arr.concat(b.arr)));
  }

  static bind: <T, S>(mt: List<T>) => (mts: (t: T) => List<S>) => List<S> =
    (mt) => (mts) =>
      List.from(mt.arr.flatMap(mts).flatMap((a) => a.arr));


  static appl: <T, S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    (fts) => (ft) =>
      List.from(fts.arr.flatMap(unFunc => ft.arr.map(unFunc)));

  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: List<T>) => List<S> =
    (f) => (ft) =>
      List.from(ft.arr.map(f));
}


export class ListM<T> extends Monad<T> implements IMonad<T> {
  readonly mt: List<T>;

  private constructor (mt: Array<T>) {
    super();
    this.mt = List.from(mt);
  }

  static from<T>(ta: T[]): ListM<T> {
    return new ListM(ta);
  }

  cons<T>(t: T) {
    return (ts: ListM<T>) => ListM.from(ts.mt.arr.concat([t]));
  }

  pure: <T>(t: T) => ListM<T> = (t) => ListM.from([t]);

  flat: <T>(mmt: ListM<ListM<T>>) => ListM<T> = (mmt) => {
    return [...mmt.mt.arr.flat()].reduce((a, b) =>
      ListM.from(a.mt.arr.concat(b.mt.arr))
    );
  }

  bind: <S>(mts: (t: T) => ListM<S>) => ListM<S> =
    (mts) => ListM.from(this.mt.arr.flatMap(mts).flatMap((a) => a.mt.arr));

  appl: <S>(fts: ListM<(t: T) => S>) => ListM<S> =
    (fts) =>
      ListM.from(fts.mt.arr.flatMap((unFunc) => this.mt.arr.map(unFunc)));

  fmap: <S>(f: UnaryFunc<T, S>) => ListM<S> =
    (f) =>
      ListM.from(this.mt.arr.map(f));
}
