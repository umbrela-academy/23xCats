import { IApplicative } from "../../algebra/applicative/applicative.defs";
import { UnaryFunc } from "../../algebra/function/function.defs";
import { IFunctor } from "../../algebra/functor/functor.defs";
import { Val } from "../model";
import { MonoidalApplicative, MonoidalVal, StateMonoRec, StateRecOp, mkMAppend, mkMonoidal } from "../monoid";


export class StateA<T extends Val> implements MonoidalApplicative<T> {
    mEmpty: StateMonoRec<T>;
    val: StateMonoRec<T>;
    mAppend: (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => StateMonoRec<T>;

    constructor(
        protected readonly state: MonoidalVal<StateMonoRec<T>>
    ) {
        this.val = state.val;
        this.mEmpty = state.mEmpty;
        this.mAppend = mkMAppend()
    }
    
    pure: (t: StateMonoRec<T>) => IApplicative<StateMonoRec<T>>;
    appl: <S>(fts: IApplicative<(t: StateMonoRec<T>) => S>) => IApplicative<S>;
    fmap: <S>(f: UnaryFunc<StateMonoRec<T>, S>) => IFunctor<S>;

    static from<S extends Val, T extends MonoidalVal<S>>(
        ta: StateMonoRec<T>,
        mT?: StateMonoRec<T>,
        mApply?: StateRecOp<T>
    ): StateA<T> {
        return new StateA(mkMonoidal(ta, mT, mApply));
    }

}