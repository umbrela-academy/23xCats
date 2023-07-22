export class ListStruct<T> {
  readonly arr: Array<T>;

	protected constructor(ta: T | T[]) {
		this.arr = Array.isArray(ta) ? ta : [ta];
	}

  static from<T>(ta?: T | T[]): ListStruct<T> {
    if (!ta) {
      return new ListStruct([]);
    } else { 
      return new ListStruct(ta);
    }
  }

  static empty<T>(): ListStruct<T> {
		return ListStruct.from<T>();
  }
  
  head(): T | null {
    return (this.arr?.length !== 0)
      ? this.arr[0]
      : null;
  }

  tail(): T | null {
    return (this.arr?.length > 0) 
      ? this.arr[this.arr.length - 1]
      : null
  }

   cons: <T>(t: T) => (ts: ListStruct<T>) => ListStruct<T>
    = (t) => (ts) => ListStruct.from(ts.arr.concat([t]));
}