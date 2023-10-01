import { BId } from "../brand/brandoo";

export type Comparision = -1 | 0 | 1;

export type AComparable<T = unknown> = {
  compareFn: (a: T) => (b: T) => Comparision;
}

export type BComparable<T = unknown>
  = AComparable<T> & BId<"Comparable">;

export class CComparable<T = unknown> implements AComparable<T> {
  compareFn = (ta: T) => (tb: T) => JSON.stringify(ta).localeCompare(JSON.stringify(tb)) as Comparision;
}

export type ComparableArray = AComparable[];
export type ComparableArr<T> = AComparable<T>[];

