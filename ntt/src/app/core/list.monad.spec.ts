import { ListPrime } from './list.monad';

describe('list-monad-examples', () => {
  it('should FMAP this function to each element', () => {
    const lpFirst = ListPrime.from(['a', 'b', 'c', 'd']);
    type UnFunc = (s: string) => number;
    const unFunc: UnFunc = (s: string) => s.charCodeAt(0);
    const result = ListPrime.fmap(unFunc)(lpFirst);

    const lpSecond = ListPrime.from([2, 3, 5, 7, 11]);
    const result2 = ListPrime.fmap((n: number) => 'SunDepth: ' + n * n)(
      lpSecond
    );

    expect(result.arr).toStrictEqual(ListPrime.from([97, 98, 99, 100]).arr);

    console.log('result2', result2.arr);
    expect(result2.arr).toStrictEqual(
      ListPrime.from([
        'SunDepth: 4',
        'SunDepth: 9',
        'SunDepth: 25',
        'SunDepth: 49',
        'SunDepth: 121',
      ]).arr
    );
  });

  const listOfFunctions = ListPrime.from([
    (n: number) => n + 10,
    (n: number) => n * 10,
    (n: number) => n / 10,
  ]);

  const listOfInputs = ListPrime.from([73, 97, 4]);

  it(`should 
    zip-APPly this list of functions
    to this list of inputs
    that are compatible inputs for those functions`, () => {
    const result1 = ListPrime.applZip(listOfFunctions)(listOfInputs);
    expect(result1.arr[0]).toBe(83);
    expect(result1.arr[1]).toBe(970);
    expect(result1.arr.length).toEqual(listOfInputs.arr.length);
    console.log('last one: ', result1.arr[2], result1.arr);
  });

  it(`should 
    cross-prod-APPly this list of functions
    to this list of inputs
    that are compatible inputs for those functions`, () => {
    const result1 = ListPrime.appl(listOfFunctions)(listOfInputs);
    expect(result1.arr).toStrictEqual([
      83, 107, 14, 730, 970, 40, 7.3, 9.7, 0.4,
    ]);
    console.log(
      'result: ',
      result1.arr.reduce((acc, cur) => ' ' + acc + ' ' + cur, '')
    );
    expect(result1.arr.length).toEqual(
      listOfInputs.arr.length * listOfFunctions.arr.length
    );
  });

  it('should create bunny invasion scenario', () => {
    const bunny = 'bunny';

    const repeater = (b: string) => `${b}M ${b}F`;
    const pairFactory = (b: string) => [b + '_m', b + '_f'];

    //mt
    const bunnyAlone = ListPrime.from(bunny);
    const bunnyMalone = ListPrime.from([bunny, bunny]);

    const mts = (i: string) => ListPrime.from(repeater(i));
    const mts2 = (i: string) => ListPrime.from(pairFactory(i));

    const result = ListPrime.bind(bunnyAlone)(mts);
    const result2 = ListPrime.bind(bunnyMalone)(mts);

    const result3 = ListPrime.bind(result)(mts);
    const result4 = ListPrime.bind(result3)(mts);

    console.log('result', result.arr);
    console.log('result2', result2.arr);
    console.log('result3', result3.arr);
    console.log('result4', result4.arr);

    const resultP = ListPrime.bind(bunnyAlone)(mts2);
    const result2P = ListPrime.bind(bunnyMalone)(mts2);

    const result3PP = ListPrime.bind(resultP)(mts2);
    const result4PP = ListPrime.bind(result3PP)(mts2);

    const result3P2P = ListPrime.bind(result2P)(mts2);
    const result4P2P = ListPrime.bind(result3P2P)(mts2);

    console.log('result', resultP.arr);
    console.log('result2P', result2P.arr);
    console.log('result3PP', result3PP.arr);
    console.log('result4PP', result4PP.arr);
    console.log('result3P2P', result3P2P.arr);
    console.log('result4P2P', result4P2P.arr);
  });
});
