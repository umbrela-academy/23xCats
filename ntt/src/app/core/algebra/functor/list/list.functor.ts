import { ListStruct } from '../../../construct/list.struct';
import { UnaryFunc } from '../../function/function.defs';
import { Func } from '../functor.defs';

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
export class ListFunctor<T> extends ListStruct<T> implements Func<T> {
  static fmap: <T, S>(
    f: UnaryFunc<T, S>
  ) => (ft: ListFunctor<T>) => ListFunctor<S> = (f) => (ft) =>
    ListFunctor.from(ft.arr.map(f));
}
