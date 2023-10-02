
/**
 * Guarantees that all numbers in the array are equal
 * 
 * Example:
 *   const allOnes: EqNumsOnly<1> = [1, 1, 2]; // Type Error
 *   const allOnes: EqNumsOnly<1> = [1, 1, 1]; // Allowed
 *   const allOnes: EqNumsOnly<1.5> = [1.5, 1.5, 1.5]; // Type checks too
*/
export type EqNumsOnly<T extends number>
  = T[] extends (infer U)[] ? U extends T ? T[] : never : never;

export type IsEqNumPair<
  T extends number,
  U extends number
> = T extends U ? true : false;

/**
 * Confirm using type check that the pair [x, y] has proof that x === y.
 * 
 * Example:
 * const a = 13 as const;
 * const b = 13 as const;
 * const eq: EqNumPair<[typeof a, typeof b]> = [a, b];
 * console.log(eq);
 * const ab = [42, 42] as [42, 42];
 * const eqAb: EqNumPair<typeof ab> = ab;
 * console.log(eqAb);
 * 
*/
export type EqNumPair<
  TU extends [T, U],
  T extends Readonly<number> = Readonly<number>,
  U extends Readonly<number> = Readonly<number>
> = IsEqNumPair<T, U> extends true ? TU : never;

