import { Semigroup } from '../group/semigroup.defs';

/**
 *  Sets equipped with a single binary operation that is associative, along with
 a neutral element for that binary operation.  Must satisfy the following
 laws:
 + Associativity of `<+>`:
     forall a b c, a <+> (b <+> c) == (a <+> b) <+> c
 + Neutral for `<+>`:
     forall a,     a <+> neutral   == a
     forall a,     neutral <+> a   == a

     For example, a neutral element for 'adder' [addr] function would be an additive identity [addi]

interface Semigroup ty => Monoid ty where
  neutral : ty
 *
*/
export abstract class Monoid<T> extends Semigroup {
  protected addi: T;
}
