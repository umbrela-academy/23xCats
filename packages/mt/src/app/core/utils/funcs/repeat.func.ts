export const repeater: <T>(n: number) => (t: T) => Array<T> =
  <T>(n: number) =>
  (t: T) =>
    Array(n).fill(t);
