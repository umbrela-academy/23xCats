import { stat } from "fs";
import { IApplicative } from "../../algebra/applicative/applicative.defs";
import { UnaryFunc } from "../../algebra/function/function.defs";
import { IFunctor } from "../../algebra/functor/functor.defs";
import { IMonad } from "../../algebra/monad/monad.defs";
import { Val, rec2matrix } from "../model";
import { Trpl } from "../model/tuple";
import { MonoidalMonad, MonoidalVal, StateMonoRec, mkMAppend } from "../monoid";
import { ListM } from "../../algebra/monad/list/list.m";
import { NotImplementedException } from "@nestjs/common";

export class StateM<T extends Val> implements MonoidalMonad<T> {
    mEmpty: StateMonoRec<T>;
    mAppend: (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => StateMonoRec<T>;
    val: StateMonoRec<T>;



    constructor(
        protected readonly state: MonoidalVal<StateMonoRec<T>>
    ) {
        this.val = state.val;
        this.mEmpty = state.mEmpty;
        this.mAppend = mkMAppend();
    }
    bind: <S>(mts: (t: StateMonoRec<T>) => IMonad<S>) => IMonad<S>;

    fmap<S>(f: UnaryFunc<StateMonoRec<T>, S>): IFunctor<S> {
        return ListM.from((f(this.val)));
    }

    pure(t: StateMonoRec<T>): IApplicative<StateMonoRec<T>> {
        return ListM.from(t);
    }

    appl<S>(fts: ListM<(t: StateMonoRec<T>) => S>): IApplicative<S> {
        const valAsApplicative = ListM.from(this.val);
        return valAsApplicative.appl(fts);
    }

    flat(mmt: ListM<ListM<StateMonoRec<T>>>): ListM<StateMonoRec<T>> {
        //TODO find better if this does not make sense in this context
        return mmt.mt.arr.flat().reduce((acc, curr) => ListM.from(acc.mt.arr.concat(curr.mt.arr)));
    }
}



type TXOr<X, Y, Z> = X | Y | Z;

export type PositionMap
  = <X, Y, Z>(func: (t: TXOr<X, Y, Z>) => typeof t) =>
    (posn: Trpl<X, Y, Z>) =>
      Trpl<X, Y, Z>;
export const positionMap: PositionMap
  = <X, Y, Z>(func: (t: TXOr<X, Y, Z>) => typeof t) =>
    (posn: Trpl<X, Y, Z>) =>
      [...posn].map(i => func(i)) as Trpl<X, Y, Z>;


export type OrientationMap = PositionMap;
export type ConfigurationMap = PositionMap;

// export type Mapper = (i1: )

