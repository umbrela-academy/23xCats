export interface FlatKV {
    [key: string | number | symbol]: string | number;
}

export type ZenFlatKV<K extends string | number | symbol, V> = {
    [key in K]: V;
};