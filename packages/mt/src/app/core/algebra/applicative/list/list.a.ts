import { ListStruct } from '../../../construct/list.struct';
import { List } from '../../../list.monad';
import { zip } from '../../../utils/funcs/zip-with.func';
import { UnaryFunc } from '../../function/function.defs';
import { ListF } from '../../functor/list/list.f';
import { IApplicative } from '../applicative.defs';


/**
 * Provides an applicative list as an object.
 * This object actually wraps on top of the actual list applicative
 * so that ListM can have List as a state in a applicative closure.
 * 
 * This way, when you need to use fmap or appl you 
 * won't have to add provide the Applicative List of type T to those functions each time.
*/
export class ListA<T> extends ListStruct<T> implements IApplicative<T> {
  readonly mt: List<T>; // full monad
  private readonly lft: ListF<T>; // functorial statefull
  readonly arr: T[];
  protected constructor(lt: T | Array<T>) {
    super(lt);
    this.mt = List.from(lt);
    this.arr = this.mt.arr;
    this.lft = ListF.from(lt);
  }

  fmap: <S>(f: UnaryFunc<T, S>) => ListA<S> = <S>(f: UnaryFunc<T, S>) =>
    ListA.from(this.lft.fmap(f).arr);

  pure: (t: T) => ListA<T> = (t) => new ListA(t);

  appl: <S>(fts: ListA<(t: T) => S>) => ListA<S> = (fts) =>
    ListA.from(fts.arr.flatMap((unFunc) => this.mt.arr.map(unFunc)));
  
  
  /**
   * This implementation takes a cartesian product of the functions with the values.
   * [f1, f2, f3] applCart [v1, v2, v3] = [
   *      f1(v1), f1(v2), f1(v3),
   *      f2(v1), f2(v2), f2(v3),
   *      f3(v1), f3(v2), f3(v3),
   * ]
  */
  applCart: <S>(fts: ListA<(t: T) => S>) => ListA<S> = (fts) => this.appl(fts);

  /**
   * This implementation zips the functions with the values.
   * [f1, f2, f3] applZip [v1, v2, v3] = [f1(v1), f2(v2), f3(v3)]
  */
  applZip: <S>(fts: ListA<(t: T) => S>) => ListA<S> = <S>(fts: ListA<(t: T) => S>) => {
    const zipped: [UnaryFunc<T, S>, T][] = zip<UnaryFunc<T, S>, T>(fts.arr)(this.mt.arr);
    return ListA.from(zipped.flatMap(([unFunc, unVal]) => unFunc(unVal)));
  };

  static from<T>(ta?: T | T[]): ListA<T> {
    const isListStruct = ta instanceof ListA<T>;
    const isArray = Array.isArray(ta);
    
    if (isListStruct) {
      return ta;
    } else if (isArray) {
      return new ListA(ta);
    } else if (!ta) {
      return new ListA([]);
    } else { 
      return new ListA([ta]);
    }
  }
}
