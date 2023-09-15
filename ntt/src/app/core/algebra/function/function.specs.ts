import { zip } from "../../utils/funcs/zip-with.func";
import { ChurchZen } from "./function.defs";

function churchZen<T>(id: number): ChurchZen<T> {
    return (s: Array<T>) => (s.length >= id ? s[id] : s[0]);
  }
  
  const eightElemArr = [...Array(8).fill(1).map((_, i) => i)] as const; // [ 0, 1, 2, 3, 4, 5, 6, 7] 
  const engNumValArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'] as const;
  
  const englishNumerals = new Map(
    eightElemArr.map(i => [i, engNumValArr[i]])
  );
  console.log("englishNumerals", englishNumerals);
  
  const numerals = new Map([
    [0, 'Sunna'],
    [1, 'Ek'],
    [2, 'Dui'],
    [3, 'Teen'],
    [4, 'Chaar'],
    [5, 'Paach'],
    [6, 'Chha'],
    [7, 'Saat'],
  ]);
  console.log("numerals", numerals);
  
  const numKeyArray = Array.from(numerals.keys());
  const numValArray = Array.from(numerals.values());

  const engNumKeyArray = Array.from(englishNumerals.keys());
  const engNumValArray = Array.from(englishNumerals.values());
  
  const outputA = numKeyArray.map((i) => numerals.get(i));
  const outputB = engNumKeyArray.map((i) => englishNumerals.get(i));
  console.log('output A, B', outputA, outputB);


  const outputC = churchZen(2)(numValArray);
  const outputD = churchZen(2)(engNumValArray);
  console.log('churchZen 2 C, D', outputC, outputD);
  
  const trans = (arr: string[]) =>  (i: number) => churchZen(i)(arr);
  const engTransl8r = trans(engNumValArray);
  const nepTransl8r = trans(numValArray);
  
  const translateNep2Eng = (i: number) => [nepTransl8r(i), engTransl8r(i)] as const;
  
  eightElemArr.forEach(i => {
      console.log("translate " + i, translateNep2Eng(i));
  })
  

console.log("5", zip(numValArray)(engNumValArray)[5]);
console.log("final", zip(numValArray)(engNumValArray));