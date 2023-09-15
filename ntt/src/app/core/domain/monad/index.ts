

// export abstract class StateM<T> implements IMonad<T> {
//   abstract readonly mt: State<T, T, T>; // full state
//   abstract readonly lft: ListF<T>; // functorial state
//   abstract readonly lat: ListA<T>; // applicative state

//   abstract bind: <S>(mts: (t: T) => IMonad<S>) => IMonad<S>;
//   abstract flat: (mmt: IMonad<IMonad<T>>) => IMonad<T>;
//   abstract pure: (t: T) => IApplicative<T>;
//   abstract appl: <S>(fts: IApplicative<(t: T) => S>) => IApplicative<S>;
//   abstract fmap: <S>(f: UnaryFunc<T, S>) => IFunctor<S>;
// }

export * from './state.monad';
