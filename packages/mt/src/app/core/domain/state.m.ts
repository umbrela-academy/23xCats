import { IApplicative } from '../algebra/applicative/applicative.defs';
import { ListA } from '../algebra/applicative/list/list.a';
import { UnaryFunc } from '../algebra/function/function.defs';
import { IFunctor } from '../algebra/functor/functor.defs';
import { ListF } from '../algebra/functor/list/list.f';
import { IMonad } from '../algebra/monad/monad.defs';
import { MonoidalFunctor, MonoidalVal, Val, emptyAppl, emptyObj, mkMonoidalVal } from './monoidal.model';
import {
  State,
  StateRecord,
  rec2matrix
} from './state.model';
import { Trpl } from './tuple.type';

export type StateMonoRec<T extends Val> = StateRecord<
  MonoidalVal<T>,
  MonoidalVal<T>,
  MonoidalVal<T>
>;

export const emptyStateF: <S extends T, T extends MonoidalVal<S> = MonoidalVal<S>> (mEmpty: T) => StateF<T>
  = <S extends T, T extends MonoidalVal<S> = MonoidalVal<S>> (mEmpty: T) => {
    const mTTriple = () =>
      [
        mkMonoidalVal(mEmpty),
        mkMonoidalVal(mEmpty),
        mkMonoidalVal(mEmpty),
      ] as Trpl<
        MonoidalVal<T>,
        MonoidalVal<T>,
        MonoidalVal<T>
      >;
    const s: StateMonoRec<T> = {
      posn: mTTriple(),
      ornt: mTTriple(),
      cnfg: mTTriple(),
    };
    const sMonoidal: MonoidalVal<StateMonoRec<T>> = {
      val: s,
      mEmpty: s,
      mApply: (t) => (u) => Math.random() > 0.5 ? t : u,
    };
    return new StateF<T>(sMonoidal);
  };

export class StateF<T extends Val> implements MonoidalFunctor<T> {
  val: StateMonoRec<T>;
  mEmpty: T;
  // zeroObj: () => StateRecord<T, T, T> = () => this.mEmpty;

  constructor(protected readonly state: MonoidalVal<StateMonoRec<T>>) {
    this.val = state.val;
    this.mEmpty = state.mEmpty.posn[0].mEmpty;
  }

  empty = emptyStateF;

  mApply = (t: T) => (u: T) => Math.random() > 0.5 ? t : u;

  fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S>
    = <S>(f: UnaryFunc<T, S>) => ListF.from(
      rec2matrix(this.val)
        .flatMap((i: Trpl<MonoidalVal<T>, MonoidalVal<T>, MonoidalVal<T>>) => f(i[0].val))
    );

  static from<S extends Val, T extends MonoidalVal<S>>(
    ta: StateMonoRec<T>,
    mT?: StateMonoRec<T>,
    mApply?: (a: StateMonoRec<T>) => (b: StateMonoRec<T>) => StateMonoRec<T>
  ): StateF<T> {
    const monoVal: MonoidalVal<
      StateRecord<MonoidalVal<T>, MonoidalVal<T>, MonoidalVal<T>>
    > = {
      val: ta,
      mEmpty: mT ?? emptyObj(ta),
      mApply:
        mApply ??
        emptyAppl<StateRecord<MonoidalVal<T>, MonoidalVal<T>, MonoidalVal<T>>>(
          ta
        ),
    };
    return new StateF(monoVal);
  }
}

export abstract class StateM<T> implements IMonad<T> {
  abstract readonly mt: State<T, T, T>; // full stateless
  abstract readonly lft: ListF<T>; // functorial stateful
  abstract readonly lat: ListA<T>; // applicative stateful

  abstract bind: <S>(mts: (t: T) => IMonad<S>) => IMonad<S>;
  abstract flat: (mmt: IMonad<IMonad<T>>) => IMonad<T>;
  abstract pure: (t: T) => IApplicative<T>;
  abstract appl: <S>(fts: IApplicative<(t: T) => S>) => IApplicative<S>;
  abstract fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S>;
}
