export type Range<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Range<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Range<T>, Range<F>>;
export type AnyUpto<U extends number> = IntRange<0, U>;

// TODO create CharRange

/** Fixed length array of length N and Type T
 * 
 *   const f: FinArray<0, number> = [];
 *   const g: FinArray<5, number> = [1, 2, 3, 4, 5];
 *   console.log(f, g);
 * 
*/
export type FinArray<
  T,
  N extends number,
  R extends T[] = [],
>
  = R['length'] extends N ? R : FinArray<T, N, [...R, T]>;


export type ArrayConcat<
  T,
  Prefix extends (T[] | []),
  Suffix extends (T[] | [])
>
  = [...Prefix, ...Suffix];

/**
 * Usage:
 * const arr: FinArrayConcat<number, [1, 2, 3], [4, 5]> = [1, 2, 3, 4, 5];
 * console.log(arr.length);
*/
export type FinArrayConcat<
  T,
  Prefix extends FinArray<T, number>,
  Suffix extends FinArray<T, number>,
>
  = [...Prefix, ...Suffix];


export type FinArrayConcatFn<
  T,
  M extends number,
  N extends number
>
  = (prefix: FinArray<T, M>) =>
    (suffix: FinArray<T, N>) =>
      FinArray<T, number>;