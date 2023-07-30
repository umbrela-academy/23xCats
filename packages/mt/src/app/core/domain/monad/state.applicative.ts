import { IApplicative } from "../../algebra/applicative/applicative.defs";
import { ListA } from "../../algebra/applicative/list/list.a";
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
        this.mAppend = mkMAppend();
    }

    fmap<S>(f: UnaryFunc<StateMonoRec<T>, S>): IFunctor<S> {
        return ListA.from((f(this.val)));
    }

    pure(t: StateMonoRec<T>): IApplicative<StateMonoRec<T>> {
        return ListA.from(t);
    }

    appl<S>(fts: ListA<(t: StateMonoRec<T>) => S>): IApplicative<S> {
        const valAsApplicative = ListA.from(this.val);
        return valAsApplicative.appl(fts);
    }


    static from<S extends Val, T extends MonoidalVal<S>>(
        ta: StateMonoRec<T>,
        mT?: StateMonoRec<T>,
        mApply?: StateRecOp<T>
    ): StateA<T> {
        return new StateA(mkMonoidal(ta, mT, mApply));
    }

}