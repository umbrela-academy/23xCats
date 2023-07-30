import { Trpl } from "../model/tuple";

type TXOr<X, Y, Z> = X | Y | Z;

export type PositionMap
  = <X, Y, Z>(func: (t: TXOr<X, Y, Z>) => typeof t) =>
    (posn: Trpl<X, Y, Z>) =>
      Trpl<X, Y, Z>;
export const positionMap: PositionMap
  = <X, Y, Z>(func: (t: TXOr<X, Y, Z>) => typeof t) =>
    (posn: Trpl<X, Y, Z>) =>
      [...posn].map(i => func(i)) as Trpl<X, Y, Z>;


export type OrientationMap = PositionMap;
export type ConfigurationMap = PositionMap;

// export type Mapper = (i1: )