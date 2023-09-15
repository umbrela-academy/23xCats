import { MonoidalVal } from ".";
import { StateRecord } from "../model";
import { Val } from "../model/val";

export type StateMonoRec<T> = StateRecord<
  MonoidalVal<T>,
  MonoidalVal<T>,
  MonoidalVal<T>
>;

export type StateRecOp<T extends Val> = (a: StateMonoRec<T>) => (b: StateMonoRec<T>) => StateMonoRec<T>;
