const nomType: 'nomType' = 'nomType' as const;
type BIdentifier<B> = { [nomType]: B };

export type BId<B, T = string> = T & BIdentifier<B>;
export type BNatId<B> = BId<B, number>;
export type BStrId<B> = BId<B, string>;