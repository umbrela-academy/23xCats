import { UnaryFunc } from './algebra/function/function.defs';
import { Mon } from './algebra/monad/monad.defs';
import { zip } from './utils/funcs/zip-with.func';

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

  private constructor(ta: T[]) {
    this.arr = ta;
  }

  static from<T>(ta: T | T[] | List<T>): List<T> {
    const isList = ta instanceof List;
    const isArray = Array.isArray(ta);
    if (isList) {
      return ta;
    } else if (isArray) {
      return new List(ta);
    } else {
      return new List([ta]);
    }
  }

  static empty(): List<null> {
    return List.pure(null);
  }

  cons: <T>(t: T) => (ts: List<T>) => List<T> = (t) => (ts) =>
    List.from(ts.arr.concat([t]));

  static pure<T>(t: T): List<T> {
    return new List([t]);
  }

  static flat<T>(mmt: List<List<T>>): List<T> {
    return [...mmt.arr.flat()].reduce((a, b) => List.from(a.arr.concat(b.arr)));
  }

  static bind: <T, S>(mt: List<T>) => (mts: (t: T) => List<S>) => List<S> =
    (mt) => (mts) =>
      List.from(mt.arr.flatMap(mts).flatMap((a) => a.arr));

  /**
   * This implementation takes a cartesian product of the functions with the values.
   * [f1, f2, f3] applCart [v1, v2, v3] = [
   *      f1(v1), f1(v2), f1(v3),
   *      f2(v1), f2(v2), f2(v3),
   *      f3(v1), f3(v2), f3(v3),
   * ]
   */
  static appl: <T, S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    (fts) => (ft) =>
      List.from(fts.arr.flatMap((unFunc) => ft.arr.map(unFunc)));

  /**
   * This implementation zips the functions with the values.
   * [f1, f2, f3] applZip [v1, v2, v3] = [f1(v1), f2(v2), f3(v3)]
   */
  static applZip: <T, S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    <T, S>(fts: List<(t: T) => S>) =>
    (ft: List<T>) => {
      const zipped: [UnaryFunc<T, S>, T][] = zip<UnaryFunc<T, S>, T>(fts.arr)(
        ft.arr
      );
      return List.from(zipped.flatMap(([unFunc, unVal]) => unFunc(unVal)));
    };

  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: List<T>) => List<S> =
    (f) => (ft) =>
      List.from(ft.arr.map(f));
}
