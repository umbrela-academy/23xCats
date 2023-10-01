export type Val = string | number | boolean | bigint | object;
export type ValT<T extends Val = Val> = T;
export type ValPrim = string | number | boolean | bigint;
export type ValObjT = object;
export type ValRecD = Record<string | number | symbol, unknown>;