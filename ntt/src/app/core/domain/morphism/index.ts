import { QState, State } from "../model";

export type Transition<X, Y, Z> = (s: State<X, Y, Z>) => State<X, Y, Z>;
export type QTransMorph = (s: QState) => QState;

export type Transformation<X, Y, Z> = (t: Transition<X, Y, Z>) => Transition<X, Y, Z>;
export type QNatTrans = (t: QTransMorph) => QTransMorph;