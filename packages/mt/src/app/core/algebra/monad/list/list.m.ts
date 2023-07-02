import { ListStruct } from '../../../construct/list.struct';
import { zip } from '../../../utils/funcs/zip-with.func';
import { ListA } from '../../applicative/list/list.a';
import { UnaryFunc } from '../../function/function.defs';
import { ListF } from '../../functor/list/list.f';
import { IMonad } from '../monad.defs';
import { List } from './list.monad';

/**
 * Provides a monadic list as an object.
 * This object actually wraps on top of the actual list monad
 * so that ListM can have List as a state in a monadic closure.
 * 
 * This way, when you need to use fmap, appl, bind or flat, you 
 * won't have to add provide the List Monad of type T to those functions each time.
*/
export class ListM<T> extends ListStruct<T> implements IMonad<T> {
  readonly mt: List<T>; // full stateless
  private readonly lft: ListF<T>; // functorial statefull
  private readonly lat: ListA<T>; // applicative stateful

  private constructor(tOrAt: T | Array<T>) {
    super(tOrAt);
    this.mt = List.from(tOrAt);
    this.lat = ListA.from(tOrAt);
    this.lft = ListF.from(tOrAt);
  }

  static from<T>(ta?: T | T[]): ListM<T> {
    const isListStruct = ta instanceof ListM<T>;
    const isArray = Array.isArray(ta);
    
    if (isListStruct) {
      return ta;
    } else if (isArray) {
      return new ListM(ta);
    } else if (!ta) {
      return new ListM([]);
    } else { 
      return new ListM([ta]);
    }
  }

  // from Functor
  fmap: <S>(f: UnaryFunc<T, S>) => ListM<S> = <S>(f: UnaryFunc<T, S>) =>
    ListM.from(this.lft.fmap(f).arr);

  //from Applicative
  pure: (t: T) => ListM<T> = (t) => ListM.from(this.lat.pure(t).arr);

  appl: <S>(fts: ListA<(t: T) => S>) => ListM<S>
    = (fts) => ListM.from(this.lat.appl(fts).arr);
  
  /**
   * This implementation takes a cartesian product of the functions with the values.
   * [f1, f2, f3] applCart [v1, v2, v3] = [
   *      f1(v1), f1(v2), f1(v3),
   *      f2(v1), f2(v2), f2(v3),
   *      f3(v1), f3(v2), f3(v3),
   * ]
  */
  applCart: <S>(fts: ListA<(t: T) => S>) => ListM<S>
    = (fts) => this.appl(fts);
  
  /**
   * This implementation zips the functions with the values.
   * [f1, f2, f3] applZip [v1, v2, v3] = [f1(v1), f2(v2), f3(v3)]
  */
  applZip: <S>(fts: ListA<(t: T) => S>) => ListA<S> = <S>(fts: ListA<(t: T) => S>) => {
    const zipped: [UnaryFunc<T, S>, T][] = zip<UnaryFunc<T, S>, T>(fts.arr)(this.mt.arr);
    return ListA.from(zipped.flatMap(([unFunc, unVal]) => unFunc(unVal)));
  };


  //all from Monad itself
  flat: (mmt: ListM<ListM<T>>) => ListM<T> = (mmt) => {
    return [...mmt.mt.arr.flat()].reduce((a, b) =>
      ListM.from(a.mt.arr.concat(b.mt.arr))
    );
  };

  bind: <S>(mts: (t: T) => ListM<S>) => ListM<S> = (mts) =>
    ListM.from(this.mt.arr.flatMap(mts).flatMap((a) => a.mt.arr));
}
