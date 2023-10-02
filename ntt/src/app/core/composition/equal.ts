/**
 * Guarantees that all numbers in the array are equal
 * 
 * Example:
 *   const allOnes: EqOnly<1> = [1, 1, 1]; // Allowed
 *   const allOnes: EqOnly<1> = [1, 1, 2]; // Type Error
 * 
*/
export type EqOnly<T extends number>
  = T[] extends (infer U)[] ? U extends T ? T[] : never : never;

