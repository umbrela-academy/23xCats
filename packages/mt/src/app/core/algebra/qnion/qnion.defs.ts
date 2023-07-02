export interface Complex {
  r: number;
  i: number;
}

export type Quarternion = Complex & {
  j: number;
  k: number;
};

export interface Qnion<I, J, K> {
  ternion: Quarternion | number;
  i: I;
  j: J;
  k: K;
}

export type Qua<I, J, K> = Omit<Qnion<I, J, K>, 'ternion'>; // triple
