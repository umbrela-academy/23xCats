import { ListStruct } from '../../../construct/list.struct';
import { UnaryFunc } from '../../function/function.defs';
import { Appl } from '../applicative.defs';

export class ListApplicative<T> extends ListStruct<T> implements Appl<T> {
  static appl: <T, S>(
    fts: ListApplicative<(t: T) => S>
  ) => (ft: ListApplicative<T>) => ListApplicative<S> = (fts) => (ft) =>
    ListApplicative.from(fts.arr.flatMap((unFunc) => ft.arr.map(unFunc)));

  static pure<T>(t: T | T[]): ListApplicative<T> {
    return Array.isArray(t) ? new ListApplicative(t) : new ListApplicative([t]);
  }

  static fmap: <T, S>(
    f: UnaryFunc<T, S>
  ) => (ft: ListApplicative<T>) => ListApplicative<S> = (f) => (ft) =>
    ListApplicative.from(ft.arr.map(f));
}
