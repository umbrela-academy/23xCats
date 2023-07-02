import { ListStruct } from '../../../construct/list.struct';
import { UnaryFunc } from '../../function/function.defs';
import { List } from '../../monad/list/list.monad';
import { IFunctor } from '../functor.defs';


/**
 * Provides a functorial list as an object.
 * This object actually wraps on top of the actual list functor
 * so that ListM can have List as a state in a functorial closure.
 * 
 * This way, when you need to use fmap you 
 * won't have to add provide the functorial List of type T to those functions each time.
*/
export class ListF<T> extends ListStruct<T> implements IFunctor<T> {
  readonly lt: List<T>;
  readonly arr: T[];

  protected constructor(tOrAt: T | Array<T>) {
    super(tOrAt);
    this.lt = List.from(tOrAt);
    this.arr = this.lt.arr;
  }

  fmap: <S>(f: UnaryFunc<T, S>) => ListF<S> = (f) =>
    ListF.from(this.lt.arr.map(f));


  static from<T>(ta?: T | T[]): ListF<T> {
    const isListStruct = ta instanceof ListF<T>;
    const isArray = Array.isArray(ta);
    
    if (isListStruct) {
      return ta;
    } else if (isArray) {
      return new ListF(ta);
    } else if (!ta) {
      return new ListF([]);
    } else { 
      return new ListF([ta]);
    }
  }

}
