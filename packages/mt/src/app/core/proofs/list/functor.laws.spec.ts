import { List } from '../../list.monad';
describe('List Monad: Functor Laws (Verifications, not Proofs)', () => {
  describe('1st Law: fmapping with identity', () => {
    const listA = List.from([1, 2, 3]);
    const additiveIdElement = 0;
    const additiveIdMorphism = (t: number) => t + additiveIdElement;

    const listB = List.from(['a', 'b', 'c']);
    const concatenativeIdElement = '';
    const concatenativeIdMorphism = (t: string) => t + concatenativeIdElement;

    it('should return the same List', () => {
      const res = List.fmap(additiveIdMorphism)(listA);
      console.log('inp', listA.arr);
      console.log('res', res.arr);
      expect(res.arr).toStrictEqual(listA.arr);

      const res2 = List.fmap(concatenativeIdMorphism)(listB);
      console.log('inp', listB.arr);
      console.log('res', res2.arr);
      expect(res2.arr).toStrictEqual(listB.arr);
    });
  });

  describe('2nd Law: fmapping with distributivity', () => {
    const f = (t: number) => t + 100;
    const g = (t: number) => t - 50;
    const fmapF = List.fmap(f);
    const fmapG = List.fmap(g);
    const fmapGAfterF = List.fmap((t: number) => g(f(t)));
    const testList = List.from([100, 200, 300]);
    it('should return the same List', () => {
      const res1 = fmapGAfterF(testList);
      const composed = fmapG(fmapF(testList));
      console.log('res1', res1.arr);
      console.log('composed', composed.arr);
      expect(res1.arr).toStrictEqual(composed.arr);
      expect(res1).toStrictEqual(composed);
    });
  });
});
