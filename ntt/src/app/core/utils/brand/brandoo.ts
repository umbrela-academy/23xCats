const nomType: 'nomType' = 'nomType' as const;
type BIdentifier<B> = { readonly [nomType]: B };

export type BId<B, T = string> = T & BIdentifier<B>;
export type BNatId<B> = BId<B, number>;
export type BStrId<B> = BId<B, string>;

declare const __metaType: unique symbol;
export type Typer<B> = { [__metaType]: B };

export type Typify<
  T,
  B extends string | number = string
> = T & Typer<B>;
