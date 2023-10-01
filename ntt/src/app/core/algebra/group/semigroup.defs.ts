/**
 *  Sets equipped with a single binary operation that is associative. Must
 satisfy the following laws:

 + Associativity of `<+>`:
     forall a b c, a <+> (b <+> c) == (a <+> b) <+> c

        interface Semigroup ty where
        (<+>) : ty -> ty -> ty
 *
 *
 *  eg.
    const sgs: Semigroup<string> = {
        dot: (t1: string) => (t2: string) => t1 + t2
    };
    console.log(sgs.dot('nis')('chal'));

    const sgs: Semigroup<Complex> = {
        dot: (t1: Complex) => (t2: Complex) => ({
            i: t1.i + t2.i,
            r: t1.r + t2.r
        })
    };
    console.log(sgs.dot({ r: 1, i: 0 })({ r: 2, i: 3 }));

*/
export abstract class Semigroup<T> {
  abstract dot: (t1: T) => (t2: T) => T;
}
