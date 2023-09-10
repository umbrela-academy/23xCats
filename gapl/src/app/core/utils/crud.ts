export interface IdVal<V> {
  key: number;
  value: V;
}

export interface IdValue {
  key: number;
  value: string;
}

export class SafeCrudArray<V> {

  constructor(private _arr: Array<V>) { }

  get length(): number {
    return this._arr.length;
  }

  get(): Array<IdVal<V>> {
    return this._arr.map((v, i) => ({ key: i, value: v }));
  }

  indexOf(v: V): number {
    return this._arr.indexOf(v);
  }

  valueAt(index: number): V | null {
    if (index > -1 && index < this._arr.length) {
      return this._arr[index];
    } else {
      return null;
    }
  }

  add(addition: V, index?: number): void {
    if (index !== undefined && index > -1 && index < this._arr.length) {
      this._arr[index] = addition;
    } else {
      this._arr.push(addition);
    }
  }

  remove(index: number): void {
    if (index > -1 && index < this._arr.length) {
      this._arr.splice(index, 1);
    }
  }

}