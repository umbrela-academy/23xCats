
// export class StateF<T extends Val> implements MonoidalFunctor<T> {

//     val: StateMonoRec<T>;
//     mEmpty: StateMonoRec<T>;
//     empty = emptyStateF;
//     mAppend: (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => StateMonoRec<T>;

//     constructor(
//         protected readonly state: MonoidalVal<StateMonoRec<T>>
//     ) {
//         this.val = state.val;
//         this.mEmpty = state.mEmpty;
//         this.mAppend = mkMAppend();
//     }

//     fmap<S>(f: UnaryFunc<StateMonoRec<T>, S>): IFunctor<S> {
//         return ListF.from(f(this.val));
//     }
    
//     static from<T extends Val>(
//         ta: StateMonoRec<T>,
//         mT?: StateMonoRec<T>,
//         mApply?: StateRecOp<T>
//     ): StateF<T> {
//         return new StateF(mkMonoidal(ta, mT, mApply));
//     }
// }
