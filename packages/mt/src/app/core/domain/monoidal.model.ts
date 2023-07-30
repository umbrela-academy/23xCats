import { IFunctor } from "../algebra/functor/functor.defs";

export type Val = string | number | boolean | bigint | object;
export type ValT<T extends Val> = T; 
export type ValPrim = string | number | boolean | bigint;
export type ValObjT = object;
export type ValRecD = Record<string | number | symbol, unknown>;

export type Monoidal<T extends Val = Val> = {
  mEmpty: T;
  mApply: (t: T) => (u: T) => T;
};

export type MkMonoidalVal = <T extends ValObjT = ValObjT>(
  val: T
) => (mEmpty: T) => (mApply: (t: T) => (u: T) => T) => MonoidalVal<T>;

export const mkMonoidalVal: MkMonoidalVal =
  <T extends ValObjT = ValObjT>(val: T) =>
  (mT?: T) =>
  (mApp?: (t: T) => (u: T) => T) => {
    const mEmpty = mT ?? emptyObj(val);
    const mApply = mApp ?? emptyAppl(val);
    return {
      val,
      mEmpty,
      mApply,
    };
  };

export type BinaryOp<T extends Val> = (x: Val) => (y: Val) => ValT<T>;
export const emptyAppl: <T extends Val>(v: ValT<T>) => BinaryOp<T>
  = <T extends Val>(v: ValT<T>) => {
    switch (typeof v) {
      case "string":
        return (x: Val) => (y: Val) => ((x as string) + (y as string)) as ValT<T>;
      case "number":
        return (x: Val) => (y: Val) => ((x as number) + (y as number)) as ValT<T>;
      case "bigint":
        return (x: Val) => (y: Val) => (BigInt(x as bigint) + BigInt(y as bigint)) as ValT<T>;
      case "boolean":
        return (x: boolean) => (y: boolean) => (x || y) as ValT<T>;
      default:
        return (x) => (y) => (x && y) as ValT<T>;
    }
};

export const emptyObj: <T extends ValObjT = ValObjT>(v: T) => T
  = <T extends ValObjT = ValObjT>(v: T) => {
  const allKeys = Object.keys(v);
  const newVal: object = {};
  allKeys.forEach((k) => ((newVal as any)[k] = emptyVal((newVal as any)[k])));
  return newVal as T;
};

export const emptyVal: (v: ValPrim) => ValPrim
  =  <T extends ValPrim = ValPrim>(v: T) => {
  if (!v) return 0;
  const typed = typeof v;
  switch (typed) {
    case 'string':
      return '';
    case 'number':
      return 0;
    case 'bigint':
      return BigInt(0);
    case 'boolean':
      return false;
    default:
      return 0;
  }
};

export type MonoidalVal<T extends Val = Val> = Monoidal<T> & {
  val: T;
};

export type MonoidalFunctor<T extends Val = Val> = Monoidal<T> & IFunctor<T>;
