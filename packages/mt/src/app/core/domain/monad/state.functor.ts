import { StateM } from ".";
import { UnaryFunc } from "../../algebra/function/function.defs";
import { IFunctor } from "../../algebra/functor/functor.defs";
import { Val, matrix2rec, rec2matrix, recordAttributes } from "../model";
import { MonoidalFunctor, MonoidalVal, mkMonoidalVal } from "../monoid";
import { StateMonoRec, StateRecOp, emptyStateF, mkMAppend, mkMonoidal } from "../monoid/state.monoid";

export class StateF<T extends Val> implements MonoidalFunctor<T> {

    val: StateMonoRec<T>;
    mEmpty: StateMonoRec<T>;
    mAppend: (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => StateMonoRec<T>;


    constructor(protected readonly state: MonoidalVal<StateMonoRec<T>>) {
        this.val = state.val;
        this.mEmpty = state.mEmpty;
        this.mAppend = mkMAppend();
    }
    
    fmap: <S>(f: UnaryFunc<StateMonoRec<T>, S>) => IFunctor<S>;

    empty = emptyStateF;



    static from<S extends Val, T extends MonoidalVal<S>>(
        ta: StateMonoRec<T>,
        mT?: StateMonoRec<T>,
        mApply?: StateRecOp<T>
    ): StateF<T> {
        return new StateF(mkMonoidal(ta, mT, mApply));
    }
}
