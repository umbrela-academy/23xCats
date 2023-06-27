import { Monad, UnaryFunc } from './type-defs.models';

/**
 *  Generic lists
data List : (elem : Type) -> Type where
   Empty list
  Nil : List elem
   A non-empty list, consisting of a head element and the rest of
   the list.
  (::) : (x : elem) -> (xs : List elem) -> List elem
 * 
*/
export class List<T> implements Monad<T> {
  readonly arr: Array<T> = [];

  private constructor(ta: T[]) {
    this.arr = ta;
  }

  static from<T>(ta: T[]): List<T> {
    return new List(ta);
  }

  static ret<T>(t: T): List<T> {
    return new List([t]);
  }
  pure: (t: T) => List<T> = (t) => new List([t]);

  static flatten<T>(mmt: List<List<T>>): List<T> {
    return mmt.arr[0];
  }
  flat: (mmt: List<List<T>>) => List<T> = (mmt) => mmt.arr[0];

  binder: <S>(mts: (t: T) => List<S>) => List<S> = (mts) =>
    new List(this.arr.map(mts)).arr[0];
  bind: <S>(mt: List<T>) => (mts: (t: T) => List<S>) => List<S> =
    (mt) => (mts) =>
      new List(mt.arr.map(mts)).arr[0];

  apply: <S>(fts: List<(t: T) => S>) => List<S> = (fts) =>
    new List(this.arr.map((t, i) => fts.arr[i](t)));
  appl: <S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    (fts) => (ft) =>
      new List(ft.arr.map((t, i) => fts.arr[i](t)));

  map: <S>(f: UnaryFunc<T, S>) => List<S> = (f) => new List(this.arr.map(f));
  fmap: <S>(f: UnaryFunc<T, S>) => (ft: List<T>) => List<S> = (f) => (ft) =>
    new List(ft.arr.map(f));
}

// eg
const strList = List.from(['a', 'b', 'c']);
console.log(['a', 'b', 'c'].map(s => s.codePointAt(0) ?? 0)); // ZOMG array is a functor
const numList: List<number> = List.from<string>(['a', 'b', 'c']).map((s) => s.codePointAt(0) ?? 0);
console.log('str-to-num', numList)