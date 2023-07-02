import { ListStruct } from '../../../construct/list.struct';
import { List } from '../../../list.monad';
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

  applCart: <S>(fts: ListA<(t: T) => S>) => ListA<S> = (fts) => this.appl(fts);

  //TODO 
  // Create zipWith function for creating an apply implementation with zipping the functors
  // instead of getting a cartesian product
  // applZipL: <S>(fts: ListA<(t: T) => S>) => ListA<S> = <S>(fts: ListA<(t: T) => S>) => {
  //   const zipped: Functor<S>[] = fts.fmap((ft) => this.fmap(ft));
  //   return zipped.flat();
  // };

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
