import { UnaryFunc } from '../../type-defs.models';
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

      const tToListOfT2 = (t: number) => List.from([t, t * 10]);
      const res2 = List.bind(arr1)(tToListOfT2);
      console.log('input', arr1.arr);
      console.log('result:', res2.arr);
      expect(res2.arr.length === 2 * arr1.arr.length);
      const result2 = [1, 10, 2, 20, 3, 30];
      expect(res.arr === result2);
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
    it('should apply each func to each item in the list', () => {
      const arr1 = List.from(['a', 'b', 'c']);
      const uFunc10: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 10;
        const uFunc20: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 100;
        const uFunc30: UnaryFunc<string, number> = (s) => s.codePointAt(0) * 1000;
        const applFuncs = List.from([uFunc10, uFunc20, uFunc30]);
        const applied = List.appl(applFuncs)(arr1);
      console.log('applied: ', applied.arr, arr1.arr);
      expect(applied.arr.length !== arr1.arr.length);
    });
  });
});
