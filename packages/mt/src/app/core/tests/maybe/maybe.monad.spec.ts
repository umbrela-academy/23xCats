import { UnaryFunc } from '../../algebra/function/function.defs';
import { Maybe, Just } from './../../maybe.monad';

describe('Maybe Monad', () => {
  describe('listBind', () => {
    it('should return a longer list', () => {
      const forty2: Maybe<number> = Maybe.pure(42);
      const fortyNull: Maybe<number> = Maybe.pure();
      const tToMaybeOfT: (t: number) => Maybe<number> = (t: number) =>
        Maybe.pure(t * 10);
      const res = Maybe.bind<number, number>(forty2)(tToMaybeOfT);
      const res2 = Maybe.bind<number, number>(fortyNull)(tToMaybeOfT);

      console.log('input', forty2.opt);
      console.log('result:', res.opt);

      console.log('input2', fortyNull.opt);
      console.log('result2:', res2.opt);

      expect(res).toBeDefined();
      expect(res2).toBeDefined();

      const doubleBind = Maybe.bind(res)(tToMaybeOfT);
      const dblDblBind = Maybe.bind(doubleBind)(tToMaybeOfT);
      const dblDblDblBind = Maybe.bind(dblDblBind)(tToMaybeOfT);
      console.log('doubleBind', doubleBind.opt);
      console.log('dblDblBind', dblDblBind.opt);
      console.log('dblDblDblBind', dblDblDblBind.opt);
    });
  });

  describe('maybeFmap', () => {
    it('should transform any (if availalbe) character in the maybe to its ASCII number', () => {
      const arr1 = Maybe.pure('q');
      const uFunc: UnaryFunc<string, number> = (s) => s.codePointAt(0);
      const mapped = Maybe.fmap(uFunc)(arr1);
      const mappedNothing = Maybe.fmap(uFunc)(Maybe.pure());
      console.log('mapped: ', mapped.opt, mappedNothing.opt);
      expect(mapped.opt).toBeDefined();
    });
  });

  describe('maybeAppl', () => {
    const arr1 = Maybe.pure('a');
    const arr2 = Maybe.pure<string>();
    const uFunc30: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 1000;
    const applFuncs = Maybe.pure(uFunc30);

    it('should apply each func to each item in the list', () => {
      const applied = Maybe.appl(applFuncs)(arr1);
      const applied2 = Maybe.appl(applFuncs)(arr2);
      console.log(
        'applied: ',
        [arr1.opt, applied.opt],
        [arr2.opt, applied2.opt]
      );
      expect(applied).toBeInstanceOf(Maybe);
    });
  });
});
