import { MonoValTrpl, MonoidalVal, emptyAppl, emptyObj, mkMonoidalVal } from ".";
import { StateRecord, matrixKeys, recordAttributes } from "../model";
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
    mAppend: (t) => (u) => Math.random() > 0.5 ? t : u,
  };
  return new StateF<T>(sMonoidal);
};

export type StateRecOp<T extends Val> = (a: StateMonoRec<T>) => (b: StateMonoRec<T>) => StateMonoRec<T>;
export const mkMonoidal: <T extends Val> (
    ta: StateMonoRec<T>,
    mT?: StateMonoRec<T>,
    mApply?: StateRecOp<T>
) => MonoidalVal<StateMonoRec<T>> 
= <T extends Val> (
    ta: StateMonoRec<T>,
    mT?: StateMonoRec<T>,
    mApply?: StateRecOp<T>
) => ({
    val: ta,
    mEmpty: mT ?? emptyObj(ta),
    mAppend:
        mApply ??
        emptyAppl<StateMonoRec<T>>(
            ta
        ),
}) as MonoidalVal<StateMonoRec<T>>;

export const mkMAppend: <T extends Val> () => (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => StateMonoRec<T>
    = <T extends Val> () =>  {
    return (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => {
        return recordAttributes.map((k) => ({
            [k]: matrixKeys.map((_, index) => 
                    mkMonoidalVal(
                        t[k][index].mAppend(u[k][index].val)
                    )) as MonoValTrpl<T>
                })).reduce((acc, cur) => ({...acc, ...cur}), {}) as StateMonoRec<T>;
    };
}