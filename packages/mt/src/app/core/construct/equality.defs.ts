/**
 * The Eq interface defines inequality and equality.
interface Eq ty where
    (==) : ty -> ty -> Bool
    (/=) : ty -> ty -> Bool

  These are different. Go figure.
  
  const boolEq: Eq<boolean> = {
    eq: (t1) => (t2) => (t1 && t2) || (!t1 && !t2)
  }
  const boolEq = {
    eq: (t1) => (t2) => (t1 === true && t2 === true) || (t1 === false && t2 === false)
  }
 *
*/
export abstract class Eq<T> {
  static eq: <T>(t1: T) => (t2: T) => boolean;
}
