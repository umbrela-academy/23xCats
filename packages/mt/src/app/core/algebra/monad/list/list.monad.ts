import { ListStruct } from '../../../construct/list.struct';
import { UnaryFunc } from '../../function/function.defs';
import { Mon } from '../monad.defs';

/**
 *  Generic list monad implementation. It uses array underneath. Arrays are also already monadic btw.
 * We just add our own syntactic sugar to define the new List structure which can later participate in
 * our monadic/categorical ecosystem. E.g. if you 'lift' your JS/TS arrays to this List, you will be able
 * to use it in our 'do' pipes for chaining imperative style code into a monadic bind.
 * 
    data List : (elem : Type) -> Type where
      Empty list
      Nil : List elem
      A non-empty list, consisting of a head element and the rest of
      the list.
      (::) : (x : elem) -> (xs : List elem) -> List elem
 *
*/
export class List<T> extends ListStruct<T> implements Mon<T> {
  static pure<T>(t: T | T[]): List<T> {
    return Array.isArray(t) ? new List(t) : new List([t]);
  }

  static flat<T>(mmt: List<List<T>>): List<T> {
    return [...mmt.arr.flat()].reduce((a, b) => List.from(a.arr.concat(b.arr)));
  }

  static bind: <T, S>(mt: List<T>) => (mts: (t: T) => List<S>) => List<S> =
    (mt) => (mts) =>
      List.from(mt.arr.flatMap(mts).flatMap((a) => a.arr));

  static appl: <T, S>(fts: List<(t: T) => S>) => (ft: List<T>) => List<S> =
    (fts) => (ft) =>
      List.from(fts.arr.flatMap((unFunc) => ft.arr.map(unFunc)));

  static fmap: <T, S>(f: UnaryFunc<T, S>) => (ft: List<T>) => List<S> =
    (f) => (ft) =>
      List.from(ft.arr.map(f));
}
