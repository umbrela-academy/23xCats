import { UnaryFunc } from "../../algebra/function/function.defs";
import { IFunctor } from "../../algebra/functor/functor.defs";
import { ListF } from "../../algebra/functor/list/list.f";
import { StateRecord, rec2matrix } from "../model";
import { MonoidalFunctor, MonoidalVal, emptyAppl, emptyObj } from "../monoid";
import { StateMonoRec, emptyStateF } from "../monoid/state.monoid";
import { Trpl } from "../model/tuple";
import { Val } from "../model";

export class StateF<T extends Val> implements MonoidalFunctor<T> {
  val: StateMonoRec<T>;
  mEmpty: T;

  constructor(protected readonly state: MonoidalVal<StateMonoRec<T>>) {
    this.val = state.val;
    this.mEmpty = state.mEmpty.posn[0].mEmpty;
  }

  empty = emptyStateF;

  mApply = (t: T) => (u: T) => Math.random() > 0.5 ? t : u;

  fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S> = <S>(f: UnaryFunc<T, S>) =>
    ListF.from(
      rec2matrix(this.val).flatMap(
        (i: Trpl<MonoidalVal<T>, MonoidalVal<T>, MonoidalVal<T>>) => f(i[0].val)
      )
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
