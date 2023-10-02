import { Typify } from "../brand/brandoo";

export type Comparision = -1 | 0 | 1;

export type ComparableA<T = unknown> = {
  compare: (a: ComparableA<T>) => Comparision;
}

export type ComparableB<T = unknown>
  = Typify<ComparableA<T>, "Comparable">;

export class ComparableC<T = unknown>
  implements ComparableA<T> {

  readonly value: ComparableB<T>;

  private constructor (value: T) {
    this.value = value as ComparableB<T>;
  }

  private readonly normalize = (comparision: number) =>
    comparision < 0 ? - 1
      : comparision === 0 ? 0
        : 1;

  readonly compare = (ta: ComparableA<T>) =>
    this.normalize(JSON.stringify(this.value)
      .localeCompare(JSON.stringify(ta)));

  static of = <T = unknown>(value: T) =>
    new ComparableC<T>(value);

  static compare = <T = unknown>(
    a: T,
    b: T
  ) => ComparableC.of(a).compare(ComparableC.of(b).value);

}

export type Comparable<T> = T extends ComparableA ? T : never;

export type ComparableArray = ComparableA[];
export type ComparableArrA<T> = ComparableA<T>[];
export type ComparableArrB<T> = ComparableB<T>[];
export type ComparableArrC<T> = ComparableC<T>[];
