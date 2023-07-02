import { ListStruct } from '../../../construct/list.struct';
import { UnaryFunc } from '../../function/function.defs';
import { Func, IFunctor } from '../functor.defs';

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
export class ListFunctor<T> extends ListStruct<T> implements IFunctor<T> {
  fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S>;
}
