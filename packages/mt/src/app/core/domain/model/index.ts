import { Quarternion } from '../../algebra/qnion/qnion.defs';
import { Trpl } from './tuple';

export * from './val';
export * from './tuple';

export type StateRecord<X, Y, Z> = {
  posn: Trpl<X, Y, Z>;
  ornt: Trpl<X, Y, Z>;
  cnfg: Trpl<X, Y, Z>;
};

export type StateMatrix<X, Y, Z> = Trpl<
  Trpl<X, Y, Z>,
  Trpl<X, Y, Z>,
  Trpl<X, Y, Z>
>;

/**
 * As a pattern, let's add this also to our contribution guidelines,
 * type FuncTypeName = (unary: InputType) => OutputType
 * e.g. Rec2Matrix, Matrix2Rec above
 * const funcTypeName: FuncTypeName = (i) => // Some implementation that results in an output of type OutputType
 * e.g. matrix2rec, rec2matrix
 */
export type Rec2Matrix = <X, Y, Z>(
  rec: StateRecord<X, Y, Z>
) => StateMatrix<X, Y, Z>;
export const rec2matrix: Rec2Matrix = <X, Y, Z>(rec: StateRecord<X, Y, Z>) =>
  [rec.posn, rec.ornt, rec.cnfg] as unknown as StateMatrix<X, Y, Z>;

export type Matrix2Rec = <X, Y, Z>(
  matrix: StateMatrix<X, Y, Z>
) => StateRecord<X, Y, Z>;
export const matrix2rec: Matrix2Rec = <X, Y, Z>(
  matrix: StateMatrix<X, Y, Z>
) => ({
  posn: matrix[0],
  ornt: matrix[1],
  cnfg: matrix[2],
});

// State is defined without defining space or time
export type State<X, Y, Z> = StateMatrix<X, Y, Z> | StateRecord<X, Y, Z>;
export type QState = State<Quarternion, Quarternion, Quarternion>;
export const recordAttributes = ['posn', 'ornt', 'cnfg'] as const;
export const matrixKeys = [0, 1, 2];
``
export function isRecord<X, Y, Z>(
  s: State<X, Y, Z>
): s is StateRecord<X, Y, Z> {
  const keys = Object.keys(s);
  return recordAttributes.every((i) => keys.includes(i));
}

export function isMatrix<X, Y, Z>(
  s: State<X, Y, Z>
): s is StateMatrix<X, Y, Z> {
  return !isRecord(s);
}

export type RecordKey = 'posn' | 'ornt' | 'cnfg';
export type RecordRow<X, Y, Z> = { [key in RecordKey]: [X, Y, Z] };
export type MatrixKey = 0 | 1 | 2;

export function isState<X, Y, Z>(s: any): s is State<X, Y, Z> {
  const isOfLengthThree = <S, T extends Array<S>>(s: T) => s.length === 3;

  const isRecOfLen3 = (i: RecordKey) => isOfLengthThree(s[i]);
  const hasRecordAttributes = recordAttributes.every((i) =>
    Object.keys(s).includes(i)
  );
  const hasRecordTriples =
    hasRecordAttributes && recordAttributes.every(isRecOfLen3);

  const isMatOfLen3 = (i: MatrixKey) => isOfLengthThree(s[i]);
  const hasMatrixTriples = matrixKeys.every(isMatOfLen3);

  return hasMatrixTriples || hasRecordTriples;
}