// import { ListM as M } from './list.m';

// describe('list-monad-examples', () => {
//   it('should FMAP this function to each element', () => {
//     const lpFirst = M.from(['a', 'b', 'c', 'd']);
//     type UnFunc = (s: string) => number;
//     const unFunc: UnFunc = (s: string) => s.charCodeAt(0);

//     const result = lpFirst.fmap(unFunc);

//     const lpSecond = M.from([2, 3, 5, 7, 11]);
//     const result2 = lpSecond.fmap((n: number) => 'SunDepth: ' + n * n);

//     expect(result.arr).toStrictEqual(M.from([97, 98, 99, 100]).arr);

//     console.log('result2', result2.arr);
//     expect(result2.arr).toStrictEqual(
//       M.from([
//         'SunDepth: 4',
//         'SunDepth: 9',
//         'SunDepth: 25',
//         'SunDepth: 49',
//         'SunDepth: 121',
//       ]).arr
//     );
//   });

//   const listOfFunctions = M.from([
//     (n: number) => n + 10,
//     (n: number) => n * 10,
//     (n: number) => n / 10,
//   ]);

//   const listOfInputs = M.from([73, 97, 4]);

//   it(`should 
//     zip-APPly this list of functions
//     to this list of inputs
//     that are compatible inputs for those functions`, () => {
//     const result1 = listOfInputs.applZip(listOfFunctions);
//     expect(result1.arr[0]).toBe(83);
//     expect(result1.arr[1]).toBe(970);
//     expect(result1.arr.length).toEqual(listOfInputs.arr.length);
//     console.log('last one: ', result1.arr[2], result1.arr);
//   });

//   it(`should 
//     cross-prod-APPly this list of functions
//     to this list of inputs
//     that are compatible inputs for those functions`, () => {
//     const lmOfFunctions = M.from(listOfFunctions.arr);
//     const lmOfInputs = M.from(listOfInputs.arr);

//     //Compare this with
//     //const result1 = ListPrime.appl(listOfFunctions)(listOfInputs);
//     const result1 = lmOfInputs.appl(lmOfFunctions);
//     expect(result1.arr).toStrictEqual([
//       83, 107, 14, 730, 970, 40, 7.3, 9.7, 0.4,
//     ]);
//     console.log(
//       'result: ',
//       result1.arr.reduce((acc, cur) => ' ' + acc + ' ' + cur, '')
//     );
//     expect(result1.arr.length).toEqual(
//       listOfInputs.arr.length * listOfFunctions.arr.length
//     );
//   });

//   it('should create bunny invasion scenario', () => {
//     const bunny = 'bunny';

//     const repeater = (b: string) => `${b}M ${b}F`;
  
//     const pairFactory = (b: string) => [b + '_m', b + '_f'];

//     //mt
//     const bunnyAlone = M.from(bunny);
//     const bunnyMalone = M.from([bunny, bunny]);

//     const mts = (i: string) => M.from(repeater(i));
//     const mts2 = (i: string) => M.from(pairFactory(i));


//     const result1 = bunnyAlone.bind(mts);
//     const result11 = result1.bind(mts).bind(mts);

//     const result2 = bunnyMalone.bind(mts2);
//     const result22 = result2.bind(mts2).bind(mts2);

//     console.log('result', result1.arr);
//     console.log('result2', result11.arr);
//     console.log('result3', result2.arr);
//     console.log('result4', result22.arr);

//     const doublingAdder2 = (num: number) => M.from(num + num);
//     const dAdd = doublingAdder2;

//     const denominations = M.from([100, 200, 300]);
//     const firstBind = denominations.bind(dAdd);
//     console.log('firstBind', firstBind.arr);
//     const chainBind = firstBind.bind(dAdd).bind(dAdd).bind(dAdd);
    
//     console.log('chainBind', chainBind.arr);

//   });
// });
