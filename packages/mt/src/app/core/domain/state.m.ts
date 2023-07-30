import { IApplicative } from "../algebra/applicative/applicative.defs";
import { UnaryFunc } from "../algebra/function/function.defs";
import { IFunctor } from "../algebra/functor/functor.defs";
import { IMonad } from "../algebra/monad/monad.defs";
import { State, StateMatrix } from "./state.model";

export abstract class StateF<T> implements IFunctor<T> {
  abstract zeroObj: () => T;

  constructor (
    protected readonly state: State<T, T, T>
  ) { }

  fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S> = (f) =>
    this.arr.flat().map((i) => f(i));
  
  static empty<T>(): StateF<T> {
    const zeroes = [0, 0, 0];
    const zeroesOfZeroes = [zeroes, zeroes, zeroes];
    return zeroesOfZeroes as StateMatrix<
  }

  static from<T>(ta?: StateMatrix<T, T, T>): StateF<T> {
    if (!ta) {
      const zO = this.z;
      return new StateF([[th, 0, 0], [], []]);
    } else {
      return new StateF(ta);
    }
  }
}

export class StateM<T> implements IMonad<T> {
  readonly mt: State<T, T, T>; // full stateless
  readonly lft: ListF<T>; // functorial stateful
  readonly lat: ListA<T>; // applicative stateful

  bind: <S>(mts: (t: T) => IMonad<S>) => IMonad<S>;
  flat: (mmt: IMonad<IMonad<T>>) => IMonad<T>;
  pure: (t: T) => IApplicative<T>;
  appl: <S>(fts: IApplicative<(t: T) => S>) => IApplicative<S>;
  fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S>;
}