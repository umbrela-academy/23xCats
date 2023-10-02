export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export type Immutable<Type> = Readonly<Type>;