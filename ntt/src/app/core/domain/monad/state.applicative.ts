

// export class StateA<T extends Val> implements MonoidalApplicative<T> {
//     mEmpty: StateMonoRec<T>;
//     val: StateMonoRec<T>;
//     mAppend: (t: StateMonoRec<T>) => (u: StateMonoRec<T>) => StateMonoRec<T>; 

//     constructor(
//         protected readonly state: MonoidalVal<StateMonoRec<T>>
//     ) {
//         this.val = state.val;
//         this.mEmpty = state.mEmpty;
//         this.mAppend = mkMAppend();
//     }

//     fmap<S>(f: UnaryFunc<StateMonoRec<T>, S>): IFunctor<S> {
//         return ListA.from((f(this.val)));
//     }

//     pure(t: StateMonoRec<T>): IApplicative<StateMonoRec<T>> {
//         return ListA.from(t);
//     }

//     appl<S>(fts: ListA<(t: StateMonoRec<T>) => S>): IApplicative<S> {
//         const valAsApplicative = ListA.from(this.val);
//         return valAsApplicative.appl(fts);
//     }

// }