import { Monad, UnaryFunc } from './type-defs.models';

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
export class List<T> implements Monad<T> {
  readonly arr: Array<T> = [];

  private constructor(ta: T[]) {
    this.arr = ta;
  }

  static from<T>(ta: T[]): List<T> {
    return new List(ta);
  }

  static cons<T>(t: T) {
    return (ts: List<T>) => List.from(ts.arr.concat([t]));
  }
  cons: (t: T) => (ts: List<T>) => List<T>
   = t => ts => List.from(ts.arr.concat([t]));

  static ret<T>(t: T): List<T> {
    return new List([t]);
  }
  pure: (t: T) => List<T> = (t) => List.from([t]);

  static flat<T>(mmt: List<List<T>>): List<T> {
    return List.from([...mmt.arr.flat()]);
  }
  flat: (mmt: List<List<T>>) => List<T>
    = (mmt) => List.from([...mmt.arr.flat()]);

  bind: <S>(mt: List<T>) => (mts: (t: T) => List<S>) => List<S>
    = (mt) => (mts) => List.from(List.from(mt.arr.flatMap(mts)).arr.flatMap(a => a.arr));
  static bind: <T, S>(mt: List<T>) => (mts: (t: T) => List<S>) => List<S> =
    (mt) => (mts) => List.from(List.from(mt.arr.flatMap(mts)).arr.flatMap(a => a.arr));

  appl: <S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    (fts) => (ft) => List.from(ft.arr.map((t, i) => fts.arr[i](t)));
  static appl: <T, S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    (fts) => (ft) =>
      List.from(ft.arr.map((t, i) => fts.arr[i](t)));

  fmap: <S>(f: UnaryFunc<T, S>) => (ft: List<T>) => List<S>
    = (f) => ft => List.from(ft.arr.map(f));
  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: List<T>) => List<S>
    = (f) => (ft) => List.from(ft.arr.map(f));
}

// eg
// const strList: List<string> = List.from(['a', 'b', 'c']);
// console.log(['a', 'b', 'c'].map(s => s.codePointAt(0) ?? 0)); // ZOMG array is a functor
// const numList: (ft: List<string>) => List<number>
//   = List.from<string>(['a', 'b', 'c']).fmap((s) => s.codePointAt(0) ?? 0);
// const unFunc = (s) => s.codePointAt(0) ?? 0;
// const numList2: List<number> = List.fmap(unFunc)(List.from([1, 2, 3]));
// const numSingleton = (t: number) => List.from([t, t * 2, t * 3]);
// const unFunc10 = s => parseInt(s) * 10;
// const numList10er = List.fmap(unFunc10)(List.from(['1','2','3']));
// const tToListOfT = t => List.from([t, t + 10, t + 100]);
//
// List.bind(numList10er)(tToListOfT);

