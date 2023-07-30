import { MonoidalVal, mkMonoidalVal } from ".";
import { StateRecord } from "../model";
import { StateF } from "../monad";
import { Trpl } from "../model/tuple";
import { Val } from "../model/val";

export type StateMonoRec<T extends Val> = StateRecord<
  MonoidalVal<T>,
  MonoidalVal<T>,
  MonoidalVal<T>
>;

export const emptyStateF: <
  S extends T,
  T extends MonoidalVal<S> = MonoidalVal<S>
>(
  mEmpty: T
) => StateF<T> = <S extends T, T extends MonoidalVal<S> = MonoidalVal<S>>(
  mEmpty: T
) => {
  const mTTriple = () =>
    [
      mkMonoidalVal(mEmpty),
      mkMonoidalVal(mEmpty),
      mkMonoidalVal(mEmpty),
    ] as Trpl<MonoidalVal<T>, MonoidalVal<T>, MonoidalVal<T>>;
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
