// import { ListStruct } from '../../../construct/list.struct';
// import { UnaryFunc } from '../../function/function.defs';
// import { List } from '../../monad/list/list.monad';
// import { IFunctor } from '../functor.defs';


// /**
//  * Provides a functorial list as an object.
//  * This object actually wraps on top of the actual list functor
//  * so that ListM can have List as a state in a functorial closure.
//  * 
//  * This way, when you need to use fmap you 
//  * won't have to add provide the functorial List of type T to those functions each time.
// */
// export class ListF<T> extends ListStruct<T> implements IFunctor<T> {
//   readonly lt: List<T>;
//   readonly arr: Array<T>;

//   protected constructor(tOrAt: T | Array<T>) {
//     super(tOrAt);
//     this.lt = List.from(tOrAt);
//     this.arr = this.lt.arr;
//   }

//   fmap: <S, U extends IFunctor<T>>(f: UnaryFunc<T, S>) => U
//     = <S, U extends IFunctor<T>>(f: UnaryFunc<T, S>) => ListF.from(this.lt.arr.map(f)) as unknown as U;


//   static from<T>(ta?: T | T[]): ListF<T> {
//    if (!ta) {
//       return new ListF([] as Array<T>);
//     } else { 
//       return new ListF(ta);
//     }
//   }

// }
