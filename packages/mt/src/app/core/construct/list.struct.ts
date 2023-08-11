import { Monoid } from "../algebra/monoid/monoid.defs";
import { Maybe } from "../maybe.monad";
import { Listoid } from "./listoid.defs";

export class ListStruct<T> extends Monoid<T> implements Listoid<T> {
    readonly arr: Array<T>;
    mempty: T;


    protected constructor(ta: T | T[], empty?: T) {
        super();
        this.arr = Array.isArray(ta) ? ta : [ta];
        if (empty) { this.mempty = empty; }
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
