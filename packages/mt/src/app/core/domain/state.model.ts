import { Quarternion } from "../algebra/qnion/qnion.defs";
import { Trpl } from "./tuple.type";

export type StateRecord<X, Y, Z> = {
  posn: Trpl<X, Y, Z>;
  ornt: Trpl<X, Y, Z>;
  cnfg: Trpl<X, Y, Z>
};

export type StateMatrix<X, Y, Z> = Trpl<
  Trpl<X, Y, Z>,
  Trpl<X, Y, Z>,
  Trpl<X, Y, Z>
>;

export type Rec2Matrix = <X, Y, Z> (rec: StateRecord<X, Y, Z>) => StateMatrix<X, Y, Z>;
export const rec2matrix = <X, Y, Z>
  (rec: StateRecord<X, Y, Z>) => [rec.posn, rec.ornt, rec.cnfg] as Trpl<X, Y, Z>;

export type Matrix2Rec = <X, Y, Z> (matrix: StateMatrix<X, Y, Z>) => StateRecord<X, Y, Z>;
export const matrix2rec: Matrix2Rec = <X, Y, Z>
  (matrix: StateMatrix<X, Y, Z>) => ({
    posn: matrix[0],
    ornt: matrix[1],
    cnfg: matrix[2]
  });

export type State<X, Y, Z> = StateMatrix<X, Y, Z> | StateRecord<X, Y, Z>;
export type QState = State<Quarternion, Quarternion, Quarternion>;

export function isRecord<X, Y, Z>(s: State<X, Y, Z>): s is StateRecord<X, Y, Z> {
  const keys = Object.keys(s);
  return ['posn', 'ornt', 'cnfg'].every(i => keys.includes(i));
}

export function isMatrix<X, Y, Z>(s: State<X, Y, Z>): s is StateMatrix<X, Y, Z> {
  return !isRecord(s);
}