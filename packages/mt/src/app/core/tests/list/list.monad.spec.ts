import { repeater } from './../../utils/funcs/repeat.func';
import { UnaryFunc } from '../../algebra/function/function.defs';
import { List } from './../../list.monad';
describe('List Monad', () => {
  describe('listBind', () => {
    it('should return a longer list', () => {
      const arr1 = List.from([1, 2, 3]);
      const tToListOfT = (t: number) => List.from([t, t * 10, t * 100]);
      const res = List.bind(arr1)(tToListOfT);
      console.log('input', arr1.arr);
      console.log('result:', res.arr);
      expect(res.arr.length === 3 * arr1.arr.length);
      const result = [1, 10, 100, 2, 20, 200, 3, 30, 300];
      expect(res.arr === result);
      const doubleBind = List.bind(res)(tToListOfT);
      console.log('doubleBind', doubleBind);

      const tToListOfT2 = (t: number) => List.from([t, t * 10]);
      const res2 = List.bind(arr1)(tToListOfT2);
      console.log('input', arr1.arr);
      console.log('result:', res2.arr);
      expect(res2.arr.length === 2 * arr1.arr.length);
      const result2 = [1, 10, 2, 20, 3, 30];
      expect(res.arr === result2);

      const tToLofT3: (t: number) => List<string> = (t: number) =>
        List.from<string>(repeater<string>(t)('bunny' + t));
      const res3 = List.bind(arr1)(tToLofT3);
      const res4 = List.bind(res3)(tToLofT3);
      const res5 = List.bind(res4)(tToLofT3);
      console.log('input', arr1.arr);
      console.log('res3:', res3.arr);
      console.log('res4:', res5.arr);
      expect(res3.arr.length !== arr1.arr.length);
    });
  });

  describe('listFmap', () => {
    it('should transform each character in the list to its ASCII number', () => {
      const arr1 = List.from(['a', 'b', 'c']);
      const uFunc: UnaryFunc<string, number> = (s) => s.codePointAt(0);
      const mapped = List.fmap(uFunc)(arr1);
      console.log('mapped: ', mapped.arr);
      expect(mapped.arr.length === arr1.arr.length);
    });
  });

  describe('listAppl', () => {
    const arr1 = List.from(['a', 'b', 'c']);
    const uFunc10: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 10;
    const uFunc20: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 100;
    const uFunc30: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 1000;
    const applFuncs = List.from([uFunc10, uFunc20, uFunc30]);

    it('should apply each func to each item in the list', () => {
      const applied = List.appl(applFuncs)(arr1);
      console.log('applied: ', applied.arr, arr1.arr);
      expect(applied.arr.length !== arr1.arr.length);
    });

    it('should zip each func in one list to each input value in the other list', () => {
      const zipListed = List.applZip(applFuncs)(arr1);
      console.log('input', arr1.arr);
      console.log('zipListed', zipListed.arr);
      const zzInp = List.fmap((t: number) => '' + t)(zipListed);
      const zipZip = List.applZip(applFuncs)(zzInp);
      console.log('zipZip', zipZip.arr, zzInp.arr);
      expect(zipListed.arr.length === arr1.arr.length);
    });
  });
});
