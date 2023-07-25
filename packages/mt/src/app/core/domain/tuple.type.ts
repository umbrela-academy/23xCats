import { Qnion, Quarternion } from '../algebra/qnion/qnion.defs';

export type None = null | undefined | void; //0

export type Sngl<T> = T; //1
export type Pair<T, U> = [Sngl<T>, Sngl<U>]; //2
export type Trpl<T, U, V> = [Sngl<T>, Pair<U, V>]; //3
export type Quad<T, U, V, W> = [Sngl<T>, Trpl<U, V, W>]; //4
export type PenT<T, U, V, W, X> = [Sngl<T>, Quad<U, V, W, X>]; //5
export type SexT<T, U, V, W, X, Y> = [Sngl<T>, PenT<U, V, W, X, Y>]; //6
export type SepT<T, U, V, W, X, Y, Z> = [Sngl<T>, SexT<U, V, W, X, Y, Z>]; //7
export type Octo<T, U, V, W, X, Y, Z, A> = [Sngl<T>, SepT<U, V, W, X, Y, Z, A>]; //8
export type NonT<T, U, V, W, X, Y, Z, A, B> = [Sngl<T>, Octo<U, V, W, X, Y, Z, A, B>]; //9

export type NTpl<T, U, V, W, X, Y, Z, A, B> =
  | Sngl<T>
  | Pair<T, U>
  | Trpl<T, U, V>
  | Quad<T, U, V, W>
  | PenT<T, U, V, W, X>
  | SexT<T, U, V, W, X, Y>
  | SepT<T, U, V, W, X, Y, Z>
  | Octo<T, U, V, W, X, Y, Z, A>
  | NonT<T, U, V, W, X, Y, Z, A, B>;

export type Ordering<NTpl> = (m: NTpl) => (n: NTpl) => -1 | 0 | 1;

export type LT<NTpl> = (m: NTpl) => (n: NTpl) => -1;
export type GT<NTpl> = (m: NTpl) => (n: NTpl) => 1;
export type EQ<NTpl> = (m: NTpl) => (n: NTpl) => 0;

/* 
*  TODO define GoodEnough and Enough 
*/
export type GoodEnough = ();

/**
 * 2 ^ 2 = 4
 * 2 ^ 3 = 8
*/
export type Tuple<T, U, V, W, X, Y, Z, A> =
  | Pair<T, U> //2
  | Trpl<T, U, V> //3 
  | Quad<T, U, V, W> //4
  | Octo<T, U, V, W, X, Y, Z, A>; //8

export type QnionTUTime<T, U, Time> = Qnion<T, U, Time>;
export type QnionTUVTime<T, U, V, Time> = Qnion<T, [U, V], Time>;
export type QnionTUVWTime<T, U, V, W, Time> = Qnion<T, [U, V, W], Time>;
export type QnionTUVWXYZATime<T, U, V, W, X, Y, Z, A, Time> = Qnion<T, [U, V, W, X, Y, Z, A], Time>;

/**
 * There is no notion of time alone without space in this system.
 * either imaginary 2D & TimeD
 * or     imaginary 3D & TimeD
 * or     imaginary 4D & TimeD
 * or     imaginary 8D & TimeD
 * where TimeD = Quaternion
*/
export type Time<T, U, V, W, X, Y, Z, A> =
  | QnionTUTime<T, U, Quarternion>
  | QnionTUVTime<T, U, V, Quarternion>
  | QnionTUVWTime<T, U, V, W, Quarternion>
  | QnionTUVWXYZATime<T, U, V, W, X, Y, Z, A, Quarternion>;
export type Time2S = QnionTUTime<number, number, Quarternion>;
export type Time3S = QnionTUVTime<number, number, number, Quarternion>;
export type Time4S = QnionTUVWTime<number, number, number, number, Quarternion>;
export type Time8S = QnionTUVWXYZATime<
  number, number, number, number, number, number, number, number, Quarternion
>;
export type QTime = Time3S;
export type NaiveQTime = Time2S;

type TU = 't' | 'u';
type TUV = TU | 'v';
type TUVW = TUV | 'w';
type TUVWXYZA = TUVW | 'x' | 'y' | 'z' | 'a';

type TUSpace<T, U, Time>
  = { [key in keyof TU]: QnionTUTime<T, U, Time> };
type TUVSpace<T, U, V, Time>
  = { [key in keyof TUV]: QnionTUVTime<T, U, V, Time> };
type TUVWSpace<T, U, V, W, Time>
  = { [key in keyof TUVW]: QnionTUVWTime<T, U, V, W, Time> };
type TUVWASpace<T, U, V, W, X, Y, Z, A, Time>
  = { [key in keyof TUVWXYZA]: QnionTUVWXYZATime<T, U, V, W, X, Y, Z, A, Time> };

/**
* There is no notion of space alone in this system.
* either imaginary 2D & TimeD
* or     imaginary 3D & TimeD
* or     imaginary 4D & TimeD
* or     imaginary 8D & TimeD
* where TimeD = Quaternion
*/
export type Space<T, U, V, W, X, Y, Z, A> =
  | TUSpace<T, U, Quarternion>
  | TUVSpace<T, U, V, Quarternion>
  | TUVWSpace<T, U, V, W, Quarternion>
  | TUVWASpace<T, U, V, W, X, Y, Z, A, Quarternion>;

export type Space2D = TUSpace<number, number, Quarternion>;
export type Space3D = TUVSpace<number, number, number, Quarternion>;
export type Space4D = TUVWSpace<number, number, number, number, Quarternion>;
export type Space8D = TUVWASpace<number, number, number, number, number, number, number, number, Quarternion>;

export type QPair<T, U, Time> =
  { value: Pair<T, U> } & TUSpace<T, U, Time>;
export type QTrpl<T, U, V, Time> =
  { value: Trpl<T, U, V> } & TUVSpace<T, U, V, Time>;
export type QQuad<T, U, V, W, Time> =
  { value: Quad<T, U, V, W> } & TUVWSpace<T, U, V, W, Time>;
export type QOcto<T, U, V, W, X, Y, Z, A, Time> =
  { value: Octo<T, U, V, W, X, Y, Z, A> } & TUVWASpace<T, U, V, W, X, Y, Z, A, Time>

/**
 * A QTuple may be one slice of a matrix representing either
 * 2, 3, 4 or 8 dimensional space with a Q
*/
export type QTuple<T, U, V, W, X, Y, Z, A> =
  | QPair<T, U, Quarternion> // 2D Games
  | QTrpl<T, U, V, Quarternion> // 3D Games
  | QQuad<T, U, V, W, Quarternion> // Real life
  | QOcto<T, U, V, W, X, Y, Z, A, Quarternion>; // Research Projects