import { IApplicative } from '../../algebra/applicative/applicative.defs';
import { IFunctor } from '../../algebra/functor/functor.defs';
import { Trpl } from '../model';
import { Val, ValObjT, ValPrim, ValT } from '../model/val';
import { StateMonoRec } from './state.monoid';

type Monoidal<S extends Val, T extends ValT<S> = ValT<S>> = {
  mEmpty: T;
  mAppend: (t: T) => (u: T) => T;
};

export type MonoidalVal<
  S extends Val = Val,
  T extends ValT<S> = ValT<S>
> = Monoidal<T> & {
  val: T;
};

export type MkMonoidalVal = <T extends Val>(
  val: T,
  mEmpty?: T,
  mApply?: (t: T) => (u: T) => T
) => MonoidalVal<Val>;

export const mkMonoidalVal: MkMonoidalVal = <T extends Val>(
  val: T,
  mT?: T,
  mApp?: (t: T) => (u: T) => T
) => {
  const mt = ['string', 'number', 'bigint', 'boolean'].includes(typeof val)
    ? emptyVal(val as ValPrim)
    : emptyObj(val as ValObjT);
  const mEmpty = mT ?? mt;
  const mApply = mApp ?? emptyAppl(val);
  return {
    val,
    mEmpty,
    mAppend: mApply,
  } as MonoidalVal<Val>;
};

export const emptyObj: <T extends ValObjT = ValObjT>(v: T) => T = <
  T extends ValObjT = ValObjT
>(
  v: T
) => {
  const allKeys = Object.keys(v);
  const newVal: object = {};
  allKeys.forEach((k) => ((newVal as any)[k] = emptyVal((newVal as any)[k])));
  return newVal as T;
};

export const emptyVal: (v: ValPrim | ValObjT) => ValPrim | ValObjT = <
  T extends ValPrim = ValPrim
>(
  v: T
) => {
  if (!v) return 0;
  switch (typeof v) {
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'bigint':
      return BigInt(0);
    case 'boolean':
      return false;
    case 'object':
      return emptyObj(v);
    default:
      return 0;
  }
};

export type MonoidalFunctor<T extends Val = Val> = MonoidalVal<StateMonoRec<T>> & IFunctor<StateMonoRec<T>>;
export type MonoidalApplicative<T extends Val = Val> = MonoidalVal<StateMonoRec<T>> & IApplicative<StateMonoRec<T>>;

export type BinaryOp<T extends Val> = (x: Val) => (y: Val) => ValT<T>;
export const emptyAppl: <T extends Val>(v: ValT<T>) => BinaryOp<T> = <
  T extends Val
>(
  v: ValT<T>
) => {
  switch (typeof v) {
    case 'string':
      return (x: Val) => (y: Val) => ((x as string) + (y as string)) as ValT<T>;
    case 'number':
      return (x: Val) => (y: Val) => ((x as number) + (y as number)) as ValT<T>;
    case 'bigint':
      return (x: Val) => (y: Val) =>
        (BigInt(x as bigint) + BigInt(y as bigint)) as ValT<T>;
    case 'boolean':
      return (x: boolean) => (y: boolean) => (x || y) as ValT<T>;
    default:
      return (x) => (y) => (x && y) as ValT<T>;
  }
};

export type MonoValTrpl<T extends Val> = Trpl<MonoidalVal<T>, MonoidalVal<T>, MonoidalVal<T>>;

export * from './state.monoid';