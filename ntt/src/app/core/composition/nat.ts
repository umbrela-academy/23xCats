export type Zeroic = [];
export type Heroic<T extends unknown[] = unknown[]> = [...T, unknown];

export type NatArr = Zeroic | Heroic;
export type Cardinal<T extends NatArr>
  = T['length'];

