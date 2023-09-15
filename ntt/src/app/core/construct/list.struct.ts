import { Monoid } from "../algebra/monoid/monoid.defs";
import { Maybe } from "../maybe.monad";
import { Listoid } from "./listoid.defs";

export const next: <T>(arr: Array<T>) => (i: number) => T
    = <T>(arr: Array<T>) => (i: number) => {
        const lastZIndexArr = arr.length - 1;
        if (i < 0) {
          return next(arr)(Math.abs(i));  
        } else if (i < lastZIndexArr && i >= 0) {
            return arr[i + 1];
        } else if (i === lastZIndexArr) {
            return arr[0];
        } else {
            return arr[(i + 1) % arr.length];
        }
    }

export class ListStruct<T> extends Monoid<T> implements Listoid<T> {

    readonly arr: Array<T>;
    protected mempty: T;

    protected constructor(ta: T | T[], empty?: T) {
        super();
        this.arr = Array.isArray(ta) ? ta : [ta];
        if (empty) { this.mempty = empty; }
    }


    dot: (t1: T) => (t2: T) => T
        = (t1: T) => (t2: T) => {
            const start = this.arr.findIndex(t => t === t1);
            const end = this.arr.findIndex(t => t === t2);
            const nextOne = next(this.arr);
            if (start !== -1 && end === -1) {
                return t1;
            } else if (start === -1 && end !== -1) {
                return t2;
            } else {
                return end > start ? nextOne(start) : nextOne(end);
            }
        }

    snoc: (t: T) => Listoid<T> = t => ListStruct.from([t, ...this.arr]);
    cons: (t: T) => Listoid<T> = t => ListStruct.from([...this.arr, t]);


    static from<T>(ta?: T | T[]): ListStruct<T> {
        if (!ta) {
            return new ListStruct([]);
        } else {
            return new ListStruct(ta);
        }
    }

    static empty<T>(): ListStruct<T> {
        return ListStruct.from<T>();
    }

    head(): Maybe<T> {
        return (this.arr?.length !== 0)
            ? Maybe.from(this.arr[0])
            : Maybe.from();
    }

    tail(): Maybe<T> {
        return (this.arr?.length > 0)
            ? Maybe.from(this.arr[this.arr.length - 1])
            : Maybe.from();
    }


}
