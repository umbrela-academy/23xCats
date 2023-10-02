export type Extends<T, U> = T extends U ? T : never;

export type NotExtending<T, U> = T extends U ? never : T;